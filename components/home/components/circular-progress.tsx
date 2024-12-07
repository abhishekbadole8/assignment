import { icons } from "@/constants";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";

interface CircularProgressProps {
  score: number; // Progress out of 100
  size?: number; // Diameter of the outer circle
  strokeWidth?: number; // Width of the progress bar
  progressColor?: string; // Color of the progress bar
  backgroundColor?: string; // Color of the outer background circle
  innerCircleColor?: string; // Color of the inner circle
  gapColor?: string; // Color of the gap between progress and track
  gapWidth?: number; // Width of the gap
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  score,
  size = 174,
  strokeWidth = 18,
  progressColor = "#FFFFFF",
  backgroundColor = "rgba(0, 0, 0, 0.2)",
  innerCircleColor = "#000000",
  gapColor = "#FFFFFF",
  gapWidth = 5,
}) => {
  const outerRadius = size / 2; // Outer radius
  const adjustedRadius = outerRadius - strokeWidth / 2; // Radius for progress circle
  const gapAdjustedRadius = adjustedRadius - gapWidth / 2; // Radius adjusted for the gap

  const circumference = 2 * Math.PI * gapAdjustedRadius; // Circumference of the circle

  const adjustedScore = Math.max(0, Math.min(100, score)); // Ensure score stays within 0–100
  const progressLength = (adjustedScore / 100) * circumference; // Length of the progress

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        {/* Background Track */}
        <Circle
          cx={outerRadius}
          cy={outerRadius}
          r={adjustedRadius}
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          fill="transparent"
        />

        {/* Progress Path */}
        <Circle
          cx={outerRadius}
          cy={outerRadius}
          r={gapAdjustedRadius}
          stroke={progressColor}
          strokeWidth={strokeWidth - gapWidth}
          fill="transparent"
          strokeDasharray={`${progressLength} ${
            circumference - progressLength
          }`}
          strokeDashoffset={0}
          strokeLinecap="round"
          transform={`rotate(-0 ${outerRadius} ${outerRadius})`}
        />
      </Svg>

      {/* Inner Circle */}
      <View
        style={[
          styles.innerCircle,
          {
            width: (outerRadius - strokeWidth) * 2, // 8 margin need
            height: (outerRadius - strokeWidth) * 2, // 8 margin need
            borderRadius: outerRadius - strokeWidth,
            borderWidth: 4,
            borderColor: "rgba(0, 0, 0, 0.2)",
            backgroundColor: innerCircleColor,
            // padding:50
          },
        ]}
      >
        <Text style={styles.label}>HEALTH SCORE</Text>
        <Text style={styles.score}>{score}</Text>
        <View style={styles.status}>
          <icons.ArrowTrendUpBlue style={styles.icon} />
          <Text style={styles.statusText}>
            {score >= 80 ? "Excellent" : score >= 50 ? "Improving" : "Low"}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerCircle: {
    position: "absolute",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: "rgba(246, 246, 246, 1)", //#F6F6F6
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 12.25,
    textAlign: "center",
  },
  score: {
    color: "rgba(245, 245, 245, 1)", //#F5F5F5
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 51.43,
    lineHeight: 63.67,
    letterSpacing: -0.03,
  },
  status: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  statusText: {
    color: "rgba(94, 175, 255, 1)", //#5EAFFF
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 14.7,
  },
  icon: {
    width: 15.82,
    height: 15.82,
    resizeMode: "contain",
  },
});

export default CircularProgress;
