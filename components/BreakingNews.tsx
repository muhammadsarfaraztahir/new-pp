// // import { Colors } from '@/constants/Colors'
// // import { NewsDataType } from '@/types'
// // import React, { useState } from 'react'
// // import { FlatList, StyleSheet, Text, View } from 'react-native'
// // import SliderItem from '@/components/SliderItem'
// // import Animated, { useAnimatedRef, useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'
// // import Pagination from '@/components/pagination'

// // type Props = {
// //     newsList: Array<NewsDataType>;
// // }


// // const BreakingNews = ({newsList}: Props) => {

// //     const onViewableItemsChanged = {{
// //         viewableItems,
// //     }}: {
// //         viewableItems: ViewToken[];
// //     }) => {
// //         if(
// //             viewableItems[0].index !== undefined &&
// //             viewableItems[0].index !== null
// //         )
// //     }
    
// //     const [data, setData] = useState(newsList);
// //     const [paginationIndex, setPaginationIndex] = useState(0);
// //     const scrollX = useSharedValue(0);
// //     const ref = useAnimatedRef<Animated.FlatList<any>>();
    
// //     const onScrollHandler = useAnimatedScrollHandler({
// //         onScroll: (e) => {
// //             scrollX.value = e.contentOffset.x;
// //         },
// //     });

// //     return (
// //         <View style={styles.container}>
// //             <Text style={styles.title}>Breaking New</Text>
// //             <View style={styles.slideWrapper}>
// //                 <Animated.FlatList 
// //                 ref={ref}
// //                  data={data} 
// //                  keyExtractor={(_, index) => `list_item${index}`} 
// //                  renderItem={({ item , index })=>{
// //                     <SliderItem slideItem={item} index={index}  scrollX={scrollX}/>
// //                 }}
// //                 horizontal
// //                 showsHorizontalScrollIndicator={false}
// //                 pagingEnabled
// //                 onScroll={onScrollHandler}
// //                 scrollEventThrottle={16}
// //                 onEndReachedThreshold={0.5}
// //                 onEndReached={()=> setData([...data, ...newsList])}
// //                 viewabilityConfigCallbackPairs={
// //                     viewabilityConfigCallbackPairs.current
// //                 }
// //                 />
// //                 <Pagination  items={newsList} scrollX={scrollX} paginationIndex={paginationIndex}/>
// //             </View>
// //         </View>
// //     )
// // }

// // export default BreakingNews;

// // const styles = StyleSheet.create({
// //     container:{
// //         marginBottom: 10,
// //     },
// //     title:{
// //         fontSize: 10,
// //         fontWeight: "600",
// //         color: Colors.black,
// //         marginBottom: 10,
// //         marginLeft: 20,
// //     },
// //     slideWrapper:{
// //         // width: '100%',
// //         // flex: 1,
// //         justifyContent: 'center',
// //     },
// // });









// import { Colors } from "@/constants/Colors";
// import { NewsDataType } from "@/types";
// import React, { useEffect, useRef, useState } from "react";
// import { FlatList, StyleSheet, Text, useWindowDimensions, View, ViewToken } from "react-native";
// import SliderItem from "@/components/SliderItem";
// import Animated, {
//     scrollTo,
//   useAnimatedRef,
//   useAnimatedScrollHandler,
//   useDerivedValue,
//   useSharedValue,
// } from "react-native-reanimated";
// import Pagination from "@/components/Pagination";

// type Props = {
//   newsList: Array<NewsDataType>;
// };

// const BreakingNews = ({ newsList }: Props) => {
//   const [data, setData] = useState(newsList);
//   const [paginationIndex, setPaginationIndex] = useState(0);
//   const scrollX = useSharedValue(0);
//   const ref = useAnimatedRef<Animated.FlatList<any>>();
//   const [isAutoPlay, setIsAutoPlay] =useState(true);
//   const interval = useRef<NodeJS.Timeout>();
//   const offset = useSharedValue(0);
//   const{ width } = useWindowDimensions();

//   const onScrollHandler = useAnimatedScrollHandler({
//     onScroll: (e) => {
//       scrollX.value = e.contentOffset.x;
//     },
//     onMomentumEnd: (e) => {
//         offset.value = e.contentOffset.x
//     },
//   });

//   useEffect(()=>{
//     if(isAutoPlay === true){
//         interval.current = setInterval(() => {
//             offset.value = offset.value + width;
//         }, 5000);
//     }
//         else{
//             clearInterval(interval.current);
//         }
//         return ()=>{
//             clearInterval(interval.current);
//         };
//   }, [isAutoPlay, offset, width]);

//   useDerivedValue(() => {
//     scrollTo(ref, offset.value, 0, true);
//   });

//   const onviewableItemsChanged = ({
//     viewableItems,
//   }: {
//     viewableItems: ViewToken[];
//   }) => {
//     if (
//       viewableItems[0].index !== undefined &&
//       viewableItems[0].index !== null
//     ) {
//       setPaginationIndex(viewableItems[0].index % newsList.length);
//     }
//   };

//   const viewabilityConfig = {
//     itemVisiblePercentThreshold: 50,
//   };
//   const viewabilityConfigCallbackPairs = useRef([
//     { viewabilityConfig, onviewableItemsChanged },
//   ]);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Breaking New</Text>
//       <View style={styles.slideWrapper}>
//         <Animated.FlatList
//           ref={ref}
//           data={data}
//           keyExtractor={(_, index) => `list_item${index}`}
//           renderItem={({ item, index }) => {
//             <SliderItem SlideItem={item} index={index} scrollX={scrollX} />
//           }}
  
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           pagingEnabled
//           onScroll={onScrollHandler}
//           scrollEventThrottle={16}
//           onEndReachedThreshold={0.5}
//           onEndReached={() => setData([...data, ...newsList])}
//           viewabilityConfigCallbackPairs={
//             viewabilityConfigCallbackPairs.current
//           }
//           onScrollBeginDrag={()=>{
//             setIsAutoPlay(false);
//           }}
//           onScrollEndDrag={()=>{
//             setIsAutoPlay(true);
//           }}
//         />
//         <Pagination
//           items={newsList}
//           scrollX={scrollX}
//           paginationIndex={paginationIndex}
//         />
//       </View>
//     </View>
//   );
// };

// export default BreakingNews;

// const styles = StyleSheet.create({
//   container: {
//     marginBottom: 10,
//   },
//   title: {
//     fontSize: 10,
//     fontWeight: "600",
//     color: Colors.black,
//     marginBottom: 10,
//     marginLeft: 20,
//   },
//   slideWrapper: {
//     // width: '100%',
//     // flex: 1,
//     justifyContent: "center",
//   },
// });
























import { Colors } from "@/constants/Colors";
import { NewsDataType } from "@/types";
import React, { useEffect, useRef, useState } from "react";
import { FlatList, StyleSheet, Text, useWindowDimensions, View, ViewToken } from "react-native";
import SliderItem from "@/components/SliderItem";
import Animated, {
    useAnimatedRef,
    useAnimatedScrollHandler,
    useDerivedValue,
    useSharedValue,
    scrollTo
} from "react-native-reanimated";
import Pagination from "@/components/Pagination";

type Props = {
  newsList: Array<NewsDataType>;
};

const BreakingNews = ({ newsList }: Props) => {
  const [data, setData] = useState(newsList);
  const [paginationIndex, setPaginationIndex] = useState(0);
  const scrollX = useSharedValue(0);
  const ref = useAnimatedRef<Animated.FlatList<any>>();
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const interval = useRef<NodeJS.Timeout>();
  const offset = useSharedValue(0);
  const { width } = useWindowDimensions();

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollX.value = e.contentOffset.x;
    },
    onMomentumEnd: (e) => {
      offset.value = e.contentOffset.x;
    },
  });

  useEffect(() => {
    if (isAutoPlay) {
      interval.current = setInterval(() => {
        offset.value = offset.value + width;
      }, 5000); // Auto-scroll every 5 seconds
    } else {
      clearInterval(interval.current);
    }
    return () => clearInterval(interval.current); // Clean up on unmount
  }, [isAutoPlay, offset, width]);

  useDerivedValue(() => {
    // Automatically scroll the FlatList when offset changes
    scrollTo(ref, offset.value, 0, true);
  });

  const onViewableItemsChanged = ({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems[0].index !== undefined && viewableItems[0].index !== null) {
      setPaginationIndex(viewableItems[0].index % newsList.length);
    }
  };

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50, // Adjust if necessary
  };

  const viewabilityConfigCallbackPairs = useRef([
    { viewabilityConfig, onViewableItemsChanged },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Breaking News</Text>
      <View style={styles.slideWrapper}>
        <Animated.FlatList
          ref={ref}
          data={data}
          keyExtractor={(_, index) => `list_item${index}`}
          renderItem={({ item, index }) => {
            return <SliderItem SlideItem={item} index={index} scrollX={scrollX} />;
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={onScrollHandler}
          scrollEventThrottle={16}
          onEndReachedThreshold={0.5}
          onEndReached={() => setData([...data, ...newsList])} // Append more data when end is reached
          viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
          onScrollBeginDrag={() => setIsAutoPlay(false)}
          onScrollEndDrag={() => setIsAutoPlay(true)}
        />
        <Pagination
          items={newsList}
          scrollX={scrollX}
          paginationIndex={paginationIndex}
        />
      </View>
    </View>
  );
};

export default BreakingNews;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    fontSize: 10,
    fontWeight: "600",
    color: Colors.black,
    marginBottom: 10,
    marginLeft: 20,
  },
  slideWrapper: {
    justifyContent: "center",
  },
});




// npx expo install expo@latest
// npx expo install expo@^52.0.0
// npx expo install expo@^52.0.0