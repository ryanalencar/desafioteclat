import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Platform, PermissionsAndroid } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation'

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
})

export default function BusinessMap() {
  const [initialPos, setInitialPos] = useState([-3.7580344, -38.6005225])

  async function handleUserLocation() {
    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      )

      Geolocation.getCurrentPosition(
        position => {
          const { latitude } = position.coords
          const { longitude } = position.coords

          setInitialPos([latitude, longitude])
        },
        error => {
          // See error code charts below.
          console.log(error.code, error.message)
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      )
    }

    // const { latitude, longitude } = location.coords

    // setInitialPos([latitude, longitude])
  }

  useEffect(() => {
    handleUserLocation()
  }, [])

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: initialPos[0],
          longitude: initialPos[1],
          latitudeDelta: 0.014,
          longitudeDelta: 0.014
        }}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
      >
        <Marker
          coordinate={{ latitude: initialPos[0], longitude: initialPos[1] }}
          title="My Location"
        />
      </MapView>
    </View>
  )
}
