import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import FormInput from '../../componens/FormInput'
import FormButton from '../../componens/FormButton'
import SocialButton from '../../componens/SocialButton'
import logo from '../../../assets/images/small-logo.jpg'

import { styles } from './styles'

export default function Login({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.text}>Local Business</Text>
      <FormInput
        labelValue={email}
        onChangeText={userEmail => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={password}
        onChangeText={userPassword => setPassword(userPassword)}
        placeholderText="Senha"
        iconType="lock"
        secureTextEntry
      />
      <FormButton buttonTitle="Entrar" onPress={() => {}} />

      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <SocialButton
        buttonTitle="Entrar com Facebook"
        btnType="facebook"
        color="#4867aa"
        backgroundColor="#e6eaf4"
        onPress={() => {}}
      />

      <SocialButton
        buttonTitle="Entrar com Google"
        btnType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
        onPress={() => {}}
      />

      <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText}>Não possui uma conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  )
}

Login.defaultProps = {
  navigation: null
}

Login.propTypes = {
  navigation: PropTypes.object
}
