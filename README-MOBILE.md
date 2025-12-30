# Immigration Guide for Haitians - Mobile App

A cross-platform mobile application (iOS and Android) built with React Native and Expo to help Haitian immigrants understand their current immigration status, available options, timelines, and resources for achieving permanent residency in the United States.

## Features

- **Status Assessment**: Simple questionnaire to identify current immigration status
- **Status Information**: Detailed information about what each status means
- **Available Options**: Clear explanation of pathways available based on status
- **Timeline Visualization**: Visual timeline showing typical processing times
- **Document Checklist**: Track required documents with progress saving
- **Important Dates Tracker**: Save and manage important deadlines
- **Forms Finder**: Direct links to USCIS forms
- **Cost Estimator**: Estimate application costs
- **Office Finder**: Find nearby USCIS and legal aid offices by zip code
- **FAQ Section**: Common questions about immigration
- **Resources**: Links to legal help, government websites, and community resources
- **Bilingual Support**: Full English and Haitian Creole (Kreyòl) support

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- For iOS: Xcode (Mac only)
- For Android: Android Studio

## Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Start the Expo development server:
```bash
npm start
# or
expo start
```

3. Run on your device:
   - **iOS**: Press `i` in the terminal or scan QR code with Camera app
   - **Android**: Press `a` in the terminal or scan QR code with Expo Go app
   - **Web**: Press `w` in the terminal

## Building for Production

### iOS

```bash
expo build:ios
```

### Android

```bash
expo build:android
```

Or use EAS Build (recommended):

```bash
npm install -g eas-cli
eas build --platform ios
eas build --platform android
```

## Project Structure

```
├── App.js                    # Main app component
├── app.json                  # Expo configuration
├── src-mobile/
│   ├── components/          # React Native components
│   │   ├── StatusAssessment.js
│   │   ├── StatusInfo.js
│   │   ├── Timeline.js
│   │   ├── DocumentChecklist.js
│   │   ├── ImportantDates.js
│   │   ├── FormsFinder.js
│   │   ├── CostEstimator.js
│   │   ├── FAQ.js
│   │   ├── OfficeFinder.js
│   │   ├── Resources.js
│   │   └── LanguageToggle.js
│   ├── data/                # Office location data
│   │   ├── uscisOffices.js
│   │   └── legalAidOffices.js
│   └── translations.js      # Bilingual translations
└── package.json
```

## Technologies Used

- React Native
- Expo
- AsyncStorage (for local data persistence)
- React Native Linking (for opening URLs and phone calls)

## Key Differences from Web Version

- Uses React Native components instead of HTML elements
- StyleSheet instead of CSS
- AsyncStorage instead of localStorage
- Linking API for opening URLs and phone calls
- TouchableOpacity instead of buttons
- ScrollView for scrolling content
- SafeAreaView for proper mobile display

## Data Persistence

The app uses AsyncStorage to save:
- Document checklist progress
- Important dates

Data persists between app sessions.

## Disclaimer

This application provides general information only and is not a substitute for professional legal advice. Always consult with a qualified immigration attorney for specific legal guidance regarding your immigration status.

## License

This project is open source and available for use by anyone who needs it.

