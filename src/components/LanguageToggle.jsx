import React from 'react'
import './LanguageToggle.css'

function LanguageToggle({ language, setLanguage }) {
  return (
    <div className="language-toggle">
      <button
        className={language === 'en' ? 'active' : ''}
        onClick={() => setLanguage('en')}
      >
        English
      </button>
      <button
        className={language === 'ht' ? 'active' : ''}
        onClick={() => setLanguage('ht')}
      >
        Kreyòl
      </button>
    </div>
  )
}

export default LanguageToggle

