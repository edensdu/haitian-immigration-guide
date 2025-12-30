import React, { useState, useEffect } from 'react'
import './DocumentChecklist.css'

const documentLists = {
  justArrived: ['passport', 'birthCertificate', 'idDocument', 'photos', 'financialProof'],
  tourist: ['passport', 'visa', 'i94', 'photos', 'financialProof'],
  student: ['passport', 'visa', 'i94', 'i20', 'photos', 'financialProof'],
  work: ['passport', 'visa', 'i94', 'workAuth', 'photos'],
  tps: ['passport', 'tpsDoc', 'i94', 'photos', 'birthCertificate'],
  asylum: ['passport', 'asylumDoc', 'photos', 'birthCertificate', 'policeClearance'],
  greenCard: ['passport', 'greenCardDoc', 'birthCertificate', 'photos', 'taxReturns', 'marriageCert'],
  other: ['passport', 'birthCertificate', 'idDocument', 'photos', 'financialProof']
}

function DocumentChecklist({ status, language, t }) {
  const [checkedItems, setCheckedItems] = useState({})
  const storageKey = `documents_${status}`

  useEffect(() => {
    const saved = localStorage.getItem(storageKey)
    if (saved) {
      setCheckedItems(JSON.parse(saved))
    }
  }, [status, storageKey])

  const handleToggle = (docKey) => {
    const newChecked = {
      ...checkedItems,
      [docKey]: !checkedItems[docKey]
    }
    setCheckedItems(newChecked)
    localStorage.setItem(storageKey, JSON.stringify(newChecked))
  }

  const documents = documentLists[status] || documentLists.other
  const allChecked = documents.every(doc => checkedItems[doc])
  const checkedCount = documents.filter(doc => checkedItems[doc]).length

  return (
    <div className="document-checklist">
      <div className="checklist-header">
        <h2>{t('documentChecklist')}</h2>
        <p className="checklist-desc">{t('documentChecklistDesc')}</p>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${(checkedCount / documents.length) * 100}%` }}
          ></div>
        </div>
        <p className="progress-text">
          {checkedCount} / {documents.length} {language === 'en' ? 'documents' : 'dokiman'} {language === 'en' ? 'collected' : 'rasanble'}
        </p>
      </div>

      <div className="checklist-items">
        {documents.map((docKey) => (
          <label key={docKey} className="checklist-item">
            <input
              type="checkbox"
              checked={checkedItems[docKey] || false}
              onChange={() => handleToggle(docKey)}
              className="checkbox-input"
            />
            <span className="checkbox-custom"></span>
            <span className="document-name">{t(docKey)}</span>
            {checkedItems[docKey] && <span className="check-icon">✓</span>}
          </label>
        ))}
      </div>

      {allChecked && (
        <div className="completion-message">
          🎉 {language === 'en' ? 'Great job! You have all required documents.' : 'Bon travay! Ou gen tout dokiman obligatwa yo.'}
        </div>
      )}
    </div>
  )
}

export default DocumentChecklist

