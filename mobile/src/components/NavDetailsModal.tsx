import { View, Text, TouchableOpacity, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { selectTravelTimeInformation } from '../slices/navSlice'
import { useSelector } from 'react-redux'
import { COLORS, SIZES, FONTS, SHADOWS } from '../constants'
import tw from 'tailwind-react-native-classnames'
import TravelDetailsInfoText from './TravelDetailsInfoText'
import { Icon } from 'react-native-elements'

const NavDetailsModal = () => {
  const travelTimeInformation = useSelector(selectTravelTimeInformation)

  const [date, setDate] = useState('')

  const showDate = () => {
    var hours = new Date().getHours()
    var min = new Date().getMinutes()
    var finalObject = hours + ':' + min
    setDate(finalObject)
  }

  useEffect(() => {
    showDate()
  })

  return (
    <View
      style={[
        tw``,
        {
          zIndex: 1,
          position: 'absolute',
          bottom: -50,
          right: 0,
          left: 0,
          height: 300,
          backgroundColor: COLORS.white,
          borderRadius: SIZES.xxl,
          elevation: 50,
        },
      ]}
    >
      <View
        style={{
          paddingHorizontal: SIZES.xxl + 10,
          paddingTop: SIZES.extraLarge,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            paddingBottom: SIZES.medium,
            justifyContent: 'space-between',
          }}
        >
          <TouchableOpacity
            style={{
              borderRadius: SIZES.small - 5,
              borderColor: COLORS.gray,
              borderWidth: 2,
            }}
          >
            <Text
              style={{ paddingHorizontal: SIZES.small, paddingVertical: 3 }}
            >
              Depart at: {date}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderRadius: SIZES.small - 5,
              borderColor: COLORS.gray,
              borderWidth: 2,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingStart: 10,
              }}
            >
              <Icon name='results' type='foundation' size={SIZES.large} />
              <Text
                style={{
                  paddingHorizontal: SIZES.small,
                  paddingVertical: 3,
                  marginStart: -5,
                }}
              >
                Metrics
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingBottom: SIZES.large,
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}
        >
          <View flexDirection='row' alignItems='center'>
            <Icon
              name='car'
              type='material-community'
              size={SIZES.xxl}
              style={{ paddingEnd: SIZES.small }}
            />
            <View>
              <Text
                style={{
                  fontFamily: FONTS.regular,
                  fontSize: SIZES.small,
                }}
              >
                Travel
              </Text>
              <Text
                style={{
                  fontFamily: FONTS.regular,
                  fontSize: SIZES.small,
                }}
              >
                Distance
              </Text>
            </View>
          </View>
          <TravelDetailsInfoText property={travelTimeInformation?.distance} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingBottom: SIZES.small,
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}
        >
          <View flexDirection='row' alignItems='center'>
            <Icon
              name='schedule'
              type='material'
              size={SIZES.xxl}
              style={{ paddingEnd: SIZES.small }}
            />
            <View>
              <Text
                style={{
                  fontFamily: FONTS.regular,
                  fontSize: SIZES.small,
                }}
              >
                Travel
              </Text>
              <Text
                style={{
                  fontFamily: FONTS.regular,
                  fontSize: SIZES.small,
                }}
              >
                Duration
              </Text>
            </View>
          </View>
          <TravelDetailsInfoText property={travelTimeInformation?.duration} />
        </View>
      </View>
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {Platform.OS === 'android' && (
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.translucent,
              padding: SIZES.small,
              borderRadius: SIZES.xxl,
              marginTop: 12,
            }}
          >
            <Text style={{ color: COLORS.white, fontFamily: FONTS.medium }}>
              Hide Details
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default NavDetailsModal
