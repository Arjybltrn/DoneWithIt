import React from 'react';
import { ImageBackground } from 'react-native';
import backgroundImage from '../assets/background.jpg';

function WelcomeScreen(props) {
    return (
       <ImageBackground
        source={backgroundImage}>
       </ImageBackground>
    );
}

export default WelcomeScreen;