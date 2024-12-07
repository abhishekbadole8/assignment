import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import BiomarkerCard from "@/components/health-insights/components/biomarker-card";
import { icons } from "@/constants";
import { assessedAreasData } from "@/constants/data";
import AssessedArea from "@/components/health-insights/components/assessed-area";
import { router } from "expo-router";

const HealthInsights = () => {
  const [openAreaId, setOpenAreaId] = useState<string | null>("2");

  const toggleAccordion = (id: string) => {
    setOpenAreaId(openAreaId === id ? null : id);
  };

  const handleNavigation = (id: string)=>{
    router.push('/(screen)/view-all-biomarkers')
  }

  return (
    <ScrollView style={styles.container}>
      <BiomarkerCard />

      {/* heading */}
      <View style={styles.testPendingContainer}>
        <View style={styles.testPendingLeft}>
          <View style={styles.iconContainer}>
            <icons.Funnel />
          </View>
          <Text style={styles.testPendingTitle}>
            <Text style={styles.testPendingSubTitle}>3 </Text>
            recommended tests pending
          </Text>
        </View>
        <icons.ArrowRightBlack style={{ marginRight: 7 }} />
      </View>

      {/* assessed area container */}
      <View style={styles.assesssedAreasContainer}>
        {/* <View style={styles.assesssedAreaHeader}></View> */}
        <Text style={styles.assesssedAreaHeading}>Assessed areas</Text>

        {assessedAreasData.map((area) => (
          <AssessedArea
            key={area.id}
            area={area}
            openAreaId={openAreaId}
            toggleAccordion={toggleAccordion}
            handleNavigation={handleNavigation}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default HealthInsights;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 27,
  },

  // Test pending cont
  testPendingContainer: {
    padding: 16,
    backgroundColor: "rgba(238, 238, 238, 1)",
    borderWidth: 0.4,
    borderColor: "rgba(0, 0, 0, 0.1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  testPendingLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  iconContainer: {},
  testPendingTitle: {
    color: "rgba(61, 61, 61, 1)",
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19.81,
  },
  testPendingSubTitle: {
    fontSize: 14,
    lineHeight: 17.33,
  },
  //

  // assessed area
  assesssedAreasContainer: {
    borderRadius: 12,
    borderWidth: 0.4,
    borderColor: "rgba(0, 0, 0, 0.5)",
    marginHorizontal: 16,
    backgroundColor: "rgba(245, 245, 245, 1)",
    marginBottom: 48,
  },
  assesssedAreaHeading: {
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19.81,
    margin: 12,
  },
  //
});
