import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'

import { mainButton } from '../constants/assets'
import { colors } from '../theme'

const Home = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={mainButton} />
        <Text style={{ color: colors.text.default }}>Press and Hold</Text>
        <Text style={{ color: colors.text.default }}>in Emergency</Text>
      </View>
    </SafeAreaView>
  )
}

export default Home
