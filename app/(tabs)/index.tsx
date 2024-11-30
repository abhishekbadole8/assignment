import { View, StyleSheet, Animated, StatusBar, Image } from "react-native";
import React, { useEffect, useRef } from "react";
import { icons, images } from "@/constants";
import Header from "@/components/home/components/header";
import { SCREEN_WIDTH, STATUS_BAR_HEIGHT } from "@/constants/layout";
import CircularProgress from "@/components/home/components/circular-progress";
import MainHeading from "@/components/home/components/main-heading";

const MAIN_BACKGROUND_HEIGHT = 345;
const HEADER_HEIGHT = 49;

const Home = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <StatusBar translucent barStyle="dark-content" />

      <Animated.ScrollView
        contentContainerStyle={styles.scrollContent}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        <View>
          {/* Mask Background Image */}
          <View style={styles.background}>
            <Image source={images.maskbg} style={styles.maskImage} />
          </View>

          <View style={styles.mainContentWrapper}>
            {/* Header */}
            <Header />

            {/* Main Heading & Sub-Heading*/}
            <MainHeading />

            {/* Circular Progress */}
            <CircularProgress />
          </View>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // For Animated Scrool
  scrollContent: {
    // padding: 16,
  },
  //
  // Mask
  background: {
    flex: 1,
    width: SCREEN_WIDTH,
    height: MAIN_BACKGROUND_HEIGHT,
    marginBottom: 52,
  },
  maskImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  //
  mainContentWrapper: {
    width: "100%",
    position: "absolute",
    marginTop: STATUS_BAR_HEIGHT,
  },

  // Circular Progress
  circularProgress: {},
});
