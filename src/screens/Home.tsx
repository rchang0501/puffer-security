import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons'

import { mainButton } from '../constants/assets'
import { colors } from '../theme'

const Home = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={mainButton} />
        <Text
          style={{
            color: colors.text.default,
            fontWeight: 'bold',
            fontSize: 18,
          }}
        >
          Press and Hold
        </Text>
        <Text
          style={{
            color: colors.text.default,
            fontWeight: 'bold',
            fontSize: 18,
          }}
        >
          in Emergency
        </Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <FontAwesomeIcon
            icon={faShieldHalved}
            color={colors.text.default}
            size={32}
          />
          <Text
            style={{
              color: colors.text.default,
              fontWeight: '500',
              marginTop: 6,
            }}
          >
            All Safe!
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home
