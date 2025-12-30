import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { statusData } from './statusData'

function StatusInfo({ status, language, t }) {
  const data = statusData[status]?.[language] || statusData[status]?.en

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('statusInfo')}</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('whatThisMeans')}</Text>
        <Text style={styles.text}>{data.whatThisMeans}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('availableOptions')}</Text>
        {data.availableOptions.map((option, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.bullet}>✓</Text>
            <Text style={styles.listText}>{option}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{t('requirements')}</Text>
        {data.requirements.map((req, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.bullet}>✓</Text>
            <Text style={styles.listText}>{req}</Text>
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
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 3,
    borderBottomColor: '#667eea',
  },
  section: {
    marginBottom: 25,
    backgroundColor: '#f8f9fa',
    padding: 20,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#667eea',
  },
  sectionTitle: {
    fontSize: 18,
    color: '#667eea',
    marginBottom: 12,
    fontWeight: '600',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
  },
  listItem: {
    flexDirection: 'row',
    paddingVertical: 8,
    alignItems: 'flex-start',
  },
  bullet: {
    color: '#667eea',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 12,
    marginTop: 2,
  },
  listText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 22,
    color: '#555',
  },
})

export default StatusInfo

