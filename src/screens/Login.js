import { View, Text, StyleSheet, Image, StatusBar, Platform, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'
import { LOGIN_TITLE, THEME_COLOR } from '../strings'
import { TextInput } from 'react-native-gesture-handler'
import auth from '@react-native-firebase/auth'
import OTPInputView from '@twotalltotems/react-native-otp-input'

const Login = () => {

    const [mobile, setMobile] = useState('')
    const [confirm, setConfirm] = useState(null)
    const [otp, setOtp] = useState('')

    const signInWithPhoneNumber = async () => {
        const confirmation = await auth().signInWithPhoneNumber('+971' + mobile);
        setConfirm(confirmation)
    }

    const verifyCode = async () => {
        try {
            const res = await confirm.confirm(otp)
            console.log(res)
        } catch (error) {
            console.log('Invalid Code')
        }
    }

    return (
        <View style={Styles.container}>
            <StatusBar translucent backgroundColor={'transparent'} />
            <View style={Styles.topView}>
                <Image source={require('../images/banner.png')} style={Styles.banner} />
            </View>
            <Text style={Styles.loginTitle}>{LOGIN_TITLE}</Text>
            <View style={Styles.divider}>
                <View style={[Styles.dividerView, { marginRight: 20, marginLeft: 20 }]}></View>
                <Text style={Styles.dividerText}>Login or SignUp</Text>
                <View style={[Styles.dividerView, { marginRight: 20, marginLeft: 20 }]}></View>
            </View>

            {confirm == null ? (
                <View>
                    <TextInput
                        placeholder='Mobile Number'
                        placeholderTextColor={'#8e8e8e'}
                        style={Styles.mobileInput}
                        keyboardType='number-pad'
                        value={mobile}
                        onChangeText={txt => {
                            setMobile(txt)
                        }}
                    />
                    <TouchableOpacity style={Styles.loginButton} onPress={() => { signInWithPhoneNumber() }}>
                        <Text style={Styles.loginBtnText}>Login</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View>
                    <OTPInputView
                        style={{ width: '80%', height: 50, alignSelf: 'center' }}
                        pinCount={6}
                        // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                        // onCodeChanged = {code => { this.setState({code})}}
                        autoFocusOnLoad
                        codeInputFieldStyle={Styles.underlineStyleBase}
                        codeInputHighlightStyle={Styles.underlineStyleHighLighted}
                        onCodeFilled={(code => {
                            console.log(`Code is ${code}, you are good to go!`)
                            setOtp(code)
                        })}
                        // secureTextEntry={true}
                    />
                    <TouchableOpacity style={Styles.loginButton} onPress={() => { verifyCode() }}>
                        <Text style={Styles.loginBtnText}>Verify OTP</Text>
                    </TouchableOpacity>
                </View>
            )}
            <View>

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
        opacity: 0.5
    },
    dividerText: {
        color: '#8e8e8e',
        fontSize: responsiveFontSize(2.5)
    },
    mobileInput: {
        borderWidth: 1,
        borderRadius: 10,
        height: 50,
        borderColor: '#8e8e8e',
        marginTop: 20,
        width: '90%',
        paddingLeft: '10%',
        alignSelf: 'center',
        color: '#000'
    },
    loginButton: {
        backgroundColor: THEME_COLOR,
        width: '90%',
        height: 50,
        borderRadius: 10,
        marginTop: responsiveHeight(5),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    loginBtnText: {
        fontSize: responsiveFontSize(2),
        fontWeight: '600',
        color: '#fff'
    },
    underlineStyleBase: {
        width: 45,
        height: 45,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#000',
        color:'#000'
    },
    underlineStyleHighLighted: {
        borderColor: "red",
    },
})