import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const documentLists = {
  justArrived: ['passport', 'birthCertificate', 'idDocument', 'photos', 'financialProof'],
  tourist: ['passport', 'visa', 'i94', 'photos', 'financialProof'],
  student: ['passport', 'visa', 'i94', 'i20', 'photos', 'financialProof'],
  work: ['passport', 'visa', 'i94', 'workAuth', 'photos'],
  tps: ['passport', 'tpsDoc', 'i94', 'photos', 'birthCertificate'],
  asylum: ['passport', 'asylumDoc', 'photos', 'birthCertificate', 'policeClearance'],
  other: ['passport', 'birthCertificate', 'idDocument', 'photos', 'financialProof']
}

function DocumentChecklist({ status, language, t }) {
  const [checkedItems, setCheckedItems] = useState({})
  const storageKey = `documents_${status}`

  useEffect(() => {
    const loadSaved = async () => {
      try {
        const saved = await AsyncStorage.getItem(storageKey)
        if (saved) {
          setCheckedItems(JSON.parse(saved))
        }
      } catch (error) {
        console.error('Error loading saved data:', error)
      }
    }
    loadSaved()
  }, [status, storageKey])

  const handleToggle = async (docKey) => {
    const newChecked = {
      ...checkedItems,
      [docKey]: !checkedItems[docKey]
    }
    setCheckedItems(newChecked)
    try {
      await AsyncStorage.setItem(storageKey, JSON.stringify(newChecked))
    } catch (error) {
      console.error('Error saving data:', error)
    }
  }

  const documents = documentLists[status] || documentLists.other
  const allChecked = documents.every(doc => checkedItems[doc])
  const checkedCount = documents.filter(doc => checkedItems[doc]).length

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('documentChecklist')}</Text>
        <Text style={styles.desc}>{t('documentChecklistDesc')}</Text>
        <View style={styles.progressBar}>
          <View 
            style={[styles.progressFill, { width: `${(checkedCount / documents.length) * 100}%` }]}
          />
        </View>
        <Text style={styles.progressText}>
          {checkedCount} / {documents.length} {language === 'en' ? 'documents' : 'dokiman'} {language === 'en' ? 'collected' : 'rasanble'}
        </Text>
      </View>

      <View style={styles.items}>
        {documents.map((docKey) => (
          <TouchableOpacity
            key={docKey}
            style={styles.item}
            onPress={() => handleToggle(docKey)}
            activeOpacity={0.7}
          >
            <View style={[styles.checkbox, checkedItems[docKey] && styles.checkboxChecked]}>
              {checkedItems[docKey] && <Text style={styles.checkmark}>✓</Text>}
            </View>
            <Text style={styles.documentName}>{t(docKey)}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {allChecked && (
        <View style={styles.completionMessage}>
          <Text style={styles.completionText}>
            🎉 {language === 'en' ? 'Great job! You have all required documents.' : 'Bon travay! Ou gen tout dokiman obligatwa yo.'}
          </Text>
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
    marginBottom: 20,
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
  progressBar: {
    width: '100%',
    height: 12,
    backgroundColor: '#e9ecef',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#667eea',
    borderRadius: 10,
  },
  progressText: {
    color: '#667eea',
    fontWeight: '600',
    fontSize: 14,
  },
  items: {
    gap: 12,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#e9ecef',
    borderRadius: 8,
    gap: 15,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#667eea',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#667eea',
  },
  checkmark: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  documentName: {
    flex: 1,
    fontSize: 15,
    color: '#333',
    fontWeight: '500',
  },
  completionMessage: {
    marginTop: 15,
    padding: 15,
    backgroundColor: '#d4edda',
    borderWidth: 2,
    borderColor: '#28a745',
    borderRadius: 8,
  },
  completionText: {
    color: '#155724',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 16,
  },
})

export default DocumentChecklist

