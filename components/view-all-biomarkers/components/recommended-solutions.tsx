import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import CustomButton from "@/components/custom-button";
import RecommendedSolutionCard from "./recommended-solution-card";

type Solution = {
  title: string;
  description: string;
  impact: number;
  evidence: number;
  time: string;
};


const solutions: Solution[] = [
  {
    title: "Vitamin D3 supplementation",
    description: "take 5000 IU of Vitamin D3 with K2 daily with meals",
    impact: 90,
    evidence: 98,
    time: "4-6w",
  },
  {
    title: "Sleep optimization protocol",
    description: "Implement research backed sleep improvement technique",
    impact: 82,
    evidence: 90,
    time: "2-4w",
  },
];

const RecommendedSolutions = () => {
  return (
    <View style={styles.solutionContainer}>
      <Text style={styles.solutionHeader}>RECOMMENDED SOLUTION</Text>

      {solutions.map((solution, index) => (
        <RecommendedSolutionCard key={index} solution={solution}/>
      ))}
    </View>
  );
};

export default RecommendedSolutions;

const styles = StyleSheet.create({
  solutionContainer: {
    flex: 1,
    marginBottom: 38,
  },
  // title
  solutionHeader: {
    color: "rgba(56, 56, 56, 1)",
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 17.15,
    marginBottom: 12,
  },
  //
  //
});
