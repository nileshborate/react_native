Option 1: Using Expo (Recommended for Beginners)

Expo provides an easy setup, fast development cycle, and support for web, iOS, and Android.

Create a new Expo app
npx create-expo-app myapp

Move into the project directory
cd myapp

Start the development server
npx expo start

Press a → open Android emulator

Press i → open iOS simulator (Mac only)

Press w → open in web browser

Option 2: Using Bare React Native (Community CLI)

This gives you full control of native Android and iOS projects, but requires more setup.

Create a new React Native app with the community CLI
npx @react-native-community/cli init myapp

Move into the project directory
cd myapp

Run on Android (emulator or device)
npx react-native run-android

Run on iOS (Mac only)
npx react-native run-ios
