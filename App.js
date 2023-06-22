
import ListingsScreen from './app/screens/ListingsScreen';
import { TextInput, Text, Switch } from 'react-native'
import Screen from './app/components/Screen';
import React, { useState } from 'react'
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';

export default function App() {

  const [isNew, setIsNew] = useState(false)

  return (
    <Screen>
      <AppPicker icon="apps" placeholder="Category" />
      <AppTextInput icon="email" placeholder="email"/>

      <Switch 
        value={isNew}
        onValueChange={newValue => setIsNew(newValue)}/>
    </Screen>

      );
  }