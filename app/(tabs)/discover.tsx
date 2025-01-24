// import CheckBox from '@/components/CheckBox'
// import SearchBar from '@/components/SearchBar'
// import newsCategoryList from '@/constants/Categories'
// import { Colors } from '@/constants/Colors'
// import React from 'react'
// import { StyleSheet, Text, TouchableOpacity, View, Image  } from 'react-native'
// import { useSafeAreaInsets } from 'react-native-safe-area-context'

// type Props = {}

// const discover = (props: Props) => {
//     const { top: safeTop } = useSafeAreaInsets();
//     return (
//         <View style={[styles.container, {paddingTop: safeTop + 20}]} >
//            <SearchBar  withHorizontalPadding={false}/>
//            <Text style={styles.title}>Category</Text>
//            <View style={styles.listContainer}>
//             {newsCategoryList.map((item)=>(
//                 <CheckBox
//                  key={item.id}
//                   label={item.title}
//                    checked={item.selected}
//                    onPress={() => {}}
//                    />
//             ))}
//            </View>
//         </View>
//     )
// }

// export default discover;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingHorizontal: 20,
//     },
//     title:{
//         fontSize: 10,
//             fontWeight: "600",
//             color: Colors.black,
//             marginBottom: 10,
//     },
//     listContainer:{
//         flexDirection:'row',
//         flexWrap: 'wrap',
//         gap: 16,
//         marginTop: 12,
//         marginBottom: 20,
//     },
// })

import CheckBox from '@/components/CheckBox'
import SearchBar from '@/components/SearchBar'
import newsCategoryList from '@/constants/Categories'
import { Colors } from '@/constants/Colors'
import { useNewsCategories } from '@/hooks/useNewsCategories'
import { useNewsCountries } from '@/hooks/useNewsCountry'
import { Link } from 'expo-router'
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type Props = {}

const discover = (props: Props) => {
    const { top: safeTop } = useSafeAreaInsets();
    const { newsCategories, toggleNewsCategory } = useNewsCategories();
    const { newsCountries, toggleNewsCountry } = useNewsCountries();
    const [searchQuery, setSearchQuery] = useState("");
    const [category, setCategory] = useState("");
    const [country, setCountry] = useState("");

    return (
        <View style={[styles.container, { paddingTop: safeTop + 20 }]} >
            <SearchBar
                withHorizontalPadding={false}
                setSearchQuery={setSearchQuery}
            />
            <Text style={styles.title}>Category</Text>
            <View style={styles.listContainer}>
                {newsCategories.map((item) => (
                    <CheckBox
                        key={item.id}
                        label={item.title}
                        checked={item.selected}
                        onPress={() => {
                            toggleNewsCategory(item.id);
                            setCategory(item.slug);
                        }}
                    />
                ))}
            </View>
            <Text style={styles.title}>Country</Text>
            <View style={styles.listContainer}>
                {newsCountries.map((item, index) => (
                    <CheckBox
                        key={index}
                        label={item.name}
                        checked={item.selected}
                        onPress={() => {
                            toggleNewsCountry(index);
                            setCountry(item.code);
                        }}
                    />
                ))}
            </View>

            <Link href={{
                pathname: `/news/search`,
                params: {query: searchQuery, category, country}
            }} asChild>
                <TouchableOpacity style={styles.searchBtn}>
                    <Text style={styles.searchBtnTxt}>Search</Text>
                </TouchableOpacity>
            </Link>
        </View>
    );
};

export default discover;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 10,
        fontWeight: "600",
        color: Colors.black,
        marginBottom: 10,
    },
    listContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 16,
        marginTop: 12,
        marginBottom: 20,
    },
    searchBtn: {
        backgroundColor: Colors.tint,
        alignItems: 'center',
        padding: 14,
        borderRadius: 10,
        marginVertical: 10,
    },
    searchBtnTxt: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: '600',
    },
})