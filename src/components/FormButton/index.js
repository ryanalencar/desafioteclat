import React from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export default function FormButton({ buttonTitle, ...rest }) {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  )
}

FormButton.defaultProps = {
  buttonTitle: ''
}

FormButton.propTypes = {
  buttonTitle: PropTypes.string
}
