import { View, Text, StyleSheet, Platform } from "react-native";
import React from "react";
import CustomButton from "@/components/custom-button";

type Solution = {
  title: string;
  description: string;
  impact: number;
  evidence: number;
  time: string;
};

const RecommendedSolutionCard = ({ solution }: { solution: Solution }) => {
  return (
    <View style={styles.solutionCard}>
      <View style={styles.solutionCardHeader}>
        <Text style={styles.solutionTitle}>{solution.title}</Text>
        <Text style={styles.solutionDescription}>{solution.description}</Text>
      </View>

      <View style={styles.solutionCardBody}>
        <Text style={styles.solutionBodyText}>IMPACT: {solution.impact}%</Text>
        <Text style={styles.solutionBodyText}>
          EVIDENCE: {solution.evidence}%
        </Text>
        <Text style={styles.solutionBodyText}>TIME: {solution.time}</Text>
      </View>

      <View style={styles.solutionCardFooter}>
        <CustomButton
          title="learn more"
          handlePress={() => {}}
          containerStyles={{ backgroundColor: "transparent" }}
          textStyles={{ color: "rgba(0, 0, 0, 1)" }}
        />
        <CustomButton title="add to routine" handlePress={() => {}} />
      </View>
    </View>
  );
};

export default RecommendedSolutionCard;

const styles = StyleSheet.create({
  //
  solutionCard: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 12,
    borderWidth: 0.4,
    borderColor: "rgba(0, 0, 0, 0.18)",
    marginBottom: 12,
    overflow: "hidden",

    // shadow
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 4.21,
          height: 0,
        },
        shadowOpacity: 0.09,
        shadowRadius: 15.77,
      },
      android: {
        elevation: 4.21,
      },
    }),
  },
  //
  //
  solutionCardHeader: {
    padding: 20,
    paddingBottom: 11.56,
  },
  solutionTitle: {
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 20,
    lineHeight: 24.76,
  },
  solutionDescription: {
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 18,
  },
  //
  solutionDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    fontSize: 14,
    color: "#6b7280",
  },
  //
  // body
  solutionCardBody: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    flexDirection: "row",
    justifyContent: "center",
    gap: 25,
    backgroundColor: "rgba(67, 92, 191, 1)",
  },
  solutionBodyText: {
    color: "rgba(251, 251, 251, 0.7)",
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 14.7,
  },
  //
  solutionCardFooter: {
    flexDirection: "row",
    gap: 16,
    paddingTop: 12,
    paddingBottom: 8,
    paddingHorizontal: 12,
  },
});
