import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Tab1 from '../tabs/Tab1'
import Tab2 from '../tabs/Tab2'
import Tab3 from '../tabs/Tab3'

const MainScreen = () => {
    const [selectedTab, setSelectedTab] = useState(0)
    return (
        <View style={styles.container}>
            {selectedTab == 0 ? <Tab1 /> : selectedTab == 1 ? <Tab2 /> : <Tab3 />}
            <View style={styles.bottomNavigationView}>
                <TouchableOpacity style={[styles.tab, { borderTopWidth: 1, borderTopColor: selectedTab == 0 ? 'red' : 'white' }]} onPress={() => { setSelectedTab(0) }}>
                    <Image source={require('../images/delivery.png')} style={[styles.tabIcon, { tintColor: selectedTab == 0 ? 'red' : 'black' }]} />
                    <Text style={[styles.tabTitle, { color: selectedTab == 0 ? 'red' : 'black' }]}>Delivery</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.tab, { borderTopWidth: 1, borderTopColor: selectedTab == 1 ? 'red' : 'white' }]} onPress={() => { setSelectedTab(1) }}>
                    <Image source={require('../images/dining.png')} style={[styles.tabIcon, { tintColor: selectedTab == 1 ? 'red' : 'black' }]} />
                    <Text style={[styles.tabTitle, { color: selectedTab == 1 ? 'red' : 'black' }]}>Dining</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.tab, { borderTopWidth: 1, borderTopColor: selectedTab == 2 ? 'red' : 'white' }]} onPress={() => { setSelectedTab(2) }}>
                    <Image source={require('../images/zomoland.png')} style={[styles.tabIcon, { tintColor: selectedTab == 2 ? 'red' : 'black' }]} />
                    <Text style={[styles.tabTitle, { color: selectedTab == 2 ? 'red' : 'black' }]}>ZomoLand</Text>
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
        alignItems: 'center',
        // backgroundColor:'grey'
    },
    tabIcon: {
        height: responsiveWidth(6),
        width: responsiveWidth(6),
    },
    tabTitle: {
        color: 'black',
        fontSize: 15,
        fontWeight: '60%'
    }
})