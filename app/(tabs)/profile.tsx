import { View, StyleSheet, ScrollView } from "react-native";
import React from "react";
import HealthScoreCard from "@/components/profile/components/health-score-card";
import PersonalisedInsights from "@/components/profile/components/personalised-insights";
import HabitStacks from "@/components/profile/components/habit-stacks";

const Thunder = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <HealthScoreCard />

        <PersonalisedInsights />

        <HabitStacks />
      </ScrollView>
    </View>
  );
};

export default Thunder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 16,
    // marginBottom: 38,
  },
});
