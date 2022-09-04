import { Dimensions, SafeAreaView, View } from 'react-native'
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
  faShieldHalved,
  faGear,
  faUser,
  faCircle,
  faC,
} from '@fortawesome/free-solid-svg-icons'

import { colors } from '../../theme'

const width = Dimensions.get('window').width //full width

const Header = () => {
  return (
    <SafeAreaView
      style={{ backgroundColor: colors.background[200], width: width }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
        }}
      >
        <View style={{ marginLeft: 20 }}>
          <FontAwesomeIcon icon={faUser} color='white' />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <FontAwesomeIcon
            icon={faCircle}
            color={colors.circle.inactive}
            size={6}
          />
          <View style={{ padding: 3 }}>
            <FontAwesomeIcon
              icon={faCircle}
              color={colors.circle.active}
              size={6}
            />
          </View>
          <FontAwesomeIcon
            icon={faCircle}
            color={colors.circle.inactive}
            size={6}
          />
        </View>
        <View style={{ marginRight: 20 }}>
          <FontAwesomeIcon icon={faGear} color='white' />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Header
