import React, { useState, useEffect } from 'react'
import './ImmigrationNews.css'

// Fallback news data if APIs fail
const getFallbackNews = (language) => {
  const getDateString = (daysAgo) => {
    const date = new Date()
    date.setDate(date.getDate() - daysAgo)
    return date.toISOString().split('T')[0]
  }

  return language === 'ht' ? [
    {
      id: 1,
      title: 'Dat Limit Renouvleman TPS pou Ayiti',
      date: getDateString(1),
      source: 'USCIS',
      summary: 'Tcheke sit USCIS pou dat limit renouvleman TPS. Asire w ke ou depoze aplikasyon ou anvan dat limit la.',
      link: 'https://www.uscis.gov/humanitarian/temporary-protected-status',
      category: 'TPS'
    }
  ] : [
    {
      id: 1,
      title: 'Haiti TPS Renewal Information',
      date: getDateString(1),
      source: 'USCIS',
      summary: 'Check USCIS website for TPS renewal deadlines. Make sure to file your application before the deadline.',
      link: 'https://www.uscis.gov/humanitarian/temporary-protected-status',
      category: 'TPS'
    }
  ]
}

// Fetch USCIS news via RSS2JSON (free service)
const fetchUSCISNews = async () => {
  try {
    // Using RSS2JSON to convert USCIS RSS feed to JSON
    // USCIS newsroom RSS: https://www.uscis.gov/newsroom/rss
    const rssUrl = 'https://www.uscis.gov/newsroom/rss'
    
    // Try RSS2JSON first
    try {
      const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}&api_key=public`
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (response.ok) {
        const data = await response.json()
        if (data.status === 'ok' && data.items && data.items.length > 0) {
          const fiveDaysAgo = new Date()
          fiveDaysAgo.setDate(fiveDaysAgo.getDate() - 5)
          
          return data.items
            .filter(item => {
              const itemDate = new Date(item.pubDate)
              const titleLower = item.title.toLowerCase()
              const contentLower = (item.content || item.description || '').toLowerCase()
              const isRecent = itemDate >= fiveDaysAgo
              // Show all USCIS news, but prioritize Haiti/TPS related
              const isRelevant = titleLower.includes('haiti') || 
                               titleLower.includes('tps') || 
                               titleLower.includes('temporary protected') ||
                               titleLower.includes('immigration') ||
                               contentLower.includes('haiti') ||
                               contentLower.includes('tps')
              
              return isRecent && isRelevant
            })
            .slice(0, 5)
            .map((item, index) => ({
              id: `uscis-${index}-${Date.now()}`,
              title: item.title,
              date: new Date(item.pubDate).toISOString().split('T')[0],
              source: 'USCIS',
              summary: (item.description || item.content || '').replace(/<[^>]*>/g, '').substring(0, 200) + '...',
              link: item.link,
              category: item.title.toLowerCase().includes('tps') ? 'TPS' : 'Updates'
            }))
        }
      }
    } catch (rssError) {
      console.log('RSS2JSON failed, trying alternative method:', rssError)
    }
    
    // Alternative: Try fetching RSS directly and parsing
    // Note: This may have CORS issues, but worth trying
    try {
      const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(rssUrl)}`
      const response = await fetch(proxyUrl)
      if (response.ok) {
        const data = await response.json()
        const parser = new DOMParser()
        const xmlDoc = parser.parseFromString(data.contents, 'text/xml')
        const items = xmlDoc.querySelectorAll('item')
        
        const fiveDaysAgo = new Date()
        fiveDaysAgo.setDate(fiveDaysAgo.getDate() - 5)
        
        const newsItems = Array.from(items)
          .filter(item => {
            const pubDate = item.querySelector('pubDate')?.textContent
            if (!pubDate) return false
            const itemDate = new Date(pubDate)
            return itemDate >= fiveDaysAgo
          })
          .slice(0, 5)
          .map((item, index) => {
            const title = item.querySelector('title')?.textContent || ''
            const description = item.querySelector('description')?.textContent || ''
            const link = item.querySelector('link')?.textContent || ''
            const pubDate = item.querySelector('pubDate')?.textContent || ''
            
            return {
              id: `uscis-alt-${index}-${Date.now()}`,
              title: title,
              date: new Date(pubDate).toISOString().split('T')[0],
              source: 'USCIS',
              summary: description.replace(/<[^>]*>/g, '').substring(0, 200) + '...',
              link: link,
              category: title.toLowerCase().includes('tps') ? 'TPS' : 'Updates'
            }
          })
        
        if (newsItems.length > 0) return newsItems
      }
    } catch (altError) {
      console.log('Alternative RSS fetch failed:', altError)
    }
    
    return []
  } catch (error) {
    console.error('Error fetching USCIS news:', error)
    return []
  }
}

// Fetch general immigration news
const fetchImmigrationNews = async () => {
  try {
    // Try multiple RSS sources for immigration news
    const rssSources = [
      'https://www.aila.org/rss',
      'https://www.nilc.org/feed/',
      'https://www.immigrationimpact.com/feed/'
    ]
    
    const fiveDaysAgo = new Date()
    fiveDaysAgo.setDate(fiveDaysAgo.getDate() - 5)
    
    const allNews = []
    
    // Try to fetch from each source
    for (const rssUrl of rssSources) {
      try {
        const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}&api_key=public`
        const response = await fetch(apiUrl)
        
        if (response.ok) {
          const data = await response.json()
          if (data.status === 'ok' && data.items) {
            const filtered = data.items
              .filter(item => {
                const itemDate = new Date(item.pubDate)
                const titleLower = item.title.toLowerCase()
                const contentLower = (item.content || item.description || '').toLowerCase()
                const isRecent = itemDate >= fiveDaysAgo
                const isRelevant = titleLower.includes('haiti') || 
                                 titleLower.includes('tps') ||
                                 titleLower.includes('immigration') ||
                                 contentLower.includes('haiti') ||
                                 contentLower.includes('tps')
                return isRecent && isRelevant
              })
              .slice(0, 2)
              .map((item, index) => ({
                id: `imm-${rssUrl}-${index}-${Date.now()}`,
                title: item.title,
                date: new Date(item.pubDate).toISOString().split('T')[0],
                source: item.author || data.feed?.title || 'Immigration News',
                summary: (item.description || item.content || '').replace(/<[^>]*>/g, '').substring(0, 200) + '...',
                link: item.link,
                category: item.title.toLowerCase().includes('tps') ? 'TPS' : 'Updates'
              }))
            
            allNews.push(...filtered)
          }
        }
      } catch (sourceError) {
        console.log(`Failed to fetch from ${rssUrl}:`, sourceError)
        continue
      }
    }
    
    return allNews.slice(0, 3) // Return top 3
  } catch (error) {
    console.error('Error fetching immigration news:', error)
    return []
  }
}

function ImmigrationNews({ language, t, searchQuery = '' }) {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true)
      setError('')
      
      try {
        // Fetch real news from USCIS and other sources
        const [uscisNews, immigrationNews] = await Promise.all([
          fetchUSCISNews(),
          fetchImmigrationNews()
        ])
        
        // Combine and sort by date (newest first)
        let allNews = [...uscisNews, ...immigrationNews]
          .sort((a, b) => new Date(b.date) - new Date(a.date))
        
        // If no real news found, use fallback
        if (allNews.length === 0) {
          allNews = getFallbackNews(language)
        }
        
        // Filter to only show news from past 5 days
        const today = new Date()
        today.setHours(23, 59, 59, 999)
        const fiveDaysAgo = new Date(today)
        fiveDaysAgo.setDate(today.getDate() - 5)
        fiveDaysAgo.setHours(0, 0, 0, 0)
        
        const recentNews = allNews.filter(item => {
          const itemDate = new Date(item.date)
          itemDate.setHours(0, 0, 0, 0)
          return itemDate >= fiveDaysAgo
        })
        
        // Apply search filter if there's a query
        const filtered = searchQuery
          ? recentNews.filter(item =>
              item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.summary.toLowerCase().includes(searchQuery.toLowerCase())
            )
          : recentNews
        
        setNews(filtered)
      } catch (err) {
        console.error('Error loading news:', err)
        setError(language === 'en' 
          ? 'Unable to load news. Showing important information.'
          : 'Pa ka chaje nouvèl. Ap montre enfòmasyon enpòtan.')
        // Fallback to sample data
        setNews(getFallbackNews(language))
      } finally {
        setLoading(false)
      }
    }
    
    loadNews()
  }, [language, searchQuery])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(language === 'en' ? 'en-US' : 'fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getCategoryColor = (category) => {
    const colors = {
      'TPS': '#667eea',
      'Policy': '#28a745',
      'Resources': '#ffc107',
      'Updates': '#17a2b8',
      'Politik': '#28a745',
      'Resous': '#ffc107',
      'Mizajou': '#17a2b8'
    }
    return colors[category] || '#6c757d'
  }

  if (loading) {
    return (
      <div className="immigration-news">
        <h2>{t('newsTitle')}</h2>
        <div className="news-loading">
          <div className="spinner"></div>
          <p>{language === 'en' ? 'Loading news...' : 'Ap chaje nouvèl...'}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="immigration-news">
      <h2>{t('newsTitle')}</h2>
      <p className="news-subtitle">{t('newsSubtitle')}</p>
      
      {error && (
        <div className="news-error">
          <p>{error}</p>
        </div>
      )}

      {news.length === 0 ? (
        <div className="no-news">
          <p>{language === 'en' 
            ? 'No news found. Check back later for updates.'
            : 'Pa gen nouvèl jwenn. Tcheke pita pou mizajou.'}
          </p>
        </div>
      ) : (
        <div className="news-list">
          {news.map((item) => (
            <article key={item.id} className="news-item">
              <div className="news-header">
                <span 
                  className="news-category"
                  style={{ backgroundColor: getCategoryColor(item.category) }}
                >
                  {item.category}
                </span>
                <time className="news-date">{formatDate(item.date)}</time>
              </div>
              <h3 className="news-title">{item.title}</h3>
              <p className="news-summary">{item.summary}</p>
              <div className="news-footer">
                <span className="news-source">{item.source}</span>
                {item.link && item.link !== '#' && (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="news-link"
                  >
                    {t('readMore')} →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      )}

      <div className="news-note">
        <p>
          {language === 'en' 
            ? '💡 News is fetched from USCIS and immigration news sources. For the latest official updates, always check USCIS.gov and consult with an immigration attorney.'
            : '💡 Nouvèl yo soti nan USCIS ak sous nouvèl imigrasyon. Pou dènye mizajou ofisyèl yo, toujou tcheke USCIS.gov epi konsilte avèk yon avoka imigrasyon.'}
        </p>
        <p style={{ marginTop: '10px', fontSize: '0.9rem', opacity: 0.8 }}>
          {language === 'en' 
            ? '📡 News updates automatically from official sources'
            : '📡 Nouvèl mete ajou otomatikman nan sous ofisyèl'}
        </p>
      </div>
    </div>
  )
}

export default ImmigrationNews

