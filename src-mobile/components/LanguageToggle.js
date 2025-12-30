import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

function LanguageToggle({ language, setLanguage }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, language === 'en' && styles.activeButton]}
        onPress={() => setLanguage('en')}
      >
        <Text style={[styles.buttonText, language === 'en' && styles.activeText]}>
          English
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, language === 'ht' && styles.activeButton]}
        onPress={() => setLanguage('ht')}
      >
        <Text style={[styles.buttonText, language === 'ht' && styles.activeText]}>
          Kreyòl
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  activeButton: {
    backgroundColor: '#fff',
    borderColor: '#fff',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  activeText: {
    color: '#667eea',
  },
})

export default LanguageToggle

