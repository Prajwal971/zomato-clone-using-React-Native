import { View, Text, StyleSheet, Image, StatusBar, Platform, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'
import { LOGIN_TITLE, THEME_COLOR } from '../strings'
import { TextInput } from 'react-native-gesture-handler'

const Login = () => {
    return (
        <View style={Styles.container}>
            <StatusBar translucent backgroundColor={'transparent'} />
            <View style={Styles.topView}>
                <Image source={require('../images/banner.png')} style={Styles.banner} />
            </View>
            <Text style={Styles.loginTitle}>{LOGIN_TITLE}</Text>
            <View style={Styles.divider}>
                <View style={[Styles.dividerView, { marginRight: 20 ,marginLeft: 20 }]}></View>
                <Text style={Styles.dividerText}>Login or SignUp</Text>
                <View style={[Styles.dividerView, { marginRight: 20 ,marginLeft: 20 }]}></View>
            </View>
            <TextInput
                placeholder='Mobile Number'
                placeholderTextColor={'#8e8e8e'}
                style={Styles.mobileInput}
                keyboardType='number-pad'
            />
            <TouchableOpacity style={Styles.loginButton}>
                <Text style={Styles.loginBtnText}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login

const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topView: {
        height: Platform.OS === 'ios' ? responsiveHeight(35) : responsiveHeight(35)
    },
    banner: {
        width: '100%',
        height: '100%',
        borderBottomLeftRadius: Platform.OS === 'ios' ? 30 : 0,
        borderBottomRightRadius: Platform.OS === 'ios' ? 30 : 0
    },
    loginTitle: {
        fontSize: responsiveFontSize(3.5),
        fontWeight: '800',
        color: '#000',
        alignSelf: 'center',
        width: '80%',
        textAlign: 'center',
        marginTop: responsiveHeight(4),
    },
    divider: {
        flexDirection: 'row',
        width: '100%',
        height: responsiveHeight(4),
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    dividerView: {
        height: 1,
        backgroundColor: '#8e8e8e',
        width: '25%',
        opacity:0.5
    },
    dividerText: {
        color: '#8e8e8e',
        fontSize: responsiveFontSize(2.5)
    },
    mobileInput:{
        borderWidth:1,
        borderRadius:10,
        height:50,
        borderColor:'#8e8e8e',
        marginTop:20,
        width:'90%',
        paddingLeft:'10%',
        alignSelf:'center',

    },
    loginButton:{
        backgroundColor:THEME_COLOR,
        width:'90%',
        height:50,
        borderRadius:10,
        marginTop:responsiveHeight(5),
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center'
    },
    loginBtnText:{
        fontSize:responsiveFontSize(2),
        fontWeight:'600',
        color:'#fff'
    }
})