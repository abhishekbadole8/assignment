import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { SCREEN_WIDTH } from "@/constants/layout";
import { Colors } from "@/constants/Colors";
import { icons } from "@/constants";

const CARD_WIDTH = 283;
const CARD_HEIGHT = 163;
const LABEL_HEIGHT = 32;

interface Insight {
  title?: string;
  tip?: string;
  insight1: {
    title: string;
    value: string;
    icon: any;
  };
  insight2: {
    title: string;
    value: string;
    icon: any;
  };
  backgroundColor?: string;
}

interface InsightCardProps {
  insight: Insight;
}

const InsightCard: React.FC<InsightCardProps> = ({ insight }) => {
  const { title, insight1, insight2, tip } = insight;

  return (
    <View style={styles.cardContainer}>
      {/* Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Levels Section */}
      <View style={styles.levelsContainer}>
        {/* Stress Level */}
        <View style={styles.levelBlock}>
          <Text style={styles.levelTitle}>{insight1.title}</Text>
          <View style={styles.levelValueContainer}>
            <Text style={styles.levelValue}>
              {insight1.value}
              <Text style={styles.percentage}>%</Text>
            </Text>
            <insight1.icon />
          </View>
        </View>

        {/* Energy Level */}
        <View style={[styles.levelBlock, styles.levelRight]}>
          <Text style={styles.levelTitle}>{insight2.title}</Text>
          <View style={styles.levelValueContainer}>
            <Text style={styles.levelValue}>
              {insight2.value}<Text style={styles.percentage}>%</Text>
            </Text>
            <insight1.icon />
          </View>
        </View>
      </View>

      {/* Tip Section */}
      <View style={styles.tipContainer}>
        <icons.LightBulb />
        <Text style={styles.tipText}>{tip}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    overflow: "hidden",
    width: CARD_WIDTH,
    // height: CARD_HEIGHT,
    borderRadius: 12,
    backgroundColor: "#435CBF",
    paddingHorizontal: 12,
    paddingVertical: 13,
    position: "relative",
  },
  title: {
    color: "rgba(248, 246, 247, 1)",
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 12,
  },
  // Level cont
  levelsContainer: {
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    borderRadius: 8,
    paddingVertical: 8,
    marginBottom: LABEL_HEIGHT - 6,
  },
  levelBlock: {
    flex: 1,
    alignItems: "center",
    borderRightColor: "rgba(255,255,255,0.2)",
    borderRightWidth: 0.5,
    paddingVertical: 5,
  },
  levelRight: {
    borderRightWidth: 0,
  },
  levelTitle: {
    color: "rgba(251, 251, 251, 0.7)",
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 14.7,
  },
  levelValueContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  levelValue: {
    color: Colors.white,
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
  //

  // tip
  tipContainer: {
    position: "absolute",
    width: CARD_WIDTH,
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    backgroundColor: "rgba(204, 214, 251, 1)",
    paddingHorizontal: 9,
    paddingVertical: 4,
  },
  tipText: {
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 18,
  },
});

export default InsightCard;
