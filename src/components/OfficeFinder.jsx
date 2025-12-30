import React, { useState } from 'react'
import './OfficeFinder.css'
import { uscisOffices } from '../data/uscisOffices'
import { legalAidOffices } from '../data/legalAidOffices'

// Calculate distance between two coordinates using Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 3959 // Earth's radius in miles
  const dLat = (lat2 - lat1) * Math.PI / 180
  const dLon = (lon2 - lon1) * Math.PI / 180
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

function OfficeFinder({ language, t }) {
  const [zipCode, setZipCode] = useState('')
  const [offices, setOffices] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleFind = async () => {
    if (!zipCode || zipCode.length < 5) {
      setError(language === 'en' ? 'Please enter a valid 5-digit zip code' : 'Tanpri antre yon kòd postal 5 chif ki valab')
      setOffices([])
      return
    }

    setLoading(true)
    setError('')
    setOffices([])

    try {
      // Get coordinates from zip code using free API
      const zipResponse = await fetch(`https://api.zippopotam.us/us/${zipCode}`)
      
      if (!zipResponse.ok) {
        throw new Error('Invalid zip code')
      }

      const zipData = await zipResponse.json()
      const userLat = parseFloat(zipData.places[0].latitude)
      const userLon = parseFloat(zipData.places[0].longitude)

      // Calculate distances to all USCIS offices
      const uscisWithDistance = uscisOffices.map(office => ({
        ...office,
        type: 'uscis',
        distance: calculateDistance(userLat, userLon, office.lat, office.lon)
      }))

      // Calculate distances to all legal aid offices
      const legalWithDistance = legalAidOffices.map(office => ({
        ...office,
        type: 'legal',
        distance: calculateDistance(userLat, userLon, office.lat, office.lon)
      }))

      // Combine and sort by distance, take top 5 of each
      const allOffices = [
        ...uscisWithDistance.sort((a, b) => a.distance - b.distance).slice(0, 3),
        ...legalWithDistance.sort((a, b) => a.distance - b.distance).slice(0, 3)
      ].sort((a, b) => a.distance - b.distance)

      if (allOffices.length === 0) {
        setError(language === 'en' 
          ? 'No offices found. Please try a different zip code.'
          : 'Pa gen biwo jwenn. Tanpri eseye yon lòt kòd postal.')
      } else {
        setOffices(allOffices)
      }
    } catch (err) {
      setError(language === 'en' 
        ? 'Unable to find location. Please check your zip code and try again.'
        : 'Pa ka jwenn kote a. Tanpri tcheke kòd postal ou epi eseye ankò.')
    } finally {
      setLoading(false)
    }
  }

  const formatDistance = (miles) => {
    if (miles < 1) {
      return `${Math.round(miles * 10) / 10} ${language === 'en' ? 'miles' : 'mil'}`
    }
    return `${Math.round(miles)} ${language === 'en' ? 'miles' : 'mil'}`
  }

  return (
    <div className="office-finder">
      <h2>{t('officeFinder')}</h2>
      <p className="office-desc">{t('officeFinderDesc')}</p>

      <div className="office-search">
        <input
          type="text"
          placeholder={t('enterZipCode')}
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value.replace(/\D/g, '').slice(0, 5))}
          className="zip-input"
          maxLength="5"
          onKeyPress={(e) => e.key === 'Enter' && handleFind()}
          disabled={loading}
        />
        <button 
          onClick={handleFind} 
          className="find-button"
          disabled={loading}
        >
          {loading ? t('searching') : t('findOffices')}
        </button>
      </div>

      {error && (
        <div className="office-error">
          <p>{error}</p>
          <p className="help-text">
            {language === 'en' 
              ? 'Make sure you enter a valid US zip code (e.g., 10001, 90210, 33101)'
              : 'Asire w ke ou antre yon kòd postal US ki valab (pa egzanp, 10001, 90210, 33101)'}
          </p>
        </div>
      )}

      {offices.length > 0 && (
        <div className="offices-list">
          {offices.map((office, index) => (
            <div key={index} className="office-item">
              <div className="office-type-badge">
                {office.type === 'uscis' ? t('uscisOffice') : t('legalAidOffice')}
              </div>
              <h3>{office.name}</h3>
              <div className="office-details">
                <p className="office-address">
                  <strong>{t('address')}:</strong> {office.address}
                </p>
                {office.phone && (
                  <p className="office-phone">
                    <strong>{t('phone')}:</strong> <a href={`tel:${office.phone}`}>{office.phone}</a>
                  </p>
                )}
                {office.website && (
                  <p className="office-website">
                    <strong>{t('website')}:</strong>{' '}
                    <a href={office.website} target="_blank" rel="noopener noreferrer">
                      {office.website}
                    </a>
                  </p>
                )}
                <p className="office-distance">
                  <strong>{t('distance')}:</strong> {formatDistance(office.distance)}
                </p>
                {office.hours && (
                  <p className="office-hours">
                    <strong>{t('hours')}:</strong> {office.hours}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="office-note">
        <p>
          {language === 'en' 
            ? '💡 For a complete list of USCIS offices, visit uscis.gov/fieldoffices'
            : '💡 Pou yon lis konplè biwo USCIS, vizite uscis.gov/fieldoffices'}
        </p>
      </div>
    </div>
  )
}

export default OfficeFinder
