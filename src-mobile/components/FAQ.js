import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { faqData } from './faqData'

function FAQ({ language, t }) {
  const [openIndex, setOpenIndex] = useState(null)
  const faqs = faqData[language] || faqData.en

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('faqTitle')}</Text>
      <Text style={styles.subtitle}>{t('faqSubtitle')}</Text>

      <View style={styles.faqList}>
        {faqs.map((faq, index) => (
          <View 
            key={index} 
            style={[styles.faqItem, openIndex === index && styles.faqItemOpen]}
          >
            <TouchableOpacity 
              style={styles.faqQuestion}
              onPress={() => toggleFAQ(index)}
              activeOpacity={0.7}
            >
              <Text style={styles.faqQuestionText}>{faq.question}</Text>
              <View style={styles.faqIcon}>
                <Text style={styles.faqIconText}>{openIndex === index ? '−' : '+'}</Text>
              </View>
            </TouchableOpacity>
            {openIndex === index && (
              <View style={styles.faqAnswer}>
                <Text style={styles.faqAnswerText}>{faq.answer}</Text>
              </View>
            )}
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
  subtitle: {
    color: '#666',
    marginBottom: 20,
    fontSize: 15,
  },
  faqList: {
    gap: 15,
  },
  faqItem: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#e9ecef',
    borderRadius: 12,
    overflow: 'hidden',
  },
  faqItemOpen: {
    borderColor: '#667eea',
  },
  faqQuestion: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  faqQuestionText: {
    flex: 1,
    fontSize: 17,
    fontWeight: '600',
    color: '#333',
    marginRight: 15,
  },
  faqIcon: {
    width: 30,
    height: 30,
    backgroundColor: '#f0f4ff',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  faqIconText: {
    fontSize: 20,
    color: '#667eea',
    fontWeight: 'bold',
  },
  faqAnswer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  faqAnswerText: {
    color: '#555',
    lineHeight: 24,
    fontSize: 15,
  },
})

export default FAQ

