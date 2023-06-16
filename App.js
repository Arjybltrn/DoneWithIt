import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, 
TouchableNativeFeedback, TouchableHighlight, TouchableWithoutFeedback, TouchableOpacity,
 Alert, Button, Platform, Dimensions, ImageBackground } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppText from './app/components/AppText';


export default function App() {


  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}>

        <AppText>I Love React Native!</AppText>
    </View>

      );
  }


