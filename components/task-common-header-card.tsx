import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { icons } from "@/constants";
import CustomText from "./custom-text";

const TaskCommonHeaderCard = () => {
  return (
    <View style={styles.headerContentContainer}>
      {/* title content */}
      <View style={styles.cardTitleContainer}>
        <Text style={styles.cardTitle}>Afternoon walk</Text>

        <View style={styles.cardFooterInfo}>
          <icons.GreyClock />
          <Text style={styles.mutedInfoText}>now</Text>
          <View style={styles.mutedDot} />
          <Text style={styles.mutedInfoText}>10mins</Text>
          <View style={styles.mutedDot} />
          <Text style={styles.mutedInfoText}>outdoor</Text>
        </View>
      </View>

      {/* weather block */}
      <View style={styles.weatherBlock}>
        <icons.SunOutlined style={{ fontSize: 14, width: 14, height: 14 }} />
        <CustomText
          fontFamily="Gilroy-SemiBold"
          fontSize={14}
          letterSpacing={0.03}
          color="#fff"
        >
          28°C
        </CustomText>
      </View>
    </View>
  );
};

export default TaskCommonHeaderCard;

const styles = StyleSheet.create({
  headerContentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#4740CA",
    paddingHorizontal: 16,
  },
  // title content
  cardTitleContainer: {
    paddingVertical: 12,
  },
  cardTitle: {
    color: "#fff",
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 20,
    lineHeight: 24.76,
    letterSpacing: 0.3,
    marginBottom: 2,
  },
  //
  cardFooterInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  mutedDot: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    width: 3,
    height: 3,
    borderRadius: "50%",
  },
  mutedInfoText: {
    color: "rgba(255, 255, 255, 0.7)",
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 18,
  },
  //
  // weather block
  weatherBlock: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: "rgba(64, 58, 182, 1)", // #403AB6
  },
  //
});
