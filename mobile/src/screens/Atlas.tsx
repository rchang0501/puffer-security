import { View, Text, TouchableOpacity, TextInput, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'
import NavDetailsModal from '../components/NavDetailsModal'
import MapSearchOverlay from '../components/MapSearchOverlay'
import { COLORS, SIZES, FONTS } from '../constants'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectDestination,
  selectModalVisible,
  setDestination,
  setModalVisible,
  setOrigin,
  setTravelTimeInformation,
} from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'

const Atlas = () => {
  const dispatch = useDispatch()
  const modalVisible = useSelector(selectModalVisible)
  const destination = useSelector(selectDestination)
  const navigation = useNavigation()

  const [detailsText, setDetailsText] = useState('Show Details')
  useEffect(() => {
    if (modalVisible) {
      setDetailsText('Hide Details')
    } else {
      setDetailsText('Show Details')
    }
  }, [modalVisible])

  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        dispatch(setDestination(null))
        dispatch(setTravelTimeInformation(null))
        dispatch(setModalVisible(false))
      }),
    [navigation]
  )

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ zIndex: -1, flex: 1 }}>
        <Map />
      </View>
      <View
        style={{
          zIndex: 0,
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          height: 340,
          flex: 1,
        }}
      >
        <MapSearchOverlay />
      </View>
      {Platform.OS === 'android' ? (
        <View
          style={{
            zIndex: 2,
            flexDirection: 'row',
            position: 'absolute',
            bottom: 24,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            onPress={() => {
              dispatch(setModalVisible(!modalVisible))
            }}
            disabled={!destination}
            style={[
              tw`${!destination && 'opacity-0'}`,
              {
                backgroundColor: COLORS.translucent,
                padding: SIZES.small,
                borderRadius: SIZES.xxl,
              },
            ]}
          >
            <Text style={{ color: COLORS.white, fontFamily: FONTS.medium }}>
              {detailsText}
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={{
            zIndex: 2,
            flexDirection: 'row',
            position: 'absolute',
            bottom: 40,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            onPress={() => {
              dispatch(setModalVisible(!modalVisible))
            }}
            disabled={!destination}
            style={[
              tw`${!destination && 'opacity-0'}`,
              {
                backgroundColor: COLORS.translucent,
                padding: SIZES.small,
                borderRadius: SIZES.xxl,
              },
            ]}
          >
            <Text style={{ color: COLORS.white, fontFamily: FONTS.medium }}>
              {detailsText}
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {modalVisible === true && <NavDetailsModal />}
    </View>
  )
}

export default Atlas
