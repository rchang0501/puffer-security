import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { Home, Profile, Settings } from './screens'
import { colors } from './theme'

const Stack = createStackNavigator()

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: colors.text.default,
    background: colors.background[200],
  },
}

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <SafeAreaProvider>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName='Home'
        >
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Profile' component={Profile} />
          <Stack.Screen name='Settings' component={Settings} />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  )
}

export default App
