import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import ViewBiomarkerCard from "@/components/view-all-biomarkers/components/view-biomarker-card";
import RecommendedSolutions from "@/components/view-all-biomarkers/components/recommended-solutions";
import BiomarkerInteractionGuide from "@/components/view-all-biomarkers/components/biomarker-interaction-guide";

const ViewAllBiomarkers = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{ paddingHorizontal: 16 }}>
        {/* View bio card */}
        <ViewBiomarkerCard />

        {/* Recommended Solution */}
        <RecommendedSolutions />
      </View>

      {/* Interaction Guide */}
      <BiomarkerInteractionGuide />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 12,
  },
  //
});

export default ViewAllBiomarkers;
