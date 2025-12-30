import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Linking, Alert } from 'react-native'
import { uscisOffices } from '../data/uscisOffices'
import { legalAidOffices } from '../data/legalAidOffices'

function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 3959
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
      const zipResponse = await fetch(`https://api.zippopotam.us/us/${zipCode}`)
      
      if (!zipResponse.ok) {
        throw new Error('Invalid zip code')
      }

      const zipData = await zipResponse.json()
      const userLat = parseFloat(zipData.places[0].latitude)
      const userLon = parseFloat(zipData.places[0].longitude)

      const uscisWithDistance = uscisOffices.map(office => ({
        ...office,
        type: 'uscis',
        distance: calculateDistance(userLat, userLon, office.lat, office.lon)
      }))

      const legalWithDistance = legalAidOffices.map(office => ({
        ...office,
        type: 'legal',
        distance: calculateDistance(userLat, userLon, office.lat, office.lon)
      }))

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

  const openPhone = (phone) => {
    Linking.openURL(`tel:${phone}`).catch(err => console.error('Failed to open phone:', err))
  }

  const openURL = (url) => {
    Linking.openURL(url).catch(err => console.error('Failed to open URL:', err))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('officeFinder')}</Text>
      <Text style={styles.desc}>{t('officeFinderDesc')}</Text>

      <View style={styles.search}>
        <TextInput
          placeholder={t('enterZipCode')}
          value={zipCode}
          onChangeText={(text) => setZipCode(text.replace(/\D/g, '').slice(0, 5))}
          style={styles.input}
          maxLength={5}
          keyboardType="numeric"
          editable={!loading}
        />
        <TouchableOpacity 
          style={[styles.findButton, loading && styles.findButtonDisabled]}
          onPress={handleFind}
          disabled={loading}
        >
          <Text style={styles.findButtonText}>
            {loading ? t('searching') : t('findOffices')}
          </Text>
        </TouchableOpacity>
      </View>

      {error ? (
        <View style={styles.error}>
          <Text style={styles.errorText}>{error}</Text>
          <Text style={styles.helpText}>
            {language === 'en' 
              ? 'Make sure you enter a valid US zip code (e.g., 10001, 90210, 33101)'
              : 'Asire w ke ou antre yon kòd postal US ki valab (pa egzanp, 10001, 90210, 33101)'}
          </Text>
        </View>
      ) : null}

      {offices.length > 0 && (
        <View style={styles.officesList}>
          {offices.map((office, index) => (
            <View key={index} style={styles.officeItem}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>
                  {office.type === 'uscis' ? t('uscisOffice') : t('legalAidOffice')}
                </Text>
              </View>
              <Text style={styles.officeName}>{office.name}</Text>
              <View style={styles.details}>
                <Text style={styles.detailText}>
                  <Text style={styles.detailLabel}>{t('address')}: </Text>
                  {office.address}
                </Text>
                {office.phone && (
                  <TouchableOpacity onPress={() => openPhone(office.phone)}>
                    <Text style={styles.detailText}>
                      <Text style={styles.detailLabel}>{t('phone')}: </Text>
                      <Text style={styles.link}>{office.phone}</Text>
                    </Text>
                  </TouchableOpacity>
                )}
                {office.website && (
                  <TouchableOpacity onPress={() => openURL(office.website)}>
                    <Text style={styles.detailText}>
                      <Text style={styles.detailLabel}>{t('website')}: </Text>
                      <Text style={styles.link}>{office.website}</Text>
                    </Text>
                  </TouchableOpacity>
                )}
                <Text style={styles.detailText}>
                  <Text style={styles.detailLabel}>{t('distance')}: </Text>
                  {formatDistance(office.distance)}
                </Text>
                {office.hours && (
                  <Text style={styles.detailText}>
                    <Text style={styles.detailLabel}>{t('hours')}: </Text>
                    {office.hours}
                  </Text>
                )}
              </View>
            </View>
          ))}
        </View>
      )}

      <View style={styles.note}>
        <Text style={styles.noteText}>
          {language === 'en' 
            ? '💡 For a complete list of USCIS offices, visit uscis.gov/fieldoffices'
            : '💡 Pou yon lis konplè biwo USCIS, vizite uscis.gov/fieldoffices'}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 3,
    borderBottomColor: '#667eea',
  },
  desc: {
    color: '#666',
    marginBottom: 20,
    fontSize: 15,
  },
  search: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#e9ecef',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  findButton: {
    backgroundColor: '#667eea',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    justifyContent: 'center',
  },
  findButtonDisabled: {
    opacity: 0.6,
  },
  findButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  error: {
    backgroundColor: '#f8d7da',
    borderWidth: 2,
    borderColor: '#f5c6cb',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
  },
  errorText: {
    color: '#721c24',
    marginBottom: 8,
    fontSize: 15,
  },
  helpText: {
    color: '#721c24',
    fontSize: 13,
    opacity: 0.9,
  },
  officesList: {
    gap: 20,
    marginBottom: 20,
  },
  officeItem: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#e9ecef',
    borderRadius: 12,
    padding: 20,
  },
  badge: {
    backgroundColor: '#667eea',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  officeName: {
    fontSize: 20,
    color: '#333',
    marginBottom: 15,
    fontWeight: '600',
  },
  details: {
    gap: 10,
  },
  detailText: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
  },
  detailLabel: {
    fontWeight: '600',
    color: '#333',
  },
  link: {
    color: '#667eea',
  },
  note: {
    backgroundColor: '#e7f3ff',
    borderWidth: 2,
    borderColor: '#b3d9ff',
    borderRadius: 8,
    padding: 15,
  },
  noteText: {
    color: '#004085',
    fontSize: 14,
  },
})

export default OfficeFinder

