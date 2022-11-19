import { View, StyleSheet, Image, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login')
        }, 3000)
    }, [])
    return (
        <View>
            <StatusBar backgroundColor='red' barStyle={'dark-content'} />
            <Image source={require('../images/zomatoSplashScreen.png')}style={styles.logo} />
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: responsiveWidth(100),
        height: responsiveHeight(100),
    }
})