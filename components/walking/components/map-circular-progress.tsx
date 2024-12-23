import { View, StyleSheet } from "react-native";
import React from "react";
import Svg, { Circle } from "react-native-svg";
import CustomText from "@/components/custom-text";
import { icons } from "@/constants";

interface MapCircularProgressProps {
  score: number; // Progress out of 100
  size?: number; // Diameter of the outer circle
  strokeWidth?: number; // Width of the progress bar
  progressColor?: string; // Color of the progress bar
  backgroundColor?: string; // Color of the outer background circle
  innerCircleColor?: string; // Color of the inner circle
  gapColor?: string; // Color of the gap between progress and track
  gapWidth?: number; // Width of the gap
}

const MapCircularProgress: React.FC<MapCircularProgressProps> = ({
  score = 1,
  size = 178,
  strokeWidth = 18,
  progressColor = "#4740CA",
  backgroundColor = "transparent",
  innerCircleColor = "transparent",
  gapColor = "transparent",
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
      {/* progress snake */}
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
            backgroundColor: innerCircleColor,
          },
        ]}
      >
        <View style={styles.progresslabel}>
          <icons.FootprintBlack />
          <CustomText
            fontFamily="Gilroy-SemiBold"
            fontSize={14}
            lineHeight={17.15}
            color="#000"
          >
            STEPS
          </CustomText>
        </View>

        <CustomText
          fontFamily="Gilroy-Bold"
          fontSize={48}
          lineHeight={59.42}
          color="#4740CA"
        >
          1687
        </CustomText>
        <CustomText
          fontFamily="Gilroy-Bold"
          fontSize={14}
          lineHeight={17.33}
          color="#000"
        >
          OF 1800
        </CustomText>
      </View>
    </View>
  );
};

export default MapCircularProgress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  //
  // inner circle
  innerCircle: {
    position: "absolute",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  // label
  progresslabel: {
    maxHeight: 24.57,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 3.5,
    backgroundColor: "rgba(235, 234, 255, 1)", // #EBEAFF
    borderRadius: 6.99,
    paddingHorizontal: 13,
    paddingVertical: 4,
  },
});
