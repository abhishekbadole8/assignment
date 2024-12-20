import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { icons } from "@/constants";

const HeaderCard = () => {
  return (
    <View style={styles.headerCard}>
      {/* title content */}
      <View style={styles.cardTitleContainer}>
        <Text style={styles.cardTitle}>Afternoon walk</Text>

        <View style={styles.cardFooterInfo}>
          <icons.BlackClock />
          <Text style={styles.mutedInfoText}>now</Text>
          <View style={styles.mutedDot} />
          <Text style={styles.mutedInfoText}>10mins</Text>
          <View style={styles.mutedDot} />
          <Text style={styles.mutedInfoText}>outdoor</Text>
        </View>
      </View>

      {/* state box */}
      <BlurView intensity={24} style={styles.statsContainer}>
        <View style={styles.stats}>
          <Text style={styles.semiBoldMutedText}>IMPACT:</Text>

          <View style={styles.statsValues}>
            <Text style={styles.semiBoldText}>energy +15%</Text>
            <View style={styles.divider} />
            <Text style={styles.semiBoldText}>mood +25%</Text>
            <View style={styles.divider} />
            <Text style={styles.semiBoldText}>circulation +25%</Text>
          </View>
        </View>

        <Text style={styles.mutedText}>
          Boost energy & circulation. Improve focus for your necxt work session
        </Text>
      </BlurView>

      <View style={styles.cardFooter}>
        <icons.SunOutlined />
        <Text style={styles.mutedInfoText}>28°C - Perfect walking weather</Text>
      </View>
    </View>
  );
};

export default HeaderCard;

const styles = StyleSheet.create({
  headerCard: {
    backgroundColor: "#4740CA",
  },

  // Header text
  // title content
  cardTitleContainer: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#4740CA",
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
  // stat
  statsContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  stats: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 4,
    marginBottom: 8,
  },
  semiBoldMutedText: {
    color: "rgba(245, 245, 245, 0.6)",
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 14.7,
  },
  statsValues: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  mutedText: {
    color: "rgba(255, 255, 255, 0.5)",
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 18,
  },
  semiBoldText: {
    color: "rgba(245, 245, 245, 1)",
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 17.15,
  },
  divider: {
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 0.2,
    height: 13,
  },
  //
  // card footer
  cardFooter: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 13,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
});
