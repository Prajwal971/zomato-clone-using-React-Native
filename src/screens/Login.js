import { View, Text, StyleSheet, Image, StatusBar, Platform } from 'react-native'
import React from 'react'
import { responsiveHeight } from 'react-native-responsive-dimensions'

const Login = () => {
    return (
        <View style={Styles.container}>
            <StatusBar translucent backgroundColor={'transparent'}/>
            <View style={Styles.topView}>
                <Image source={require('../images/banner.png')} style={Styles.banner}/>
            </View>
        </View>
    )
}

export default Login

const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topView: {
        height:Platform.OS === 'ios' ? responsiveHeight(35) :  responsiveHeight(35)
    },
    banner: {
        width:'100%',
        height:'100%',
        borderBottomLeftRadius:Platform.OS === 'ios' ? 30 : 0,
        borderBottomRightRadius:Platform.OS === 'ios' ? 30 : 0
    }
})