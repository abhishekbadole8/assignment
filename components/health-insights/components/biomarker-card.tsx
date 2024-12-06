import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CustomButton from "@/components/custom-button";
import { Colors } from "@/constants/Colors";

interface BioMarker {
  title: string;
  id: string;
  score: string;
  color: string;
}

const bioMarkerTracked: BioMarker[] = [
  {
    title: "optimal",
    id: "1",
    score: "68",
    color: "rgba(15, 159, 109, 1)",
  },
  {
    title: "high risk",
    id: "2",
    score: "5",
    color: "rgba(222, 65, 92, 1)",
  },
  {
    title: "moderate",
    id: "3",
    score: "7",
    color: "rgba(255, 165, 31, 1)",
  },
];

const BiomarkerCard = () => {
  return (
    <View style={styles.biomarkerCard}>
      {/* header */}
      <View style={styles.biomarkerCardHeader}>
        <Text style={styles.titleNumber}>80</Text>
        <Text style={styles.subTitleText}>Active Biomarker {"\n"}tracked</Text>
      </View>
      {/* body */}
      <View style={styles.biomarkerCardBody}>
        {bioMarkerTracked.map(({ id, score, title, color }, index) => (
          <View style={styles.biomarkerCardBodyLabels} key={id}>
            {index > 0 && <Text>•</Text>}
            <Text
              style={[styles.biomarkerCardBodyLabelsText, { color: color }]}
            >
              {score} {title}
            </Text>
          </View>
        ))}
      </View>
      {/* footer */}
      <CustomButton
        title="view all Biomarkers"
        handlePress={() => {}}
        containerStyles={{ margin: 12 }}
        textStyles={Colors.white}
      />
    </View>
  );
};

export default BiomarkerCard;

const styles = StyleSheet.create({
  // card
  biomarkerCard: {
    borderRadius: 12,
    borderWidth: 0.4,
    borderColor: "rgba(76, 72, 195, 0.7)",
    backgroundColor: "rgba(76, 72, 195, 1)",
    marginHorizontal: 16,
    marginBottom: 18,
    // Shadow for iOS
    shadowColor: "rgba(76, 72, 195, 0.6)",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    // Shadow for Android
    elevation: 10,
  },
  // header
  biomarkerCardHeader: {
    marginTop: 12,
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  //
  titleNumber: {
    color: Colors.white,
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 48,
    lineHeight: 59.42,
    letterSpacing: -0.03,
  },
  subTitleText: {
    color: Colors.white,
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19.81,
    letterSpacing: -0.03,
    marginLeft: 8,
  },
  // body
  biomarkerCardBody: {
    backgroundColor: "rgba(247, 247, 247, 1)",
    flexDirection: "row",
    paddingVertical: 14,
    paddingHorizontal: 23,
  },
  biomarkerCardBodyLabels: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginRight: 10,
  },

  biomarkerCardBodyLabelsText: {
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 14,
    // lineHeight: 11,
  },
  //
  //footer
  //
  //
});
