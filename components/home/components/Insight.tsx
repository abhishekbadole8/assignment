import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { icons } from "@/constants";
import { Colors } from "@/constants/Colors";

const Insight = () => {
  return (
    <View style={styles.insightContainer}>
      {/* header */}
      <View style={styles.insightHeader}>
        <View style={styles.iconWrapper}>
          <icons.Drop style={styles.icon} />
        </View>
        <Text style={styles.insightHeading}>
          Understand your cortisol pattern
        </Text>
      </View>

      <Text style={styles.insightInformation}>
        Learn how your cortisol levels are affecting your sleep qualtiy and what
        you can do about it
      </Text>

      {/* footer */}
      <View style={styles.insightFooter}>
        <Text style={styles.insightFooterText}>READ INSIGHTS</Text>
        <icons.ArrowRightBlack style={styles.icon} />
      </View>
    </View>
  );
};

export default Insight;

const styles = StyleSheet.create({
  insightContainer: {
    backgroundColor: "rgba(238, 238, 238, 1)", //#EEEEEE
    padding: 16,
    marginBottom: 24,
  },
  // header
  insightHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 12,
  },
  iconWrapper: {
    width: 32,
    height: 32,
    backgroundColor: "rgba(41, 41, 41, 1)", //#292929
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    tintColor: Colors.white,
  },
  insightHeading: {
    color: Colors.text.secondary,
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 0.47,
  },
  //
  // content
  insightInformation: {
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "Gilroy-Medium",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 8,
  },
  //
  //footer
  insightFooter: {
    flexDirection: "row",
    alignItems: "center",
  },
  insightFooterText: {
    color: Colors.black,
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 14.7,
    marginRight: 10.67,
  },
  //
});
