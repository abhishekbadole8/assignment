import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { icons } from "@/constants";

const nearbyItems: string[] = [
  "Well-lit pedestrian paths",
  "Busy intersection at Krishna Street - use crossing",
  "Security camera along main route",
  "Emergency contacts accessible",
];

const WhatsNearby = () => {
  return (
    <View style={styles.interactionContainer}>
      <View style={styles.interactionHeader}>
        <icons.RouteSafety />
        <Text style={styles.interactionTitle}>What’s nearby</Text>
      </View>

      <View style={styles.safetyList}>
        {nearbyItems.map((item, index) => (
          <View style={styles.safety} key={index}>
            <View style={styles.bulletPoints} />
            <Text style={styles.interactionText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default WhatsNearby;

const styles = StyleSheet.create({
  interactionContainer: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: "rgba(238, 238, 238, 1)", // #EEEEEE
  },
  interactionHeader: {
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  interactionTitle: {
    color: "rgba(0, 0, 0, 0.8)",
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19.81,
    letterSpacing: 0.03,
  },
  //
  // list
  safetyList: {
    paddingHorizontal: 8,
  },
  safety: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  bulletPoints: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: 4,
    height: 4,
    borderRadius: "50%",
  },
  interactionText: {
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "Gilroy-Semibold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 20,
  },
});
