
import ListingsScreen from './app/screens/ListingsScreen';
import { TextInput, Text } from 'react-native'
import Screen from './app/components/Screen';
import React, { useState } from 'react'
import AppTextInput from './app/components/AppTextInput';

export default function App() {

  const [firstName, setFirstName] = useState("")

  return (
    <Screen>
      <AppTextInput placeholder="username" icon="email" />
    </Screen>

      );
  }