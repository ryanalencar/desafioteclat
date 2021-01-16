import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f9fafd'
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
    backgroundColor: 'red'
  },
  text: {
    fontFamily: 'Ufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f'
  },
  navButton: {
    marginTop: 15
  },
  forgotButton: {
    marginVertical: 35
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular'
  }
})
