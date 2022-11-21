import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveScreenHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { TouchableOpacity } from 'react-native-gesture-handler'

const MainScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.bottomNavigationView}>
                <TouchableOpacity style={styles.tab}>

                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bottomNavigationView: {
        height: responsiveHeight(8),
        width: responsiveWidth(100),
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    tab: {
        width: '30%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})