// import React from 'react'
// import { Colors } from '@/constants/Colors'
// import { Ionicons } from '@expo/vector-icons'
// import { StyleSheet, Text, View, } from 'react-native'
// import { TextInput } from 'react-native-gesture-handler'


// type Props = {}

// const SearchBar = (props: Props) => {
//     return (
//         <View style={styles.container} >
//             <View style={styles.searchBar}>
//                 <Ionicons name='search-outline' size={20} color={Colors.lightGrey} />
//                 <TextInput
//                  placeholder='search' 
//                  placeholderTextColor={Colors.lightGrey} 
//                  style={styles.searchText}
//                  autoCapitalize='none'
//                  />
//             </View>
//         </View>
//     )
// }

// export default SearchBar;

// const styles = StyleSheet.create({
//     container:{
//         marginHorizontal: 20,
//         marginBottom: 20,
//     },
//     searchBar:{
//        backgroundColor: '#E4E4E4',
//        paddingHorizontal: 10,
//        paddingVertical: 12,
//        borderRadius: 10,
//        flexDirection: 'row',
//        gap: 10,
//     },
//     searchText:{
//        fontSize: 14,
//        flex: 1,
//        color: Colors.darkGrey, 
//     },
// })

import React from 'react'
import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, Text, View, } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'


type Props = {
    withHorizontalPadding: boolean
    setSearchQuery :Function
};

const SearchBar = ({withHorizontalPadding,setSearchQuery}: Props) => {
    return (
        <View style={[styles.container, withHorizontalPadding && {paddingHorizontal: 20}]} >
            <View style={styles.searchBar}>
                <Ionicons name='search-outline' size={20} color={Colors.lightGrey} />
                <TextInput
                 placeholder='search' 
                 placeholderTextColor={Colors.lightGrey} 
                 style={styles.searchText}
                 autoCapitalize='none'
                 onChangeText={query => setSearchQuery(query)}
                 />
            </View>
        </View>
    )
}

export default SearchBar;

const styles = StyleSheet.create({
    container:{
        // marginHorizontal: 20,
        marginBottom: 20,
    },
    searchBar:{
       backgroundColor: '#E4E4E4',
       paddingHorizontal: 10,
       paddingVertical: 12,
       borderRadius: 10,
       flexDirection: 'row',
       gap: 10,
    },
    searchText:{
       fontSize: 14,
       flex: 1,
       color: Colors.darkGrey, 
    },
})