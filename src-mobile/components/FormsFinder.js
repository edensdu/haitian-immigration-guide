import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native'
import { formsByStatus, formsTranslations } from './formsData'

function FormsFinder({ status, language, t }) {
  const forms = formsByStatus[status] || formsByStatus.other
  const formNames = formsTranslations[language] || formsTranslations.en

  const openURL = (url) => {
    Linking.openURL(url).catch(err => console.error('Failed to open URL:', err))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('formsTitle')}</Text>
      <Text style={styles.desc}>{t('formsDesc')}</Text>
      
      <View style={styles.formsList}>
        {forms.map((form, index) => (
          <View key={index} style={styles.formItem}>
            <View style={styles.formHeader}>
              <View style={styles.formNumberBadge}>
                <Text style={styles.formNumberText}>Form {form.number}</Text>
              </View>
              <Text style={styles.formName}>{formNames[form.name] || form.name}</Text>
            </View>
            <View style={styles.formActions}>
              <TouchableOpacity 
                style={styles.primaryButton}
                onPress={() => openURL(form.url)}
              >
                <Text style={styles.primaryButtonText}>{t('downloadForm')}</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.secondaryButton}
                onPress={() => openURL(`${form.url}#instructions`)}
              >
                <Text style={styles.secondaryButtonText}>{t('viewInstructions')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
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
  formsList: {
    gap: 20,
  },
  formItem: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#e9ecef',
    borderRadius: 12,
    padding: 20,
  },
  formHeader: {
    marginBottom: 15,
  },
  formNumberBadge: {
    backgroundColor: '#667eea',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  formNumberText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
  formName: {
    fontSize: 18,
    color: '#333',
    fontWeight: '600',
  },
  formActions: {
    flexDirection: 'row',
    gap: 12,
  },
  primaryButton: {
    flex: 1,
    backgroundColor: '#667eea',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#667eea',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#667eea',
    fontWeight: '600',
    fontSize: 15,
  },
})

export default FormsFinder

