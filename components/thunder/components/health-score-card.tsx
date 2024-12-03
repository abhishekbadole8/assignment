import { View, Text, StyleSheet, Platform, Dimensions } from "react-native";
import React from "react";
import CustomButton from "@/components/custom-button";
import { Colors } from "@/constants/Colors";
import { icons } from "@/constants";
import { LineChart } from "react-native-gifted-charts";

type AnalyticsItem = {
  id: number;
  title: string;
  value: string;
  icon: any; // Icon component type
};

const { width } = Dimensions.get("window");

const analytics: AnalyticsItem[] = [
  { id: 1, title: "VITALS", value: "92%", icon: icons.ArrowTrendUpWhite },
  { id: 2, title: "STRESS", value: "low", icon: icons.ArrowTrendDownWhite },
  { id: 3, title: "ENERGY", value: "high", icon: icons.ArrowTrendUpWhite },
];

const chartData = [
  { value: 0 },
  { value: 10 },
  { value: 13 },
  { value: 13 },
  { value: 11 },
  { value: 33 },
  { value: 26 },
  { value: 40 },
];
const chartWidth = width - 40;

const HealthScoreCard: React.FC = () => {
  return (
    <View style={styles.healthScoreCard}>
      {/* Content */}
      <View style={styles.healthScore}>
        {/* Score */}
        <Text style={styles.titleNumber}>78</Text>

        <View>
          <Text style={styles.subTitleText}>My Health Score</Text>

          <View style={styles.improveSteadilyContainer}>
            <icons.ArrowTrendUpWhite style={styles.growthIcon} />
            <Text style={styles.improveSteadilyText}>improving steadily</Text>
          </View>
        </View>
      </View>

      <View style={styles.areaChartContainer}>
        <LineChart
          disableScroll
          // parentWidth={chartWidth}
          startOpacity={0.1}
          endOpacity={0.2}
          color="rgba(255, 255, 255, 0.6)"
          areaChart
          curved
          hideDataPoints1
          hideAxesAndRules
          data={chartData}
        />
      </View>
      <View style={styles.analyticsContainer}>
        {analytics.map((info, index) => (
          <View
            key={info.id}
            style={[
              styles.infoBlock,
              analytics.length - 1 === index && { borderRightWidth: 0 },
            ]}
          >
            <View style={styles.infoContentContainer}>
              <Text style={styles.infoTitle}>{info.title}</Text>
              <View style={styles.infoCardValueContainer}>
                <Text style={styles.infoValue}>{info.value}</Text>
                <info.icon />
              </View>
            </View>
          </View>
        ))}
      </View>

      <CustomButton
        title="see analytics"
        handlePress={() => {}}
        containerStyles={{ marginHorizontal: 12 }}
      />
      <View style={styles.fullScreenIconContainer}>
        <icons.FullScreen />
      </View>
    </View>
  );
};

export default HealthScoreCard;

const styles = StyleSheet.create({
  healthScoreCard: {
    borderRadius: 12,
    marginHorizontal: 20,
    paddingBottom: 12,
    backgroundColor: "rgba(5, 150, 105, 1)",
    marginBottom: 24,

    // shadow
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.35,
        shadowRadius: 6,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  healthScore: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 16,
    marginLeft: 24,
    marginBottom: 49,
  },

  titleNumber: {
    color: Colors.white,
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 48,
    lineHeight: 59.42,
    letterSpacing: -0.03,
  },

  // sub title text
  subTitleText: {
    color: Colors.white,
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19.81,
    letterSpacing: -0.03,
    marginBottom: 2,
  },

  // Imporve steadily
  improveSteadilyContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  growthIcon: {
    color: "#fff",
    tintColor: "#fff",
  },
  improveSteadilyText: {
    color: Colors.white,
    fontFamily: "Gilroy-Medium",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 16,
  },

  //

  areaChartContainer: {
    position: "absolute",
    top: 41,
    left: 0,
    height: 83,
    width: "100%",
    borderWidth:1
  },

  //

  // Analytics
  analyticsContainer: {
    flexDirection: "row",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    marginBottom: 8,
    paddingVertical: 3,
  },
  infoBlock: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 0.5,
    borderColor: "rgba(255, 255, 255, 0.2)",
    paddingVertical: 3,
  },
  infoContentContainer: {
    alignItems: "flex-start",
  },
  infoTitle: {
    color: "rgba(255, 255, 255, 0.6)",
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 11.12,
    lineHeight: 13.62,
  },
  infoCardValueContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoValue: {
    color: Colors.white,
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 20,
    lineHeight: 24.76,
  },

  // full screen icon
  fullScreenIconContainer: {
    position: "absolute",
    top: 16,
    right: 16,
  },
});
