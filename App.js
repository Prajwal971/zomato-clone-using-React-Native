import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

export default function App() {
  return (
    <View>
      <Image source={require('./src/images/zomatoSplashScreen.png')}
      style={styles.logo}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo:{
    width:responsiveWidth(100),
    height:responsiveHeight(100),
  }
})