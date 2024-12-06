import { View, StyleSheet, Animated, StatusBar } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Header from "@/components/home/components/header";
import MainHeading from "@/components/home/components/main-heading";
import UpcomingTasks from "@/components/home/components/upcoming-tasks";
import Insight from "@/components/home/components/Insight";
import Achievement from "@/components/home/components/achievement";
import CircularProgress from "@/components/home/components/circular-progress";
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  STATUS_BAR_HEIGHT,
} from "@/constants/layout";
import { Colors } from "@/constants/Colors";
import { icons, images } from "@/constants";

const MAIN_BACKGROUND_HEIGHT = 345;
const CIRCULAR_PROGRESS_SIZE = 174;
const IMAGE_HEIGHT = 1350; // Total Height of Image

const Home = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const backgroundOffset = useRef(new Animated.Value(0)).current;
  const [currentHour, setCurrentHour] = useState(0); // State to store the current hour

  useEffect(() => {
    const currentTimeInIST = new Date();
    const hour = currentTimeInIST.getHours();
    setCurrentHour(hour);

    // If it's after 6 PM, scroll to the top
    // If it's before 6 PM, scroll to the bottom
    if (hour >= 18) {
      // After 6 PM, scroll to the top
      Animated.timing(backgroundOffset, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true,
      }).start();
    } else {
      // During the day, scroll to the bottom
      Animated.timing(backgroundOffset, {
        toValue: -IMAGE_HEIGHT + SCREEN_HEIGHT - 385, // Scroll to the bottom of the image
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }
  }, []);

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
        <View style={styles.background}>
          {/* Mask Background Image */}
          <View style={styles.backgroundContainer}>
            {/* Main Image */}
            <Animated.Image
              source={require("@/assets/images/main-bg-img.png")}
              style={[
                styles.backgroundImage,
                {
                  transform: [
                    {
                      translateY: backgroundOffset,
                    },
                  ],
                },
              ]}
              resizeMode="cover"
            />
          </View>

          {/* Sun Moon Bg shadow */}
          <View style={styles.SunMoonImgContainer}>
            <View style={styles.blurWrapper} />

            {/* Child component will not be affected by blur */}
            {currentHour >= 18 ? (
              <icons.Moon style={styles.SunMoonIcon} />
            ) : (
              <icons.Sun
                style={[
                  styles.SunMoonIcon,
                  {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderRadius: 100,
                  },
                ]}
              />
            )}
          </View>

          {/* Circular Progress */}
          <View style={styles.circularContainer}>
            <CircularProgress
              score={78}
              size={CIRCULAR_PROGRESS_SIZE}
              progressColor={Colors.white}
            />
          </View>
        </View>

        {/* Main Content */}
        <View style={styles.mainContentWrapper}>
          {/* Header */}
          <Header />

          {/* Main Heading & Sub-Heading*/}
          <MainHeading />
        </View>

        <images.CurveImage style={styles.whiteImg} />

        {/* UPCOMING TASKS */}
        <UpcomingTasks />

        {/* Insight Container */}
        <Insight />

        <Achievement />
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
    flexGrow: 1,
    width: "100%",
  },
  //

  // Mask
  background: {
    flex: 1,
    width: SCREEN_WIDTH,
    height: MAIN_BACKGROUND_HEIGHT,
    marginBottom: 52,
    position: "relative",
    alignItems: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  backgroundContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: SCREEN_WIDTH,
    height: MAIN_BACKGROUND_HEIGHT,
    overflow: "hidden",
  },
  backgroundImage: {
    width: SCREEN_WIDTH,
    height: IMAGE_HEIGHT,
  },
  //
  //
  mainContentWrapper: {
    width: "100%",
    position: "absolute",
    marginTop: STATUS_BAR_HEIGHT,
  },

  circularContainer: {
    position: "absolute",
    bottom: -29,
    zIndex: 500,
  },

  // Sun Moon
  SunMoonImgContainer: {
    width: 169,
    height: 169,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: -21,
    bottom: 44,
  },
  blurWrapper: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    filter: "blur(100)",
  },
  SunMoonIcon: {
    width: 49,
    height: 49,
    position: "absolute",
  },

  whiteImg: {
    position: "absolute",
    top: 220,
    minWidth: SCREEN_WIDTH,
    height: 30,
  },
});
