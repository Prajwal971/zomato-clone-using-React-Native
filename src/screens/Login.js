import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { responsiveHeight } from 'react-native-responsive-dimensions'

const Login = () => {
    return (
        <View style={Styles.container}>
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
        height: responsiveHeight(30),
    },
    banner: {
        width:'100%',
        height:'100%'
    }
})