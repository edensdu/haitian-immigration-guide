import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native'
import { costData } from './costData'

function CostEstimator({ status, language, t }) {
  const data = costData[status]?.[language] || costData[status]?.en || costData.other.en
  const [includeAttorney, setIncludeAttorney] = useState(false)

  const total = data.applicationFee + data.biometricsFee + (includeAttorney ? data.attorneyFee : 0)

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('costEstimator')}</Text>
      <Text style={styles.desc}>{t('costEstimatorDesc')}</Text>
      <Text style={styles.note}>{data.description}</Text>

      <View style={styles.breakdown}>
        <View style={styles.costItem}>
          <Text style={styles.costLabel}>{t('applicationFee')}</Text>
          <Text style={styles.costValue}>{formatCurrency(data.applicationFee)}</Text>
        </View>
        <View style={styles.costItem}>
          <Text style={styles.costLabel}>{t('biometricsFee')}</Text>
          <Text style={styles.costValue}>{formatCurrency(data.biometricsFee)}</Text>
        </View>
        <View style={[styles.costItem, styles.optionalItem]}>
          <View style={styles.optionRow}>
            <Switch
              value={includeAttorney}
              onValueChange={setIncludeAttorney}
              trackColor={{ false: '#e9ecef', true: '#667eea' }}
              thumbColor={includeAttorney ? '#fff' : '#f4f3f4'}
            />
            <Text style={styles.costLabel}>{t('attorneyFee')}</Text>
          </View>
          <Text style={styles.costValue}>{formatCurrency(data.attorneyFee)}</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>{t('totalEstimated')}</Text>
          <Text style={styles.totalValue}>{formatCurrency(total)}</Text>
        </View>
      </View>

      <View style={styles.disclaimer}>
        <Text style={styles.disclaimerText}>ℹ️ {t('note')}</Text>
      </View>
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
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
  },
  desc: {
    color: '#666',
    marginBottom: 8,
    fontSize: 15,
  },
  note: {
    color: '#667eea',
    fontWeight: '600',
    marginBottom: 20,
    fontSize: 15,
  },
  breakdown: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    marginBottom: 15,
  },
  costItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  optionalItem: {
    borderBottomWidth: 2,
    borderBottomColor: '#e9ecef',
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  costLabel: {
    fontSize: 16,
    color: '#555',
    fontWeight: '500',
  },
  costValue: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    marginTop: 15,
    borderTopWidth: 3,
    borderTopColor: '#667eea',
  },
  totalLabel: {
    fontSize: 20,
    color: '#333',
    fontWeight: '700',
  },
  totalValue: {
    fontSize: 24,
    color: '#667eea',
    fontWeight: '700',
  },
  disclaimer: {
    backgroundColor: '#fff3cd',
    borderWidth: 2,
    borderColor: '#ffc107',
    borderRadius: 8,
    padding: 15,
  },
  disclaimerText: {
    color: '#856404',
    fontSize: 14,
    lineHeight: 20,
  },
})

export default CostEstimator

