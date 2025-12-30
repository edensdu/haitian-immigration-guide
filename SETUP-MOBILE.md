# Quick Setup Guide - Mobile App

## To Run the Mobile App

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Install Expo CLI globally (if not already installed):**
   ```bash
   npm install -g expo-cli
   ```

3. **Start the development server:**
   ```bash
   npm start
   # or
   expo start
   ```

4. **Run on device:**
   - **iOS Simulator**: Press `i` (requires Xcode on Mac)
   - **Android Emulator**: Press `a` (requires Android Studio)
   - **Physical Device**: 
     - Install "Expo Go" app from App Store (iOS) or Play Store (Android)
     - Scan the QR code shown in terminal

## Important Notes

- The mobile app uses `package-mobile.json` for dependencies. You may want to rename your current `package.json` and use the mobile version, or merge them.
- All components are in `src-mobile/` directory
- The main app entry point is `App.js`
- Uses Expo SDK ~50.0.0

## Building for App Stores

See `README-MOBILE.md` for detailed build instructions.

