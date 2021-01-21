import PropTypes from 'prop-types'
import React, { useContext, useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import FormInput from '../../components/FormInput'
import FormButton from '../../components/FormButton'
import SocialButton from '../../components/SocialButton'
import logo from '../../../assets/images/small-logo.jpg'

import { styles } from './styles'
import { AuthContext } from '../../navigation/AuthProvider'

export default function Login({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { login, googleLogin, fbLogin } = useContext(AuthContext)

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
      <FormButton
        buttonTitle="Entrar"
        onPress={() => {
          login(email, password)
        }}
      />

      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <SocialButton
        buttonTitle="Entrar com Facebook"
        btnType="facebook"
        color="#4867aa"
        backgroundColor="#e6eaf4"
        onPress={() => {
          fbLogin()
        }}
      />

      <SocialButton
        buttonTitle="Entrar com Google"
        btnType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
        onPress={() => {
          googleLogin()
        }}
      />

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Signup')}
      >
        <Text style={styles.navButtonText}>
          Não possui uma conta? Cadastre-se
        </Text>
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
