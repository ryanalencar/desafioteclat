import PropTypes from 'prop-types'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { styles } from './styles'

const SocialButton = ({ buttonTitle, btnType, color, backgroundColor, ...rest }) => {
  const bgColor = backgroundColor
  return (
    <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: bgColor }]} {...rest}>
      <View style={styles.iconWrapper}>
        <FontAwesome name={btnType} style={styles.icon} size={22} color={color} />
      </View>
      <View style={styles.btnTxtWrapper}>
        <Text style={[styles.buttonText, { color }]}>{buttonTitle}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default SocialButton

SocialButton.defaultProps = {
  buttonTitle: '',
  btnType: '',
  color: '',
  backgroundColor: ''
}

SocialButton.propTypes = {
  buttonTitle: PropTypes.string,
  btnType: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string
}
