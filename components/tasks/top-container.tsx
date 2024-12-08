import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { icons } from "@/constants";

const TopContainer = () => {
  return (
    <View style={styles.topContainer}>
      <View style={styles.sunContainer}>
        <icons.SunWithBlur style={styles.sunIcon} />
      </View>

      <View>
        <Text style={styles.topContainerHeading}>Sunny</Text>
        <Text style={styles.topContainerSubHeading}>
          Condition optimal:{" "}
          <Text style={styles.topContainerSubHeadingMuted}>
            proceed as planned
          </Text>
        </Text>
      </View>

      <View style={styles.downArrow}>
        <icons.DownwardArrowWhite />
      </View>
    </View>
  );
};

export default TopContainer;

const styles = StyleSheet.create({
  // top container
  topContainer: {
    backgroundColor: "rgba(0, 0, 0, 1)",
    paddingLeft: 14.5,
    paddingRight: 16,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 16,
  },
  sunContainer: {
    width: 42,
    height: 42,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  sunIcon: {
    width: 42,
    height: 42,
  },
  topContainerHeading: {
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19.81,
    color: "rgba(255, 255, 255, 1)",
    marginBottom: 4,
  },
  topContainerSubHeading: {
    color: "rgba(255, 255, 255, 0.8)",
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 18,
  },
  topContainerSubHeadingMuted: {
    color: "rgba(255, 255, 255, 0.5)",
    fontFamily: "Gilroy-Medium",
  },
  // dropdown arrow
  downArrow: {
    width: 24,
    height: 24,
    justifyContent: "flex-end",
    marginTop: "auto",
    marginLeft: "auto",
    marginBottom: 7.2,
  },
});
