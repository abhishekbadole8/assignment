import {
  View,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import CustomButton from "@/components/custom-button";
import { Colors } from "@/constants/Colors";
import { icons } from "@/constants";
import { LineChart } from "react-native-gifted-charts";
import { LinearGradient } from "expo-linear-gradient";
import { chartData1 } from "@/constants/chart";
import { router, useNavigation } from "expo-router";

type AnalyticsItem = {
  id: string;
  title: string;
  value: string;
  icon: any; // Icon component type
};

const analytics: AnalyticsItem[] = [
  { id: "1", title: "VITALS", value: "92%", icon: icons.ArrowTrendUpWhite },
  { id: "2", title: "STRESS", value: "low", icon: icons.ArrowTrendDownWhite },
  { id: "3", title: "ENERGY", value: "high", icon: icons.ArrowTrendUpWhite },
];

const { width } = Dimensions.get("window");
const chartWidth = width - 34;

const HealthScoreCard: React.FC = () => {
  const navigation = useNavigation();

  const handleFullScreenClick = () => {
    router.push("/(screen)/details");
  };

  return (
    <LinearGradient
      colors={["rgba(29, 173, 115, 1)", "rgba(5, 150, 105, 1)"]}
      start={[0.25, 0]}
      end={[0.67, 1]}
      style={styles.healthScoreCard}
    >
      {/* Area Chart */}
      <View style={styles.areaChartContainer}>
        <LineChart
          disableScroll
          parentWidth={chartWidth}
          startOpacity={0.1}
          endOpacity={0.2}
          color="rgba(217, 217, 217, 1)"
          areaChart
          curved
          hideDataPoints
          hideAxesAndRules
          data={chartData1}
          adjustToWidth
          hideYAxisText
          initialSpacing={0}
          height={83}
          thickness={1}
          yAxisThickness={0}
          yAxisLabelWidth={0}
          xAxisThickness={0}
          xAxisLabelsHeight={0}
        />
      </View>

      {/* Wrapper */}

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
        <TouchableOpacity onPress={handleFullScreenClick}>
          <icons.FullScreen />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default HealthScoreCard;

const styles = StyleSheet.create({
  healthScoreCard: {
    position: "relative",
    borderRadius: 12,
    marginHorizontal: 16,
    paddingBottom: 12,
    backgroundColor: "rgba(5, 150, 105, 1)",
    marginBottom: 24,
    marginTop: 16,

    // shadow
    ...Platform.select({
      ios: {
        shadowColor: "rgba(0, 0, 0, 0.35)",
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
    marginBottom: 51,
    position: "relative",
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
  // Area charts
  areaChartContainer: {
    position: "absolute",
    top: 41,
    left: 0,
    width: "100%",
  },
  //
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
