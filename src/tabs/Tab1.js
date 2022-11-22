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
            {/* *********************************FILTER ********************************* */}
            <View style={{ marginTop: 20,paddingRight:7 }}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={["Sort", "Fast Delivery", "Rating 4.0+", "Pure Veg", "Cousines", "More"]}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity style={styles.filterItems}>
                                <View style={styles.fliterItemView}>
                                    {item == 'Sort' && <Image source={require('../images/filter.png')} style={[styles.location, { tintColor: 'black', width: 20, height: 20, marginRight: 5 }]} />}
                                    <Text style={{ color: '#8e8e8e' }}>
                                        {item}
                                    </Text>
                                    {item == 'Sort' || item == 'More'  && <Image source={require('../images/DropDown.png')} style={[styles.location, { tintColor: 'black', width: 10, height: 10, marginRight: 5, marginLeft: 5 }]} />}
                                </View>
                            </TouchableOpacity>
                        );
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
    filterItems: {
        borderWidth: 0.5,
        borderRadius: 5,
        marginLeft: 15,
        height: 30,
    },
    fliterItemView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        paddingLeft: 5,
        paddingRight: 5,
    }
})