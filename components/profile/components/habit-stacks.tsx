import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React, { useState } from "react";
import { icons, images } from "@/constants";
import CustomButton from "@/components/custom-button";
import HabitStacksCard from "./habit-stacks-card";
import { useSharedValue } from "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { data } from "@/constants/data";

const HabitStacks = () => {
  const [newData, setNewData] = useState([...data, ...data]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const animatedValue = useSharedValue(0);
  const MAX = 2;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.habitStackContainer}>
        <ImageBackground
          source={images.AchievementbgPrint}
          style={styles.achievementImgContainer}
          imageStyle={styles.backgroundImage}
        >
          <Text style={styles.habitStackHeading}>HABIT STACKS</Text>

          <Text style={styles.habitStackSubHeading}>
            We have combined habits for better impact.
          </Text>

          {/* Card */}
          <View style={styles.habitStackCardContainer}>
            {newData.map((item, index) => {
              if (index > currentIndex + MAX || index < currentIndex) {
                return null;
              }
              return (
                <HabitStacksCard
                  key={item.id}
                  newData={newData}
                  setNewData={setNewData}
                  maxVisibleItems={MAX}
                  item={item}
                  index={index}
                  dataLength={newData.length}
                  animatedValue={animatedValue}
                  currentIndex={currentIndex}
                  setCurrentIndex={setCurrentIndex}
                />
              );
            })}
          </View>

          {/* button */}
          <CustomButton
            title="all habit stacks"
            handlePress={() => {}}
            containerStyles={{ marginHorizontal: "auto" }}
          />
        </ImageBackground>
      </View>
    </GestureHandlerRootView>
  );
};

export default HabitStacks;

const styles = StyleSheet.create({
  habitStackContainer: {
    flex: 1,
    // alignItems: "center",
    marginBottom: 38,
  },
  backgroundImage: {
    resizeMode: "cover",
    flex: 1,
  },
  achievementImgContainer: {
    padding: 16,
    // borderRadius: 12,
    backgroundColor: "rgba(199, 82, 55, 1)", //#C75237
  },
  //
  // heading
  habitStackHeading: {
    color: "rgba(251, 251, 251, 0.7)",
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 14.7,
    marginBottom: 8,
  },
  // sub heading
  habitStackSubHeading: {
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Recoleta",
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 27.2,
    marginBottom: 16,
  },
  //
  // cards
  habitStackCardContainer: {
    marginBottom: 18,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    height: 250,
  },
});
