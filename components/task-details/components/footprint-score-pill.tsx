// import React, { useEffect, useRef, useState } from "react";
// import { View, StyleSheet, Animated, Platform } from "react-native";
// import Svg, { Circle, Defs, Stop } from "react-native-svg";
// import CustomText from "@/components/custom-text";
// import { icons } from "@/constants";
// import { LinearGradient } from "expo-linear-gradient";

// const FootprintPill = ({ covered_footprint, total_footprint }) => {
//   const progress = total_footprint > 0 ? (covered_footprint / total_footprint) * 100 : 0;
//   const rotation = (10 / 100) * 360;

//   return (
//     <View style={styles.container}>
//       {/* Outer */}
//       <View style={[styles.pillProgress]}>
//       <View
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             height: "50%",
//             width: "100%",
//             backgroundColor:'green',
//             transform: [{ rotate: `${rotation}deg` }], // Use dynamic rotation value
//             zIndex:1
//           }}
//         />
//         {/* Inner */}
//         {/* <View style={styles.innerContent}>
//           <icons.Footprint />
//           <Animated.Text style={styles.text}>00</Animated.Text>
//         </View> */}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   pillProgress: {
//     backgroundColor: "rgba(0, 0, 0, 0.45)",
//     borderRadius: 65,
//     padding: 4,
//     width: 138,
//     height: 58,
//     overflow: "hidden",
//     position:'relative'
//   },
//   innerContent: {
//     backgroundColor: "#111",
//     width: "100%",
//     height: "100%",
//     borderRadius: 65,
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     gap: 6.82,
//     zIndex:2
//   },
//   text: {
//     color: "rgba(242, 243, 239, 1)",
//     fontWeight: 400,
//     fontSize: 34,
//     lineHeight: 41.65,
//     textAlign: "center",
//   },
//   // pill: {
//   //   flexDirection: "row",
//   //   alignItems: "center",
//   //   gap: 6.82,
//   //   backgroundColor: "#000",
//   //   borderRadius: 30,
//   //   paddingVertical: 6,
//   //   paddingHorizontal: 20,
//   //   // zIndex: 1, // Ensure the pill is on top of the progress circle
//   // },
// });

// export default FootprintPill;
