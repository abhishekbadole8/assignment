import { View, Text, StyleSheet } from "react-native";
import React from "react";

const biomarkers = [
  { name: "Vitamin D", value: "22 ng/mL", target: "30-50 ng/mL" },
  { name: "Deep Sleep", value: "22 ng/mL", target: "30-50 ng/mL" },
  { name: "Cortisol", value: "22 ng/mL", target: "30-50 ng/mL" },
  { name: "HRV", value: "22 ng/mL", target: "30-50 ng/mL" },
];

const ViewBiomarkerCard = () => {
  return (
    <View style={styles.headerCard}>
        {/* header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Chronic fatigue</Text>
        
        <Text style={styles.headerSubtitle}>
          4 Key Biomarkers affected shown in below list
        </Text>
      </View>

      {/* Biomarker List */}
      <View style={styles.biomarkerList}>
        {biomarkers.map((biomarker, index) => (
          <View key={index} style={styles.biomarkerCard}>
            <View>
              <Text style={styles.biomarkerName}>{biomarker.name}</Text>
              <Text style={styles.biomarkerValue}>{biomarker.value}</Text>
              <Text style={styles.biomarkerTarget}>
                Target: {biomarker.target}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ViewBiomarkerCard;

const styles = StyleSheet.create({
  headerCard: {
    flex: 1,
    borderWidth: 0.4,
    borderColor: "rgba(0, 0, 0, 0.5)",
  },
  headerContainer: {
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ff4d4d",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#6b7280",
  },
  biomarkerList: {
    marginBottom: 24,
  },
  biomarkerCard: {
    padding: 16,
    backgroundColor: "#f3f4f6",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  biomarkerName: {
    fontSize: 16,
    fontWeight: "500",
    color: "#374151",
  },
  biomarkerValue: {
    fontSize: 14,
    color: "#6b7280",
  },
  biomarkerTarget: {
    fontSize: 12,
    color: "#9ca3af",
  },
});
