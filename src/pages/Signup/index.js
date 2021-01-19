import PropTypes from 'prop-types'
import React, { useContext, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import FormInput from '../../components/FormInput'
import FormButton from '../../components/FormButton'
import SocialButton from '../../components/SocialButton'

import { styles } from './styles'
import { AuthContext } from '../../navigation/AuthProvider'

export default function Signup({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const { register } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Crie uma conta</Text>
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

      <FormInput
        labelValue={confirmPassword}
        onChangeText={userPassword => setConfirmPassword(userPassword)}
        placeholderText="Confirmar Senha"
        iconType="lock"
        secureTextEntry
      />

      <FormButton
        buttonTitle="Cadastrar"
        onPress={() => {
          register(email, password)
        }}
      />

      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          Ao se registrar, você confirma que aceita nossos
        </Text>
        <TouchableOpacity>
          <Text style={([styles.color_textPrivate], { color: '#5CD98D' })}>
            Termos de serviço
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> e </Text>
        <Text style={([styles.color_textPrivate], { color: '#5CD98D' })}>
          Política de privacidade
        </Text>
      </View>

      <SocialButton
        buttonTitle="Cadastrar com Facebook"
        btnType="facebook"
        color="#4867aa"
        backgroundColor="#e6eaf4"
        onPress={() => {}}
      />

      <SocialButton
        buttonTitle="Cadastrar com Google"
        btnType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
        onPress={() => {}}
      />

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.navButtonText}>Possui uma conta? Entrar</Text>
      </TouchableOpacity>
    </View>
  )
}

Signup.defaultProps = {
  navigation: null
}

Signup.propTypes = {
  navigation: PropTypes.object
}
