import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View} from 'react-native';

function WelcomeScreen(props) {
    return (
       <ImageBackground 
         style = {styles.background}
         source={require("../assets/background.jpg")}>


        <View style ={styles.logoContainer}>

            <Image style = {styles.logo}
            source={require('../assets/logo-red.png')}/>
            <Text>Sell What You Don't Need</Text>
                
        </View>

        <View style={styles.loginButton}>
            <Text style={styles.loginText}>Login</Text>
        </View>

        <View style={styles.registerButton}>
            <Text style={styles.registerText}>Register</Text>
        </View>

       </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background : {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    logoContainer : {
        position: "absolute",
        top: 70,
        alignItems: "center"
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#fc5c65",

    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#4ecdc4",
    },
    logo : {
        width: 100,
        height: 100,
        //primary axis flex vertical line
        //secondary axis flex horizontal line
    },
})

export default WelcomeScreen;