'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import { Text, StyleSheet, ViewPropTypes } from 'react-native'

const baseStyle = StyleSheet.create({
  fontFamily: 'Helvetica',
  fontSize: 10,
})

const AppText = ({ style, children, ...props }) => {
  let newStyle
  if (Array.isArray(style)) {
    newStyle = [baseStyle, ...style]
  } else {
    newStyle = [baseStyle, style]
  }

  return (
    <Text {...props} style={newStyle}>
      {children}
    </Text>
  )
}

AppText.propTypes = {
  children: PropTypes.node.isRequired,
  style: ViewPropTypes.style,
}

AppText.defaultProps = {
  style: {},
}

export default AppText
