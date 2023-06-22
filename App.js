
import ListingsScreen from './app/screens/ListingsScreen';
import { TextInput, Text, Switch } from 'react-native'
import Screen from './app/components/Screen';
import React, { useState } from 'react'
import AppTextInput from './app/components/AppTextInput';

export default function App() {

  const [isNew, setIsNew] = useState(false)

  return (
    <Screen>
      <Switch 
        value={isNew}
        onValueChange={newValue => setIsNew(newValue)}/>
    </Screen>

      );
  }