import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { View } from 'react-native'
import { GradiantProvider } from './src/context/GradiantContext';
import { Navigation } from './src/navigation/Navigation';
import { FadeScreen } from './src/screens/FadeScreen';

const AppState = ({children}: any) => {

    return (
      <GradiantProvider>
        {children}
      </GradiantProvider>
    )
}


const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation/>
      </AppState>
    </NavigationContainer>
  )
}


export default App;