import React, { useState, useEffect, Suspense, lazy } from 'react'
import './App.css'
import './components/DarkModeStyles.css'
import StatusAssessment from './components/StatusAssessment'
import LanguageToggle from './components/LanguageToggle'
import DarkModeToggle from './components/DarkModeToggle'
import SearchBar from './components/SearchBar'
import ImmigrationNews from './components/ImmigrationNews'
import { translations } from './translations'

// Lazy load heavy components for better performance
const StatusInfo = lazy(() => import('./components/StatusInfo'))
const Timeline = lazy(() => import('./components/Timeline'))
const Resources = lazy(() => import('./components/Resources'))
const DocumentChecklist = lazy(() => import('./components/DocumentChecklist'))
const ImportantDates = lazy(() => import('./components/ImportantDates'))
const FormsFinder = lazy(() => import('./components/FormsFinder'))
const CostEstimator = lazy(() => import('./components/CostEstimator'))
const FAQ = lazy(() => import('./components/FAQ'))
const OfficeFinder = lazy(() => import('./components/OfficeFinder'))
const KnowYourRights = lazy(() => import('./components/KnowYourRights'))

function App() {
  const [currentStatus, setCurrentStatus] = useState(null)
  const [language, setLanguage] = useState('en')
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true' || 
           (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
  })
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark-mode')
      document.body.classList.add('dark-mode')
    } else {
      document.documentElement.classList.remove('dark-mode')
      document.body.classList.remove('dark-mode')
    }
    localStorage.setItem('darkMode', darkMode.toString())
  }, [darkMode])

  const t = (key) => translations[language][key] || key

  const LoadingSpinner = () => (
    <div className="loading-spinner">
      <div className="spinner"></div>
      <p>{language === 'en' ? 'Loading...' : 'Ap chaje...'}</p>
    </div>
  )

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <header className="app-header">
        <div className="header-top">
          <div className="header-controls">
            <LanguageToggle language={language} setLanguage={setLanguage} />
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
        </div>
        <h1>{t('appTitle')}</h1>
        <p className="subtitle">{t('appSubtitle')}</p>
        {currentStatus && (
          <SearchBar 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery}
            language={language}
            t={t}
          />
        )}
      </header>

      <main className="app-main">
        {!currentStatus ? (
          <div>
            <StatusAssessment 
              setCurrentStatus={setCurrentStatus} 
              language={language}
              t={t}
            />
            <ImmigrationNews language={language} t={t} searchQuery={searchQuery} />
          </div>
        ) : (
          <div className="status-results">
            <div className="action-buttons">
              <button 
                className="back-button"
                onClick={() => {
                  setCurrentStatus(null)
                  setSearchQuery('')
                }}
                aria-label={t('backToAssessment')}
              >
                ← {t('backToAssessment')}
              </button>
              <button 
                className="share-button"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: t('appTitle'),
                      text: `${t('statusInfo')}: ${t(currentStatus)}`,
                      url: window.location.href
                    }).catch(() => {})
                  } else {
                    navigator.clipboard.writeText(window.location.href)
                    alert(language === 'en' ? 'Link copied!' : 'Lyen kopye!')
                  }
                }}
                aria-label={language === 'en' ? 'Share' : 'Pataje'}
              >
                📤 {language === 'en' ? 'Share' : 'Pataje'}
              </button>
            </div>
            <Suspense fallback={<LoadingSpinner />}>
              <KnowYourRights language={language} />
              <StatusInfo status={currentStatus} language={language} t={t} searchQuery={searchQuery} />
              <Timeline status={currentStatus} language={language} t={t} />
              <DocumentChecklist status={currentStatus} language={language} t={t} />
              <ImportantDates status={currentStatus} language={language} t={t} />
              <FormsFinder status={currentStatus} language={language} t={t} />
              <CostEstimator status={currentStatus} language={language} t={t} />
              <ImmigrationNews language={language} t={t} searchQuery={searchQuery} />
              <OfficeFinder language={language} t={t} />
              <FAQ language={language} t={t} searchQuery={searchQuery} />
              <Resources language={language} t={t} searchQuery={searchQuery} />
            </Suspense>
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p>{t('disclaimer')}</p>
        <p className="footer-links">
          <button 
            className="footer-link"
            onClick={() => window.print()}
          >
            🖨️ {language === 'en' ? 'Print' : 'Enprime'}
          </button>
        </p>
      </footer>
    </div>
  )
}

export default App

