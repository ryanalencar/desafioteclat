import { StyleSheet } from 'react-native'
import { windowHeight } from '../../utils/dimensions'

export const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 3
  },
  iconWrapper: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    fontWeight: 'bold'
  },
  btnTxtWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Lato-Regular'
  }
})
