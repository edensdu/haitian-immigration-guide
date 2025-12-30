import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const statusOptions = [
  { id: 'justArrived', key: 'justArrived', icon: '🛬' },
  { id: 'tourist', key: 'tourist', icon: '✈️' },
  { id: 'student', key: 'student', icon: '🎓' },
  { id: 'work', key: 'work', icon: '💼' },
  { id: 'tps', key: 'tps', icon: '🛡️' },
  { id: 'asylum', key: 'asylum', icon: '🏠' },
  { id: 'other', key: 'other', icon: '❓' }
]

function StatusAssessment({ setCurrentStatus, language, t }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('assessmentTitle')}</Text>
      <Text style={styles.subtitle}>{t('assessmentSubtitle')}</Text>
      
      <View style={styles.optionsContainer}>
        {statusOptions.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={styles.option}
            onPress={() => setCurrentStatus(option.id)}
            activeOpacity={0.7}
          >
            <Text style={styles.icon}>{option.icon}</Text>
            <Text style={styles.optionText}>{t(option.key)}</Text>
            <Text style={styles.arrow}>→</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
    fontSize: 16,
    paddingHorizontal: 10,
  },
  optionsContainer: {
    gap: 15,
  },
  option: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#e9ecef',
    borderRadius: 12,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  icon: {
    fontSize: 28,
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  arrow: {
    color: '#667eea',
    fontSize: 20,
  },
})

export default StatusAssessment

