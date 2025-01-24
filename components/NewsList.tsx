// // import { Colors } from '@/constants/Colors'
// // import { NewsDataType } from '@/types'
// // import React from 'react'
// // import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
// // import Loading from './Loading'

// // type Props = {
// //     newsList: Array<NewsDataType>
// // }

// // const NewsList = ({ newsList }: Props) => {
// //     return (
// //         <View style={styles.container} >
// //             {newsList.length == 0 ? (
// //                 <Loading  size={'large'}/>
// //             ):(
// //                 newsList.map((item, index) => (
// //                     <View key={index} style={styles.itemContainer}>
// //                     <Image source={{ uri: item.image_url }} style={styles.itemImage} />
// //                     <View style={styles.itemInfo}>
// //                         <Text style={styles.itemCategory}>{item.category}</Text>
// //                         <Text style={styles.itemTitle}>{item.title}</Text>
// //                         <View style={styles.itemSourceInfo}>
// //                             <Image source={{uri: item.source_icon}} style={styles.itemSourceImg}/>
// //                             <Text style={styles.itemSourceName}>{item.source_name}</Text>
// //                         </View>
// //                     </View>
// //                 </View>
// //             ))
// //         )}
// //         </View>
// //     )
// // }

// // export default NewsList;

// // const styles = StyleSheet.create({
// //     container: {
// //         marginHorizontal: 20,
// //         marginBottom: 50,
// //     },
// //     itemContainer: {
// //         flexDirection: 'row',
// //         alignItems: 'center',
// //         marginBottom: 20,
// //         flex: 1,
// //         gap: 10,
// //     },
// //     itemImage: {
// //         width: 90,
// //         height: 100,
// //         borderRadius: 20,
// //         marginRight: 10,

// //     },
// //     itemInfo:{
// //         flex: 1,
// //         gap: 10,
// //         justifyContent: 'space-between',
// //     },
// //     itemCategory:{
// //          fontSize: 12,
// //          color: Colors.darkGrey,
// //          textTransform: 'capitalize',
// //     },
// //     itemTitle:{
// //          fontSize: 12,
// //          fontWeight: '600',
// //          color: Colors.black,
// //     },
// //     itemSourceInfo:{
// //          flexDirection: 'row',
// //          gap: 8,
// //          alignItems: 'center', 
// //     },
// //     itemSourceImg:{
// //           width: 20,
// //           height: 20,
// //           borderRadius: 20,
// //     },
// //     itemSourceName:{
// //            fontSize: 10,
// //            fontWeight: '400',
// //            color: Colors.darkGrey,
// //     },


// // })


import { Colors } from "@/constants/Colors";
import { NewsDataType } from "@/types";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import Loading from "./Loading";
import { Link } from "expo-router";

type Props = {
  newsList: Array<NewsDataType>;
};

const NewsList = ({ newsList }: Props) => {
  return (
    <View style={styles.container}>
      {newsList.length == 0 ? (
        <Loading size={"large"} />
      ) : (
        newsList.map((item, index) => (
          <Link href={`/news/${item.article_id}`} asChild key={item.article_id}>
            <TouchableOpacity>
              <NewsItem item={item} />
            </TouchableOpacity>
          </Link>
        ))
      )}
    </View>
  );
};

export default NewsList;

export const NewsItem = ({ item }: { item: NewsDataType }) => {
  return (
    <View style={styles.itemContainer}>
      <Image
        source={{ uri: item.image_url }}
        style={styles.itemImage}
      />
      <View style={styles.itemInfo}>
        <Text style={styles.itemCategory}>{item.category}</Text>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <View style={styles.itemSourceInfo}>
          <Image
            source={{ uri: item.source_icon }}
            style={styles.itemSourceImg}
          />
          <Text style={styles.itemSourceName}>
            {item.source_name}
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 50,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    flex: 1,
    gap: 10,
  },
  itemImage: {
    width: 90,
    height: 100,
    borderRadius: 20,
    marginRight: 10,
  },
  itemInfo: {
    flex: 1,
    gap: 10,
    justifyContent: "space-between",
  },
  itemCategory: {
    fontSize: 12,
    color: Colors.darkGrey,
    textTransform: "capitalize",
  },
  itemTitle: {
    fontSize: 12,
    fontWeight: "600",
    color: Colors.black,
  },
  itemSourceInfo: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  itemSourceImg: {
    width: 20,
    height: 20,
    borderRadius: 20,
  },
  itemSourceName: {
    fontSize: 10,
    fontWeight: "400",
    color: Colors.darkGrey,
  },
});


// import { Colors } from "@/constants/Colors";
// import { NewsDataType } from "@/types";
// import React from "react";
// import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
// import Loading from "./Loading";
// import { Link } from "expo-router";

// type Props = {
//   newsList: Array<NewsDataType>;
// };

// const NewsList = ({ newsList }: Props) => {
//   return (
//     <View style={styles.container}>
//       {newsList.length == 0 ? (
//         <Loading size={"large"} />
//       ) : (
//         newsList.map((item) => (
//           <Link href={`/new/${item.article_id}`} asChild key={item.article_id}>
//             <TouchableOpacity>
//               <NewsItem item={item} />
//             </TouchableOpacity>
//           </Link>
//         ))
//       )}
//     </View>
//   );
// };

// const NewsItem = ({ item }: { item: NewsDataType }) => {
//   return (
//     <View style={styles.itemContainer}>
//       <Image
//         source={{ uri: item.image_url || 'default-image-url' }}
//         style={styles.itemImage}
//         resizeMode="cover"
//       />
//       <View style={styles.itemInfo}>
//         <Text style={styles.itemCategory}>{item.category}</Text>
//         <Text style={styles.itemTitle}>{item.title}</Text>
//         <View style={styles.itemSourceInfo}>
//           <Image
//             source={{ uri: item.source_icon || 'default-icon-url' }}
//             style={styles.itemSourceImg}
//           />
//           <Text style={styles.itemSourceName}>{item.source_name}</Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginHorizontal: 20,
//     marginBottom: 50,
//   },
//   itemContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 20,
//     flex: 1,
//     gap: 10,
//   },
//   itemImage: {
//     width: 90,
//     height: 100,
//     borderRadius: 20,
//     marginRight: 10,
//   },
//   itemInfo: {
//     flex: 1,
//     gap: 10,
//     justifyContent: "space-between",
//   },
//   itemCategory: {
//     fontSize: 12,
//     color: Colors.darkGrey,
//     textTransform: "capitalize",
//   },
//   itemTitle: {
//     fontSize: 12,
//     fontWeight: "600",
//     color: Colors.black,
//   },
//   itemSourceInfo: {
//     flexDirection: "row",
//     gap: 8,
//     alignItems: "center",
//   },
//   itemSourceImg: {
//     width: 20,
//     height: 20,
//     borderRadius: 20,
//   },
//   itemSourceName: {
//     fontSize: 10,
//     fontWeight: "400",
//     color: Colors.darkGrey,
//   },
// });

// export default NewsList;








// <Link href={`/new/${item.article_id}`} asChild key={index}></Link> 
