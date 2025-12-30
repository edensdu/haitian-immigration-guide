import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native'
import { resources } from './resourcesData'

function Resources({ language, t }) {
  const resourceData = resources[language] || resources.en

  const openURL = (url) => {
    Linking.openURL(url).catch(err => console.error('Failed to open URL:', err))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('resourcesTitle')}</Text>
      
      <View style={styles.categories}>
        <View style={styles.category}>
          <Text style={styles.categoryTitle}>{t('legalHelp')}</Text>
          <View style={styles.resourceList}>
            {resourceData.legalHelp.map((resource, index) => (
              <TouchableOpacity
                key={index}
                style={styles.resourceItem}
                onPress={() => openURL(resource.url)}
                activeOpacity={0.7}
              >
                <Text style={styles.resourceName}>{resource.name}</Text>
                <Text style={styles.resourceDesc}>{resource.description}</Text>
                <Text style={styles.arrow}>→</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.category}>
          <Text style={styles.categoryTitle}>{t('governmentSites')}</Text>
          <View style={styles.resourceList}>
            {resourceData.governmentSites.map((resource, index) => (
              <TouchableOpacity
                key={index}
                style={styles.resourceItem}
                onPress={() => openURL(resource.url)}
                activeOpacity={0.7}
              >
                <Text style={styles.resourceName}>{resource.name}</Text>
                <Text style={styles.resourceDesc}>{resource.description}</Text>
                <Text style={styles.arrow}>→</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.category}>
          <Text style={styles.categoryTitle}>{t('communityResources')}</Text>
          <View style={styles.resourceList}>
            {resourceData.communityResources.map((resource, index) => (
              <TouchableOpacity
                key={index}
                style={styles.resourceItem}
                onPress={() => openURL(resource.url)}
                activeOpacity={0.7}
              >
                <Text style={styles.resourceName}>{resource.name}</Text>
                <Text style={styles.resourceDesc}>{resource.description}</Text>
                <Text style={styles.arrow}>→</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
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
  categories: {
    gap: 25,
  },
  category: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 20,
    borderTopWidth: 4,
    borderTopColor: '#667eea',
  },
  categoryTitle: {
    fontSize: 18,
    color: '#667eea',
    marginBottom: 15,
    fontWeight: '600',
  },
  resourceList: {
    gap: 15,
  },
  resourceItem: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#e9ecef',
    borderRadius: 8,
    padding: 15,
    position: 'relative',
  },
  resourceName: {
    fontSize: 16,
    color: '#333',
    marginBottom: 6,
    fontWeight: '600',
  },
  resourceDesc: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    paddingRight: 20,
  },
  arrow: {
    position: 'absolute',
    right: 15,
    top: '50%',
    transform: [{ translateY: -10 }],
    color: '#667eea',
    fontSize: 18,
  },
})

export default Resources

