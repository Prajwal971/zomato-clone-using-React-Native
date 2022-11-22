import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const Tab1 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Image source={require('../images/location.png')} style={styles.location} />
                    <View>
                        <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                            <Text style={styles.locationBold}>Mangalore</Text>
                        </View>
                        <Text style={styles.locationSmall}>Kaikamba</Text>
                    </View>

                </View>

                <View style={styles.headerRight}>
                    <Image source={require('../images/LangIcon.png')} style={[styles.location, { marginRight: 20 }]} />
                </View>
            </View>
            <View style={styles.searchBar}>
                <Image source={require('../images/search.png')} style={styles.location} />
                <Text style={styles.searchText}>Search Items</Text>
                <Image source={require('../images/voice.png')} style={styles.location} />
            </View>
            <View>
                <FlatList
                    data = {[1,1,1,1,1,1,1]}
                    renderItem={{item,inde} = () => {
                        return(
                            <TouchableOpacity style = {styles.filterItems}>
                                <View>

                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </View>
    )
}

export default Tab1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    header: {
        height: responsiveHeight(8),
        width: responsiveWidth(100),
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerRight: {
        flexDirection: 'row'
    },
    location: {
        tintColor: 'red',
        width: responsiveWidth(5),
        height: responsiveWidth(5),
        marginLeft: 5
    },
    locationBold: {
        fontWeight: '800',
        color: 'black'
    },
    locationSmall: {
        marginLeft: 10,
        color: 'black'
    },
    searchBar: {
        height: responsiveHeight(6),
        borderWidth: 0.2,
        borderColor: "#8e8e8e",
        alignSelf: 'center',
        width: responsiveWidth(90),
        borderRadius: 8,
        marginTop: 20,
        backgroundColor: "#f2f2f2",
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'space-evenly'
    },
    searchText: {
        color: 'black',
        width: '80%',
        marginLeft: 20
    },
    filterItems:{
        
    }
})