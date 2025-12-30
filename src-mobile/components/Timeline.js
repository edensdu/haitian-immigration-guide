import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { timelineData } from './timelineData'

function Timeline({ status, language, t }) {
  const timeline = timelineData[status]?.[language] || timelineData[status]?.en || []

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('timelineTitle')}</Text>
      <View style={styles.timelineContainer}>
        {timeline.map((item, index) => (
          <View key={index} style={styles.item}>
            <View style={styles.marker}>
              <Text style={styles.markerNumber}>{index + 1}</Text>
            </View>
            <View style={styles.content}>
              <View style={styles.header}>
                <Text style={styles.step}>{item.step}</Text>
                <View style={styles.timeBadge}>
                  <Text style={styles.timeText}>{item.time}</Text>
                </View>
              </View>
              <Text style={styles.description}>{item.description}</Text>
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
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 3,
    borderBottomColor: '#667eea',
  },
  timelineContainer: {
    paddingLeft: 30,
  },
  item: {
    flexDirection: 'row',
    marginBottom: 25,
    alignItems: 'flex-start',
  },
  marker: {
    position: 'absolute',
    left: -30,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  markerNumber: {
    width: 40,
    height: 40,
    backgroundColor: '#667eea',
    borderRadius: 20,
    textAlign: 'center',
    lineHeight: 40,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#e9ecef',
    borderRadius: 12,
    padding: 18,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    flexWrap: 'wrap',
    gap: 10,
  },
  step: {
    fontSize: 18,
    color: '#667eea',
    fontWeight: '600',
  },
  timeBadge: {
    backgroundColor: '#f0f4ff',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  timeText: {
    color: '#667eea',
    fontSize: 13,
    fontWeight: '600',
  },
  description: {
    color: '#555',
    lineHeight: 22,
    fontSize: 15,
  },
})

export default Timeline

