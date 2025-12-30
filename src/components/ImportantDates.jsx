import React, { useState, useEffect } from 'react'
import './ImportantDates.css'

function ImportantDates({ status, language, t }) {
  const [dates, setDates] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [formLabel, setFormLabel] = useState('')
  const [formDate, setFormDate] = useState('')
  const storageKey = `dates_${status}`

  useEffect(() => {
    const saved = localStorage.getItem(storageKey)
    if (saved) {
      setDates(JSON.parse(saved))
    }
  }, [status, storageKey])

  const handleAddDate = (e) => {
    e.preventDefault()
    if (formLabel && formDate) {
      const newDate = {
        id: Date.now(),
        label: formLabel,
        date: formDate
      }
      const updatedDates = [...dates, newDate].sort((a, b) => 
        new Date(a.date) - new Date(b.date)
      )
      setDates(updatedDates)
      localStorage.setItem(storageKey, JSON.stringify(updatedDates))
      setFormLabel('')
      setFormDate('')
      setShowForm(false)
    }
  }

  const handleDelete = (id) => {
    const updatedDates = dates.filter(d => d.id !== id)
    setDates(updatedDates)
    localStorage.setItem(storageKey, JSON.stringify(updatedDates))
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    try {
      return date.toLocaleDateString(language === 'en' ? 'en-US' : 'fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    } catch {
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  }

  const isUpcoming = (dateString) => {
    const date = new Date(dateString)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return date >= today && date <= new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000)
  }

  const isPast = (dateString) => {
    return new Date(dateString) < new Date()
  }

  return (
    <div className="important-dates">
      <div className="dates-header">
        <h2>{t('importantDates')}</h2>
        <p className="dates-desc">{t('importantDatesDesc')}</p>
        <button 
          className="add-date-button"
          onClick={() => setShowForm(!showForm)}
        >
          + {t('addDate')}
        </button>
      </div>

      {showForm && (
        <form className="date-form" onSubmit={handleAddDate}>
          <input
            type="text"
            placeholder={t('dateLabel')}
            value={formLabel}
            onChange={(e) => setFormLabel(e.target.value)}
            className="date-input"
            required
          />
          <input
            type="date"
            value={formDate}
            onChange={(e) => setFormDate(e.target.value)}
            className="date-input"
            required
          />
          <div className="form-buttons">
            <button type="submit" className="save-button">{t('saveDate')}</button>
            <button 
              type="button" 
              className="cancel-button"
              onClick={() => {
                setShowForm(false)
                setFormLabel('')
                setFormDate('')
              }}
            >
              {language === 'en' ? 'Cancel' : 'Anile'}
            </button>
          </div>
        </form>
      )}

      {dates.length === 0 ? (
        <div className="no-dates">
          <p>{t('noDates')}</p>
        </div>
      ) : (
        <div className="dates-list">
          {dates.map((dateItem) => {
            const upcoming = isUpcoming(dateItem.date)
            const past = isPast(dateItem.date)
            
            return (
              <div 
                key={dateItem.id} 
                className={`date-item ${upcoming ? 'upcoming' : ''} ${past ? 'past' : ''}`}
              >
                <div className="date-content">
                  <h3>{dateItem.label}</h3>
                  <p className="date-value">{formatDate(dateItem.date)}</p>
                  {upcoming && (
                    <span className="upcoming-badge">
                      {language === 'en' ? 'Upcoming' : 'Ap vini'}
                    </span>
                  )}
                  {past && (
                    <span className="past-badge">
                      {language === 'en' ? 'Past' : 'Pase'}
                    </span>
                  )}
                </div>
                <button 
                  className="delete-button"
                  onClick={() => handleDelete(dateItem.id)}
                  aria-label={t('deleteDate')}
                >
                  ×
                </button>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default ImportantDates

