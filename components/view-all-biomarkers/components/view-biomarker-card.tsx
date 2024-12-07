import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { icons } from "@/constants";

type Biomarker = {
  name: string;
  value: string;
  target: string;
  icon: any;
};

const biomarkers: Biomarker[] = [
  {
    name: "VITAMIN D",
    value: "22 ng/mL",
    target: "30-50 ng/mL",
    icon: icons.BiomarkerSun,
  },
  {
    name: "DEEP SLEEP",
    value: "22 ng/mL",
    target: "30-50 ng/mL",
    icon: icons.BiomarkerMoon,
  },
  {
    name: "CORTISOL",
    value: "22 ng/mL",
    target: "30-50 ng/mL",
    icon: icons.BiomarkerCortisol,
  },
  {
    name: "HRV",
    value: "22 ng/mL",
    target: "30-50 ng/mL",
    icon: icons.BiomarkerHeart,
  },
];

const ViewBiomarkerCard = () => {
  return (
    <View style={styles.headerCard}>
      {/* header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Chronic fatigue</Text>
      </View>

      {/* sub header */}
      <View style={styles.headerSubContainer}>
        <Text style={styles.headerSubtitle}>
          4 Key Biomarkers affected{" "}
          <Text style={styles.headerSubtitle2}>shown in below list</Text>
        </Text>
      </View>

      {/* Biomarker List */}
      <View style={styles.biomarkerList}>
        {biomarkers.map((biomarker, index) => (
          <View key={index} style={styles.biomarkerCard}>
            {/* label */}
            <View style={styles.biomarkerTitleContainer}>
              <biomarker.icon />
              <Text style={styles.biomarkerTitle}>{biomarker.name}</Text>
            </View>

            {/* more */}
            <View style={styles.biomarkerMoreContainer}>
              <View style={styles.biomarkerMoreInsideContainer}>
                <Text style={styles.biomarkerValueBig}>22</Text>
                <Text style={styles.biomarkerValueSmall}>ng/mL</Text>
              </View>
              <View style={styles.verticalLine} />
              <Text style={styles.biomarkerTarget}>
                TARGET: {biomarker.target}
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
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 41,
    marginTop:12
  },
  //
  headerContainer: {
    backgroundColor: "rgba(255, 0, 42, 0.1)",
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  headerTitle: {
    color: "rgba(222, 65, 92, 1)",
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 20,
    lineHeight: 24.76,
  },
  //
  headerSubContainer: {
    backgroundColor: "rgba(222, 65, 92, 1)",
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  headerSubtitle: {
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 17.15,
  },
  headerSubtitle2: {
    color: "rgba(255, 255, 255, 0.7)",
  },
  //
  biomarkerList: {},
  biomarkerCard: {
    paddingBottom: 8,
    borderBottomWidth: 0.4,
    borderColor: "rgba(0, 0, 0, 0.5)",
  },
  biomarkerTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: 4,
    backgroundColor: "rgba(238, 238, 238, 1)",
    paddingTop: 7,
    paddingLeft: 12,
    paddingBottom: 5,
    paddingRight: 27,
    borderBottomRightRadius: 12,
    marginBottom: 5,
  },
  biomarkerTitle: {
    color: "rgba(56, 56, 56, 1)",
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 17.15,
  },
  //
  //
  biomarkerMoreContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 13,
    gap: 10,
  },
  biomarkerMoreInsideContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  biomarkerValueBig: {
    color: "rgba(56, 56, 56, 1)",
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 32,
    lineHeight: 39.62,
    letterSpacing: -0.03,
  },
  biomarkerValueSmall: {
    color: "rgba(56, 56, 56, 1)",
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 29.62,
    marginLeft: 4,
  },
  //
  verticalLine: {
    width: 0.4,
    backgroundColor: "rgba(0, 0, 0, 1)",
    height: "60%",
  },
  //
  biomarkerTarget: {
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 11.12,
    lineHeight: 13.62,
  },
  //
});
