import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import ViewBiomarkerCard from "@/components/view-all-biomarkers/components/view-biomarker-card";

const ViewAllBiomarkers = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{ paddingHorizontal: 16 }}>
        <ViewBiomarkerCard />

        {/* Recommended Solution */}
        <View style={styles.solutionContainer}>
          <Text style={styles.solutionHeader}>Recommended Solution</Text>

          {[
            {
              title: "Vitamin D3 supplementation",
              description:
                "take 5000 IU of Vitamin D3 with K2 daily with meals",
              impact: 90,
              evidence: 98,
              time: "4-6w",
            },
            {
              title: "Sleep optimization protocol",
              description:
                "Implement research backed sleep improvement technique",
              impact: 82,
              evidence: 90,
              time: "2-4w",
            },
          ].map((solution, index) => (
            <View key={index} style={styles.solutionCard}>
              <Text style={styles.solutionTitle}>{solution.title}</Text>
              <Text style={styles.solutionDescription}>
                {solution.description}
              </Text>
              <View style={styles.solutionDetails}>
                <Text>IMPACT: {solution.impact}%</Text>
                <Text>EVIDENCE: {solution.evidence}%</Text>
                <Text>TIME: {solution.time}</Text>
              </View>

              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.learnMoreButton}>
                  <Text style={styles.learnMoreText}>Learn more</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addToRoutineButton}>
                  <Text style={styles.addToRoutineText}>Add to routine</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

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
  solutionContainer: {
    marginBottom: 24,
  },
  solutionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#374151",
    marginBottom: 16,
  },
  solutionCard: {
    padding: 16,
    backgroundColor: "#f3f4f6",
    borderRadius: 8,
    marginBottom: 16,
  },
  solutionTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#374151",
  },
  solutionDescription: {
    fontSize: 14,
    color: "#6b7280",
  },
  solutionDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    fontSize: 14,
    color: "#6b7280",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  learnMoreButton: {
    flex: 1,
    backgroundColor: "#3b82f6",
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
  },
  learnMoreText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "500",
  },
  addToRoutineButton: {
    flex: 1,
    backgroundColor: "#e5e7eb",
    borderRadius: 8,
    padding: 8,
  },
  addToRoutineText: {
    textAlign: "center",
    color: "#374151",
    fontWeight: "500",
  },
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
