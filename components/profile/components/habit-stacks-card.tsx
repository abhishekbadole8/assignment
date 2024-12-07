import {
  View,
  Text,
  StyleSheet,
  Platform,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { icons } from "@/constants";
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Colors } from "@/constants/Colors";
import { SCREEN_WIDTH } from "@/constants/layout";
import { HabitStackItem } from "@/constants/data";

interface HabitStacksCardProps {
  newData: HabitStackItem[];
  setNewData: React.Dispatch<React.SetStateAction<any[]>>;
  maxVisibleItems: number;
  item: any;
  index: number;
  dataLength: number;
  animatedValue: Animated.SharedValue<number>;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

const HabitStacksCard: React.FC<HabitStacksCardProps> = ({
  newData,
  setNewData,
  maxVisibleItems,
  item,
  index,
  dataLength,
  animatedValue,
  currentIndex,
  setCurrentIndex,
}) => {
  const { activities, impacts } = item;

  const { width } = useWindowDimensions();
  const translateX = useSharedValue(0);
  const direction = useSharedValue(0);

  const pan = Gesture.Pan()
    .onUpdate((e) => {
      // e.translationX is the distance of the swipe
      // e.translationX is positive if the swipe is to the right
      // isSwipeRight is true if the swipe is to the right
      const isSwipeRight = e.translationX > 0;

      // direction 1 is right, -1 is left
      direction.value = isSwipeRight ? 1 : -1;

      // If the current index is the same as the index of the card
      if (currentIndex === index) {
        translateX.value = e.translationX;
        animatedValue.value = interpolate(
          Math.abs(e.translationX),
          [0, width],
          [index, index + 1]
        );
      }
    })
    .onEnd((e) => {
      if (currentIndex === index) {
        // If the swipe distance is greater than 150 or the swipe velocity is greater than 1000
        // go to the next card
        if (Math.abs(e.translationX) > 150 || Math.abs(e.velocityX) > 1000) {
          translateX.value = withTiming(width * direction.value, {}, () => {
            runOnJS(setNewData)([...newData, newData[currentIndex]]);
            runOnJS(setCurrentIndex)(currentIndex + 1);
          });
          animatedValue.value = withTiming(currentIndex + 1);
          // If the swipe distance is less than 150 or the swipe velocity is less than 1000
          // go back to the original position
        } else {
          translateX.value = withTiming(0, { duration: 500 });
          animatedValue.value = withTiming(currentIndex, { duration: 500 });
        }
      }
    });

  const animatedStyle = useAnimatedStyle(() => {
    const currentItem = index === currentIndex;

    // Adjusting the translateX to move the card to the right
    const translateXPosition = interpolate(
      animatedValue.value,
      [index - 1, index],
      [width * 0.1, 0] // Move from the right (width) to the original position (0)
    );

    const scale = interpolate(
      animatedValue.value,
      [index - 1, index],
      [0.9, 1]
    );

    const opacity = interpolate(
      animatedValue.value + maxVisibleItems,
      [index, index + 1],
      [0, 1]
    );

    return {
      transform: [
        { scale: currentItem ? 1 : scale },
        { translateX: translateXPosition },
      ],
      opacity: index < currentIndex + maxVisibleItems ? 1 : opacity,
    };
  });

  return (
    <GestureDetector gesture={pan}>
      <Animated.View
        style={[
          styles.habitStackCard,
          { zIndex: dataLength - index },
          animatedStyle,
        ]}
      >
        {/* Header */}
        <View style={styles.habitCardHeader}>
          <Text style={styles.habitHeading}>{item.title}</Text>

          <View style={styles.habitSubHeadingContainer}>
            <icons.Clock />
            <Text style={styles.habitSubHeading}>{item.duration}</Text>
          </View>
        </View>

        {/* Body */}
        <View style={styles.scheduleContainer}>
          {activities.map((activity: any) => (
            <View style={styles.activityContainer} key={activity.id}>
              <View style={styles.timeContainer}>
                <Text style={styles.timeText}>{activity.time}</Text>
              </View>

              <activity.icon />

              <Text style={styles.activityText}>{activity.name}</Text>
            </View>
          ))}
        </View>

        {/* Footer */}
        <View style={styles.habitFooter}>
          <View style={styles.predictedImpactContainer}>
            <Text style={styles.impactTitle}>predicted impact</Text>
          </View>

          <View style={styles.metricsContainer}>
            {impacts.map((impact: any) => (
              <View style={styles.metricItem} key={impact.id}>
                <Text style={styles.metricTitle}>{impact.name}</Text>
                <Text style={styles.metricValue}>{impact.value}
                <Text style={styles.percentage}>%</Text>
                </Text>
              </View>
            ))}
          </View>
        </View>
      </Animated.View>
    </GestureDetector>
  );
};

export default HabitStacksCard;

const styles = StyleSheet.create({
  habitStackCard: {
    // width: SCREEN_WIDTH - 32,
    backgroundColor: Colors.white,
    borderRadius: 11.5,
    position: "absolute",
    width: SCREEN_WIDTH - 50,
    right: 16,

    // shadow
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 4, height: 0 },
        shadowOpacity: 0.45,
        shadowRadius: 15,
      },
      android: {
        elevation: 15,
      },
    }),
  },
  // header
  habitCardHeader: {
    padding: 19.02,
    paddingBottom: 0,
    marginBottom: 4.42,
  },
  // heading
  habitHeading: {
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 20,
    lineHeight: 24.76,
  },
  // sub heading cont
  habitSubHeadingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3.8,
  },
  habitSubHeading: {
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 17.12,
  },
  //
  //
  scheduleContainer: {
    backgroundColor: "rgba(67, 92, 191, 1)", // #435CBF
    paddingTop: 12,
    paddingBottom: 8.17,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    // marginVertical: 8,
  },
  activityContainer: {
    alignItems: "center",
  },
  // time
  timeContainer: {
    backgroundColor: "rgba(82, 105, 196, 1)",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    marginBottom: 4,
  },
  timeText: {
    color: "rgba(201, 208, 235, 1)", //#C9D0EB
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 13.32,
    lineHeight: 17.12,
  },
  activityText: {
    color: "rgba(255, 255, 255, 1)", //#FFFFFF
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 13.32,
    lineHeight: 17.12,
    marginTop: 3,
  },
  //
  // footer
  habitFooter: {
    paddingTop: 8,
  },
  predictedImpactContainer: {
    backgroundColor: "rgba(67, 92, 191, 0.11)",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
    marginLeft: 20,
    width: "auto",
    alignSelf: "flex-start",
  },
  impactTitle: {
    color: "rgba(0, 0, 0, 0.7)",
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 17.15,
  },
  //
  //
  metricsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  metricItem: {
    flex: 1,
    alignItems: "center",
  },

  borderLeft: {
    borderLeftWidth: 0.5,
    borderLeftColor: "rgba(0, 0, 0, 0.1)",
  },

  metricTitle: {
    color: "rgba(0, 0, 0, 0.6)",
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 11.12,
    lineHeight: 13.62,
    marginBottom: 2,
  },
  metricValue: {
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 20,
    lineHeight: 24.76,
    letterSpacing: -0.03,
  },
  percentage:{
    fontSize: 14,
    lineHeight: 17.33,
  },
});
