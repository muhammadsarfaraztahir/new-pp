// import { Colors } from '@/constants/Colors'
// import { NewsDataType } from '@/types'
// import { LinearGradient } from 'expo-linear-gradient'
// import React from 'react'
// import { StyleSheet, Text, TouchableOpacity, View, Image, Dimensions } from 'react-native'
// import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated'

// type Props = {
//     SlideItem: NewsDataType,
//     index: number,
//     scrollX: SharedValue<number>
// }

// const { width } = Dimensions.get('screen')
// const SliderItem = ({ SlideItem, index, scrollX }: Props) => {
//     const rnStyle = useAnimatedStyle(()=>{
//         return{
//             transform: [
//                 {
//                     translateX: interpolate(
//                         scrollX.value,
//                         [(index - 1) * width, index * width, (index + 1 ) * width],
//                         [-width * 0.15, 0, width * 0.15],
//                         Extrapolation.CLAMP
//                     ),
//                 },
//                 {
//                     scale: interpolate(
//                         scrollX.value,
//                         [(index -1) * width, index * width, (index + 1) * width],
//                         [0.9, 1, 0.9 ],
//                         Extrapolation.CLAMP
//                     ),
//                 },
//             ],
//         };
//     } );

//     return (
//         <Animated.View 
//          style={[styles.itemWrapper, rnStyle]}
//          key={SlideItem.article_id}
//          >
//             <Image
//                 source={{ uri: SlideItem.image_url }}
//                 style={styles.image}
//             />
//             <LinearGradient colors={["transparent", 'rgba(0, 0, 0, 0.8)']} style={styles.background}>
//                 <View style={styles.sourceInfo}>
//                     {SlideItem.source_icon && (
//                         <Image source={{ uri: SlideItem.source_icon }} style={styles.sourceIcon} />
//                     )}
//                     <Text style={styles.sourceName}>{SlideItem.source_name}</Text>
//                 </View>
//                 <Text style={styles.title} numberOfLines={2}>{SlideItem.title}</Text>
//             </LinearGradient>
//         </Animated.View>
//     )
// }

// export default SliderItem;

// const styles = StyleSheet.create({
//     itemWrapper: {
//         // position: 'relative',
//         width: width,
//         justifyContent: 'center',
//         alignContent: 'center',
//     },
//     image: {
//         width: width - 60,
//         height: 180,
//         borderRadius: 20,
//     },
//     background: {
//         position: 'absolute',
//         left: 30,
//         right: 0,
//         top: 0,
//         width: width - 60,
//         height: 180,
//         borderRadius: 20,
//         padding: 20,
//     },
//     sourceInfo: {
//         flexDirection: 'row',
//         position: 'absolute',
//         top: 85,
//         paddingHorizontal: 20,
//         alignItems: 'center',
//         gap: 10,
//     },
//     sourceName: {
//         color: Colors.white,
//         fontSize: 12,
//         fontWeight: '600',
//     },
//     sourceIcon: {
//         width: 25,
//         height: 25,
//         borderRadius: 20,
//     },
//     title: {
//         fontSize: 14,
//         color: Colors.white,
//         position: 'absolute',
//         top: 20,
//         paddingHorizontal: 20,
//         fontWeight: '600',
//     },
// })

import { Colors } from "@/constants/Colors";
import { NewsDataType } from "@/types";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

type Props = {
  SlideItem: NewsDataType;
  index: number;
  scrollX: SharedValue<number>;
};

const { width } = Dimensions.get("screen");
const SliderItem = ({ SlideItem, index, scrollX }: Props) => {
  const rnStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [-width * 0.15, 0, width * 0.15],
            Extrapolation.CLAMP
          ),
        },
        {
          scale: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [0.9, 1, 0.9],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });

  return (
    <Link href={`/news/${SlideItem.article_id}`} asChild>
      <TouchableOpacity>
        <Animated.View
          style={[styles.itemWrapper, rnStyle]}
          key={SlideItem.article_id}
        >
          <Image source={{ uri: SlideItem.image_url }} style={styles.image} />
          <LinearGradient
            colors={["transparent", "rgba(0, 0, 0, 0.8)"]}
            style={styles.background}
          >
            <View style={styles.sourceInfo}>
              {SlideItem.source_icon && (
                <Image
                  source={{ uri: SlideItem.source_icon }}
                  style={styles.sourceIcon}
                />
              )}
              <Text style={styles.sourceName}>{SlideItem.source_name}</Text>
            </View>
            <Text style={styles.title} numberOfLines={2}>
              {SlideItem.title}
            </Text>
          </LinearGradient>
        </Animated.View>
      </TouchableOpacity>
    </Link>
  );
};

export default SliderItem;

const styles = StyleSheet.create({
  itemWrapper: {
    // position: 'relative',
    width: width,
    justifyContent: "center",
    alignContent: "center",
  },
  image: {
    width: width - 60,
    height: 180,
    borderRadius: 20,
  },
  background: {
    position: "absolute",
    left: 30,
    right: 0,
    top: 0,
    width: width - 60,
    height: 180,
    borderRadius: 20,
    padding: 20,
  },
  sourceInfo: {
    flexDirection: "row",
    position: "absolute",
    top: 85,
    paddingHorizontal: 20,
    alignItems: "center",
    gap: 10,
  },
  sourceName: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: "600",
  },
  sourceIcon: {
    width: 25,
    height: 25,
    borderRadius: 20,
  },
  title: {
    fontSize: 14,
    color: Colors.white,
    position: "absolute",
    top: 20,
    paddingHorizontal: 20,
    fontWeight: "600",
  },
});
