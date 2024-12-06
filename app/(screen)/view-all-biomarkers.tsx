import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import ViewBiomarkerCard from "@/components/view-all-biomarkers/components/view-biomarker-card";
import RecommendedSolutions from "@/components/view-all-biomarkers/components/recommended-solutions";

const ViewAllBiomarkers = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{ paddingHorizontal: 16 }}>
        {/* View bio card */}
        <ViewBiomarkerCard />

        {/* Recommended Solution */}
        <RecommendedSolutions />

        {/* Interaction Guide */}
        <View style={styles.interactionContainer}>
          <Text style={styles.interactionHeader}>
            Biomarker interaction guide
          </Text>
          <Text style={styles.interactionSubtitle}>
            See how your Biomarkers are interacting to affect energy levels.
          </Text>

          {[
            { biomarker: "VITAMIN D", interaction: "affects deep sleep" },
            { biomarker: "CORTISOL", interaction: "affects HRV" },
            { biomarker: "HRV", interaction: "affects stress" },
          ].map((interaction, index) => (
            <View key={index} style={styles.interactionRow}>
              <Text style={styles.interactionBiomarker}>
                {interaction.biomarker}
              </Text>
              <Text style={styles.interactionText}>
                {interaction.interaction}
              </Text>
            </View>
          ))}

          <TouchableOpacity style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>View all interaction</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  //
  interactionContainer: {
    padding: 16,
    backgroundColor: "#f3f4f6",
    borderRadius: 8,
  },
  interactionHeader: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#374151",
    marginBottom: 8,
  },
  interactionSubtitle: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 16,
  },
  interactionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  interactionBiomarker: {
    fontSize: 14,
    fontWeight: "500",
    color: "#374151",
  },
  interactionText: {
    fontSize: 14,
    color: "#6b7280",
  },
  viewAllButton: {
    marginTop: 16,
    backgroundColor: "#e5e7eb",
    borderRadius: 8,
    padding: 8,
  },
  viewAllText: {
    textAlign: "center",
    color: "#374151",
    fontWeight: "500",
  },
});

export default ViewAllBiomarkers;
