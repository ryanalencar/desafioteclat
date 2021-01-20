import PropTypes from 'prop-types'
import React from 'react'
import { View, TextInput } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { styles } from './styles'

const FormInput = ({ labelValue, placeholderText, iconType, ...rest }) => (
  <View style={styles.inputContainer}>
    <View style={styles.iconStyle}>
      <AntDesign name={iconType} size={25} color="#666" />
    </View>
    <TextInput
      value={labelValue}
      style={styles.input}
      numberOfLines={1}
      placeholder={placeholderText}
      placeholderTextColor="#666"
      {...rest}
    />
  </View>
)

export default FormInput

FormInput.defaultProps = {
  iconType: '',
  placeholderText: '',
  labelValue: ''
}

FormInput.propTypes = {
  iconType: PropTypes.string,
  placeholderText: PropTypes.string,
  labelValue: PropTypes.string
}
