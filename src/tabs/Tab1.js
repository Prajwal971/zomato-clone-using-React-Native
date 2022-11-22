import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const Tab1 = () => {
    return (
        <ScrollView style={styles.container}>
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
                <View style={{ marginTop: 20, paddingRight: 7 }}>
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
                                        {item == 'Sort' || item == 'More' && <Image source={require('../images/DropDown.png')} style={[styles.location, { tintColor: 'black', width: 10, height: 10, marginRight: 5, marginLeft: 5 }]} />}
                                    </View>
                                </TouchableOpacity>
                            );
                        }}
                    />
                </View>
                {/* Banner */}
                <View style={styles.upperView}>
                    <TouchableOpacity style={styles.card}>
                        <Image source={require('../images/offers.jpg')} style={styles.cardImage} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.card}>
                        <Image source={require('../images/GreenHealthy.jpg')} style={styles.cardImage} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.banner}>
                    <Image source={require('../images/oederNow.jpg')} style={styles.bannerImage} />
                </TouchableOpacity>

                <Text style={styles.categoryTitle}>Top Brands For you</Text>

                <View style={{ marginTop: 10, paddingLeft: 20 }}>
                    <FlatList
                        data={[
                            { image: require('../images/BK.png'), title: 'Burger King' },
                            { image: require('../images/DMNOS.png'), title: 'Dominos' },
                            { image: require('../images/kfc.png'), title: 'KFC' },
                            { image: require('../images/sw.png'), title: 'SubWay' }
                        ]}
                        horizontal
                        renderItem={({ item, index }) => {
                            return (
                                <View style={styles.brandItem}>
                                    <View style={styles.brandImageView}>
                                        <Image source={item.image} style={styles.brandImage} />
                                    </View>
                                    <View style={styles.percentageView}>
                                        <Text style={{ fontSize: 10 }}>40% Off</Text>
                                    </View>
                                    <Text style={{ marginTop: 10, color: 'black', alignSelf: 'center' }}>{item.title}</Text>
                                </View>
                            )
                        }}
                    />
                </View>
                <Text style={styles.categoryTitle}>Recommended for you</Text>
                <View style={{ marginTop: 15 }}>
                    <FlatList
                        data={[1, 1, 1, 1]}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity style={styles.recommededItem}>
                                    <Image source={require('../images/pizza.jpg')} style={styles.recommededItemImage} />
                                    <View style={styles.recommededItemPriceView}>
                                        <Text></Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default Tab1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f2f2f2",
        marginBottom: 150
    },
    header: {
        height: responsiveHeight(8),
        width: responsiveWidth(100),
        backgroundColor: '#f2f2f2',
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
    },
    upperView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 30,
    },
    card: {
        width: responsiveWidth(38),
        height: responsiveHeight(15),
        borderRadius: 10,
    },
    banner: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 30,
        height: responsiveHeight(20)
    },
    cardImage: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    bannerImage: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    categoryTitle: {
        color: 'black',
        fontWeight: '800',
        marginTop: 20,
        marginLeft: 20,
        fontSize: responsiveFontSize(2.2),
    },
    brandItem: {
        marginLeft: 10,
        marginBottom: 10
    },
    brandImage: {
        width: '80%',
        height: '90%',
        resizeMode: 'contain'
    },
    brandImageView: {
        backgroundColor: '#fff',
        width: responsiveWidth(14),
        height: responsiveWidth(14),
        borderRadius: responsiveWidth(14) / 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    percentageView: {
        width: '80%',
        height: 20,
        backgroundColor: '#497ceb',
        borderRadius: 4,
        position: 'absolute',
        top: 45,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    recommededItem: {
        width: responsiveWidth(40),
        height: responsiveHeight(30),
        backgroundColor: 'white',
        borderRadius: 10,
        marginLeft: 15
    },
    itemImage: { width: '100%', height: '70%', borderTopLeftRadius: 20, borderTopRightRadius: 20 },
    recommededItemPriceView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
})