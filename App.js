import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, 
TouchableNativeFeedback, TouchableHighlight, TouchableWithoutFeedback, TouchableOpacity,
 Alert, Button, Platform, Dimensions } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
  // console.log(Dimensions.get("screen")) // get dimensions of device


  return (
    
      <View style={{
            backgroundColor: "#fff",
            flex: 1,
            flexDirection: "row", // horizontal
            justifyContent: "center", // main 
            alignItems: "center", //secondary
            alignContent: "center", 
            flexWrap: "wrap",
          }}>

          
            <View style={{
                backgroundColor: "dodgerblue",
                width: 100,
                height: 100,
              }}>

            </View>

            <View style ={{
                backgroundColor: "gold",
                width: 100,
                height: 100,
              }}>

            </View>

            <View style ={{
                backgroundColor: "tomato",
                width: 100,
                height: 100,
              }}>

            </View>

            <View style ={{
                backgroundColor: "grey",
                width: 100,
                height: 100,
              }}>
            </View>
            <View style ={{
                backgroundColor: "greenyellow",
                width: 100,
                height: 100,
              }}>
            </View>
        </View>
  

  );
}

const containerStyle = { backgroundColor: "wheat" }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
