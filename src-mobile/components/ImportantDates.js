import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

function ImportantDates({ status, language, t }) {
  const [dates, setDates] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [formLabel, setFormLabel] = useState('')
  const [formDate, setFormDate] = useState('')
  const storageKey = `dates_${status}`

  useEffect(() => {
    const loadSaved = async () => {
      try {
        const saved = await AsyncStorage.getItem(storageKey)
        if (saved) {
          setDates(JSON.parse(saved))
        }
      } catch (error) {
        console.error('Error loading dates:', error)
      }
    }
    loadSaved()
  }, [status, storageKey])

  const handleAddDate = async () => {
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
      try {
        await AsyncStorage.setItem(storageKey, JSON.stringify(updatedDates))
      } catch (error) {
        console.error('Error saving dates:', error)
      }
      setFormLabel('')
      setFormDate('')
      setShowForm(false)
    }
  }

  const handleDelete = async (id) => {
    Alert.alert(
      language === 'en' ? 'Delete Date' : 'Efase Dat',
      language === 'en' ? 'Are you sure you want to delete this date?' : 'Èske ou sèten ou vle efase dat sa a?',
      [
        { text: language === 'en' ? 'Cancel' : 'Anile', style: 'cancel' },
        {
          text: language === 'en' ? 'Delete' : 'Efase',
          style: 'destructive',
          onPress: async () => {
            const updatedDates = dates.filter(d => d.id !== id)
            setDates(updatedDates)
            try {
              await AsyncStorage.setItem(storageKey, JSON.stringify(updatedDates))
            } catch (error) {
              console.error('Error deleting date:', error)
            }
          }
        }
      ]
    )
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
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('importantDates')}</Text>
        <Text style={styles.desc}>{t('importantDatesDesc')}</Text>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => setShowForm(!showForm)}
        >
          <Text style={styles.addButtonText}>+ {t('addDate')}</Text>
        </TouchableOpacity>
      </View>

      {showForm && (
        <View style={styles.form}>
          <TextInput
            placeholder={t('dateLabel')}
            value={formLabel}
            onChangeText={setFormLabel}
            style={styles.input}
          />
          <TextInput
            placeholder={t('dateValue')}
            value={formDate}
            onChangeText={setFormDate}
            style={styles.input}
            keyboardType="default"
          />
          <View style={styles.formButtons}>
            <TouchableOpacity style={styles.saveButton} onPress={handleAddDate}>
              <Text style={styles.saveButtonText}>{t('saveDate')}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.cancelButton}
              onPress={() => {
                setShowForm(false)
                setFormLabel('')
                setFormDate('')
              }}
            >
              <Text style={styles.cancelButtonText}>{language === 'en' ? 'Cancel' : 'Anile'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {dates.length === 0 ? (
        <View style={styles.noDates}>
          <Text style={styles.noDatesText}>{t('noDates')}</Text>
        </View>
      ) : (
        <View style={styles.datesList}>
          {dates.map((dateItem) => {
            const upcoming = isUpcoming(dateItem.date)
            const past = isPast(dateItem.date)
            
            return (
              <View 
                key={dateItem.id} 
                style={[
                  styles.dateItem,
                  upcoming && styles.upcomingItem,
                  past && styles.pastItem
                ]}
              >
                <View style={styles.dateContent}>
                  <Text style={styles.dateLabel}>{dateItem.label}</Text>
                  <Text style={styles.dateValue}>{formatDate(dateItem.date)}</Text>
                  {upcoming && (
                    <View style={styles.upcomingBadge}>
                      <Text style={styles.badgeText}>
                        {language === 'en' ? 'Upcoming' : 'Ap vini'}
                      </Text>
                    </View>
                  )}
                  {past && (
                    <View style={styles.pastBadge}>
                      <Text style={styles.badgeText}>
                        {language === 'en' ? 'Past' : 'Pase'}
                      </Text>
                    </View>
                  )}
                </View>
                <TouchableOpacity 
                  style={styles.deleteButton}
                  onPress={() => handleDelete(dateItem.id)}
                >
                  <Text style={styles.deleteText}>×</Text>
                </TouchableOpacity>
              </View>
            )
          })}
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 20,
    marginBottom: 30,
    borderWidth: 2,
    borderColor: '#e9ecef',
  },
  header: {
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
  },
  desc: {
    color: '#666',
    marginBottom: 15,
    fontSize: 15,
  },
  addButton: {
    backgroundColor: '#667eea',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  form: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#e9ecef',
  },
  input: {
    borderWidth: 2,
    borderColor: '#e9ecef',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 15,
  },
  formButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#667eea',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#6c757d',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  noDates: {
    padding: 40,
    alignItems: 'center',
  },
  noDatesText: {
    color: '#999',
    fontSize: 16,
  },
  datesList: {
    gap: 15,
  },
  dateItem: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#e9ecef',
    borderRadius: 8,
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  upcomingItem: {
    borderLeftWidth: 4,
    borderLeftColor: '#ffc107',
    backgroundColor: '#fffbf0',
  },
  pastItem: {
    borderLeftWidth: 4,
    borderLeftColor: '#6c757d',
    opacity: 0.7,
  },
  dateContent: {
    flex: 1,
  },
  dateLabel: {
    fontSize: 18,
    color: '#333',
    marginBottom: 5,
    fontWeight: '600',
  },
  dateValue: {
    color: '#666',
    fontSize: 15,
    marginBottom: 8,
  },
  upcomingBadge: {
    backgroundColor: '#ffc107',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  pastBadge: {
    backgroundColor: '#6c757d',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteText: {
    color: '#fff',
    fontSize: 24,
    lineHeight: 24,
  },
})

export default ImportantDates

