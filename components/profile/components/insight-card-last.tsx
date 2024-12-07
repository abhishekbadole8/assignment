import { View, Text, StyleSheet, Platform } from "react-native";
import React from "react";
import { icons } from "@/constants";
import { Colors } from "@/constants/Colors";

const LAST_CARD_WIDTH = 163;
const LAST_CARD_HEIGHT = 163 + 6; // Need to check on addition

const InsightCardLast = () => {
  return (
    <View style={styles.cardEndContainer}>
      <Text style={styles.cardEndHeading}>Explore all insights</Text>

      <View style={styles.cardEndIconContainer}>
        <icons.ArrowRightBlack />
      </View>
    </View>
  );
};

export default InsightCardLast;

const styles = StyleSheet.create({
  cardEndContainer: {
    width: LAST_CARD_WIDTH,
    height: LAST_CARD_HEIGHT ,
    backgroundColor: "#111",
    borderRadius: 12,
    paddingHorizontal: 32,
    paddingVertical: 13,
    alignItems: "center",
    justifyContent: "center",

    // shadow
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 4, height: 0 },
        shadowOpacity: 0.75,
        shadowRadius: 15,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  cardEndHeading: {
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 20,
    lineHeight: 24.76,
    letterSpacing: 0.03,
    textAlign:"center"
  },
  cardEndIconContainer: {
    position: "absolute",
    borderRadius: 100,
    backgroundColor: Colors.white,
    bottom: 16,
    right: 16,
    width: 23.85,
    height: 23.85,
    alignItems: "center",
    justifyContent: "center",
  },
});
