import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import ViewBiomarkerCard from "@/components/view-all-biomarkers/components/view-biomarker-card";
import RecommendedSolutions from "@/components/view-all-biomarkers/components/recommended-solutions";
import BiomarkerInteractionGuide from "@/components/view-all-biomarkers/components/biomarker-interaction-guide";
import { SafeAreaView } from "react-native-safe-area-context";

const ViewAllBiomarkers = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.innerContainer}>
          {/* View bio card */}
          <ViewBiomarkerCard />

          {/* Recommended Solution */}
          <RecommendedSolutions />
        </View>

        {/* Interaction Guide */}
        <BiomarkerInteractionGuide />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 12,
  },
  //
  innerContainer: {
    paddingHorizontal: 16,
  },
});

export default ViewAllBiomarkers;
