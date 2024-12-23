import { View, StyleSheet } from "react-native";
import React from "react";
import CustomText from "@/components/custom-text";

const GoalCard = () => {
  return (
    <View style={styles.goalCardContainer}>
      {/* Header */}
      <View style={styles.goalCardHeader}>
        <CustomText fontFamily="Gilroy-Bold">Goal</CustomText>
      </View>

      {/* Body */}
      <View style={styles.goalCardBody}>
        <CustomText fontFamily="Gilroy-Bold" fontSize={24} textAlign="center">
          1800
        </CustomText>
        <CustomText
          fontFamily="Gilroy-SemiBold"
          fontSize={12}
          textAlign="center"
          color="#5F5F5F"
        >
          STEPS
        </CustomText>
      </View>

      {/* Footer  */}
      <View style={styles.goalCardFooter}>
        <CustomText
          fontFamily="Gilroy-SemiBold"
          fontSize={14}
          color="rgba(0, 0, 0, 0.5)"
          lineHeight={20}
        >
          Once you start, we’ll provide you with steps . counter and map view.
          let’s get moving!
        </CustomText>
      </View>
    </View>
  );
};

export default GoalCard;

const styles = StyleSheet.create({
  goalCardContainer: {
    borderWidth: 0.4,
    borderColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 12,
    marginBottom: 16,
  },
  //
  // header
  goalCardHeader: {
    padding: 12,
  },
  goalCardBody: {
    backgroundColor: "rgba(238, 238, 238, 1)",
    paddingTop: 10,
    paddingBottom: 8,
    borderTopWidth: 0.4,
    borderBottomWidth: 0.4,
    borderColor: "rgba(0, 0, 0, 0.5)",
  },
  goalCardFooter: {
    padding: 12,
  },
});
