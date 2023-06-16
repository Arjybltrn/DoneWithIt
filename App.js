import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, 
TouchableNativeFeedback, TouchableHighlight, TouchableWithoutFeedback, TouchableOpacity,
 Alert, Button, Platform, Dimensions, ImageBackground } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
     <WelcomeScreen />
    
  );
}

