import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import StatusAssessment from './src-mobile/components/StatusAssessment'
import StatusInfo from './src-mobile/components/StatusInfo'
import Timeline from './src-mobile/components/Timeline'
import Resources from './src-mobile/components/Resources'
import DocumentChecklist from './src-mobile/components/DocumentChecklist'
import ImportantDates from './src-mobile/components/ImportantDates'
import FormsFinder from './src-mobile/components/FormsFinder'
import CostEstimator from './src-mobile/components/CostEstimator'
import FAQ from './src-mobile/components/FAQ'
import OfficeFinder from './src-mobile/components/OfficeFinder'
import LanguageToggle from './src-mobile/components/LanguageToggle'
import { translations } from './src-mobile/translations'

export default function App() {
  const [currentStatus, setCurrentStatus] = useState(null)
  const [language, setLanguage] = useState('en')

  const t = (key) => translations[language][key] || key

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <LanguageToggle language={language} setLanguage={setLanguage} />
          <View style={styles.headerContent}>
            <Text style={styles.title}>{t('appTitle')}</Text>
            <Text style={styles.subtitle}>{t('appSubtitle')}</Text>
          </View>
        </View>

        <View style={styles.main}>
          {!currentStatus ? (
            <StatusAssessment 
              setCurrentStatus={setCurrentStatus} 
              language={language}
              t={t}
            />
          ) : (
            <View style={styles.statusResults}>
              <TouchableOpacity 
                style={styles.backButton}
                onPress={() => setCurrentStatus(null)}
              >
                <Text style={styles.backButtonText}>← {t('backToAssessment')}</Text>
              </TouchableOpacity>
              <StatusInfo status={currentStatus} language={language} t={t} />
              <Timeline status={currentStatus} language={language} t={t} />
              <DocumentChecklist status={currentStatus} language={language} t={t} />
              <ImportantDates status={currentStatus} language={language} t={t} />
              <FormsFinder status={currentStatus} language={language} t={t} />
              <CostEstimator status={currentStatus} language={language} t={t} />
              <OfficeFinder language={language} t={t} />
              <FAQ language={language} t={t} />
              <Resources language={language} t={t} />
            </View>
          )}
        </View>

        <View style={styles.footer}>
          <Text style={styles.disclaimer}>{t('disclaimer')}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#667eea',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: '#667eea',
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerContent: {
    marginTop: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.95,
    textAlign: 'center',
  },
  main: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    minHeight: '100%',
  },
  statusResults: {
    paddingBottom: 20,
  },
  backButton: {
    backgroundColor: '#667eea',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    backgroundColor: '#f8f9fa',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#e9ecef',
  },
  disclaimer: {
    color: '#666',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
})

