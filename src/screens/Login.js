import { View, Text, StyleSheet, Image, StatusBar, Platform, TouchableOpacity, KeyboardAvoidingView, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'
import { LOGIN_TITLE, THEME_COLOR } from '../strings'
import { TextInput } from 'react-native-gesture-handler'
import auth from '@react-native-firebase/auth'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import Modal from "react-native-modal";
import {
    Grayscale,
    Sepia,
    Tint,
    ColorMatrix,
    concatColorMatrices,
    invert,
    contrast,
    saturate
} from 'react-native-color-matrix-image-filters'
import { useNavigation } from '@react-navigation/native'

const Login = () => {

    const [mobile, setMobile] = useState('')
    const [confirm, setConfirm] = useState(null)
    const [otp, setOtp] = useState('')
    const [visible, setVisible] = useState(false)
    const [languages, setLanguages] = useState([
        { name: 'English', selected: true },
        { name: 'हिन्दी', selected: false },
        { name: 'ಕನ್ನಡ', selected: false },
        { name: 'ತುಳು', selected: false },
    ])
    const navigation = useNavigation()

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

    const onSelects = (index) => {
        let tempLang = languages;
        tempLang.map((item, ind) => {
            if (ind === index) {
                if (item.selected == true) {
                    item.selected = false
                } else {
                    item.selected = true
                }
            } else {
                item.selected = false
            }
        })
        let x = [];
        tempLang.map(item => {
            x.push(item)
        })
        setLanguages(x)
        setVisible(false)
    }

    return (
        <View style={Styles.container}>
            <StatusBar translucent backgroundColor={'transparent'} />
            <View style={Styles.topView}>
                <Image source={require('../images/banner.png')} style={Styles.banner} />
                <TouchableOpacity style={Styles.changeLangBtn} onPress={() => { setVisible(true) }}>
                    <Image source={require('../images/languages.png')} style={Styles.langIcon} />
                </TouchableOpacity>
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
                    <TouchableOpacity style={Styles.loginButton} onPress={() => {
                        // signInWithPhoneNumber()
                        // setVisible(true)
                        navigation.navigate('MainScreen')
                    }}
                    >
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
            <Modal
                isVisible={visible}
                style={Styles.modalStyles}
                animationIn={'bounceInUp'}
                // animationOut={'bounceOut'}
                animationInTiming={1000}
                // animationOutTiming={1500}
                onBackdropPress={() => {
                    setVisible(false)
                }}
            >
                <View style={Styles.modalContainer}>
                    <FlatList
                        data={languages}
                        renderItem={({ item, index }) => {
                            return (
                                <Pressable style={[Styles.languageItem, { borderColor: item.selected === true ? 'red' : '#8e8e8e' }]} onPress={() => { onSelects(index) }}>
                                    <View style={{ borderRadius: 10, width: '100%', height: '100%', flexDirection: 'row', alignItems: 'center', paddingLeft: 20, justifyContent: 'space-between', backgroundColor: item.selected ? '#ffcfcf' : '#fff' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            {item.selected === true ? (
                                                <Image source={require('../images/radio_selected.png')} style={{ width: 24, height: 24, tintColor: 'red' }} />
                                            ) : (
                                                <Image source={require('../images/radio_unSelected.png')} style={{ width: 24, height: 24 }} />
                                            )}
                                            <Text style={{ color: item.selected ? 'red' : 'black', fontSize: 18, fontWeight: '700', marginLeft: 10, }}>{item.name}</Text>
                                        </View>
                                        {item.selected === true ? (
                                            <Image source={require('../images/LangIcon.png')} style={{ width: 30, height: 30, marginRight: 20 }} />
                                        ) : (
                                            <Grayscale style={{ marginRight: 20 }}>
                                                <Image source={require('../images/LangIcon.png')} style={{ width: 30, height: 30, opacity: 0.5 }} />
                                            </Grayscale>
                                        )}

                                    </View>
                                </Pressable>
                            )
                        }}
                    />
                </View>
            </Modal>
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
        color: '#000'
    },
    underlineStyleHighLighted: {
        borderColor: "red",
    },
    modalContainer: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 300,
        width: '100%',
        paddingTop: 10
    },
    modalStyles: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    changeLangBtn: {
        // borderWidth:1,
        // borderColor:'#fff',
        padding: 5,
        position: 'absolute',
        top: 50,
        right: 20,
        borderRadius: 50,
        backgroundColor: 'white'
    },
    langIcon: {
        width: 24,
        height: 24,
        borderRadius: 50
    },
    languageItem: {
        width: '90%',
        borderRadius: 10,
        alignSelf: 'center',
        height: 60,
        borderWidth: 1,
        marginTop: 10
    },
})