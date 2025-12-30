import React from 'react'
import './SearchBar.css'

function SearchBar({ searchQuery, setSearchQuery, language, t }) {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-bar"
        placeholder={language === 'en' ? '🔍 Search information...' : '🔍 Chèche enfòmasyon...'}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {searchQuery && (
        <button
          className="search-clear"
          onClick={() => setSearchQuery('')}
          aria-label={language === 'en' ? 'Clear search' : 'Efase rechèch'}
        >
          ×
        </button>
      )}
    </div>
  )
}

export default SearchBar

