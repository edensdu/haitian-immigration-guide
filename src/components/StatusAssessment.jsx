import React from 'react'
import './StatusAssessment.css'

const statusOptions = [
  { id: 'justArrived', key: 'justArrived' },
  { id: 'tourist', key: 'tourist' },
  { id: 'student', key: 'student' },
  { id: 'work', key: 'work' },
  { id: 'tps', key: 'tps' },
  { id: 'asylum', key: 'asylum' },
  { id: 'greenCard', key: 'greenCard' },
  { id: 'other', key: 'other' }
]

function StatusAssessment({ setCurrentStatus, language, t }) {
  return (
    <div className="status-assessment">
      <h2>{t('assessmentTitle')}</h2>
      <p className="assessment-subtitle">{t('assessmentSubtitle')}</p>
      
      <div className="status-options">
        {statusOptions.map((option) => (
          <button
            key={option.id}
            className="status-option"
            onClick={() => setCurrentStatus(option.id)}
          >
            <span className="option-icon">
              {option.id === 'justArrived' && '🛬'}
              {option.id === 'tourist' && '✈️'}
              {option.id === 'student' && '🎓'}
              {option.id === 'work' && '💼'}
              {option.id === 'tps' && '🛡️'}
              {option.id === 'asylum' && '🏠'}
              {option.id === 'greenCard' && '🪪'}
              {option.id === 'other' && '❓'}
            </span>
            <span className="option-text">{t(option.key)}</span>
            <span className="option-arrow">→</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default StatusAssessment

