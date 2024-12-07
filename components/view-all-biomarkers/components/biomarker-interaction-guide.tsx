import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { icons } from "@/constants";
import CustomButton from "@/components/custom-button";

const biomarkers = [
  { biomarker: "VITAMIN D", interaction: "affects deep sleep" },
  { biomarker: "CORTISOL", interaction: "affects HRV" },
  { biomarker: "HRV", interaction: "affects stress" },
];

const BiomarkerInteractionGuide = () => {
  return (
    <View style={styles.interactionContainer}>
      {/* header */}
      <View style={styles.interactionHeader}>
        <View style={styles.interactionHeaderTitleContainer}>
          <View style={styles.headerIconContainer}>
            <icons.InteractionGuide style={styles.headerIcon} />
          </View>
          <Text style={styles.interactionTitle}>
            Biomarker interaction guide
          </Text>
        </View>

        <Text style={styles.interactionHeaderSubTitle}>
          See how your Biomarkers are interacting to affect energy levels.
        </Text>
      </View>

      {/* body */}
      <View style={styles.interactionBody}>
        {biomarkers.map((biomarker, index) => (
          <View key={index} style={styles.interactionRow}>
            <Text style={styles.interactionBiomarker}>
              {biomarker.biomarker}
            </Text>
            <Text style={styles.interactionText}>{biomarker.interaction}</Text>
          </View>
        ))}
      </View>

      {/* footer */}
      <CustomButton
        title="view all interaction"
        handlePress={() => {}}
        containerStyles={{
          backgroundColor: "transparent",
          alignSelf: "center",
        }}
        textStyles={{ color: "rgba(0, 0, 0, 1)" }}
      />
    </View>
  );
};

export default BiomarkerInteractionGuide;

const styles = StyleSheet.create({
  interactionContainer: {
    flex: 1,
    paddingBottom: 19,
    backgroundColor: "rgba(238, 238, 238, 1)",
    marginBottom: 41,
  },
  // header
  interactionHeader: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#374151",
    marginBottom: 8,
    paddingVertical: 17,
    paddingHorizontal: 16,
  },
  interactionHeaderTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 11,
  },
  //
  headerIconContainer:{
    // borderRadius:100,
    // flexDirection:"row",
    // alignItems:"center",
    // justifyContent:"center",
    // borderWidth:1,
    // overflow:"hidden"
  },
  headerIcon:{},
  //
  interactionTitle: {
    color: "rgba(0, 0, 0, 0.8)",
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19.81,
    letterSpacing: 0.03,
  },
  interactionHeaderSubTitle: {
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "Gilroy-Medium",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 18,
    marginLeft: 16,
  },
  //
  // body
  interactionBody: {
    paddingHorizontal: 16,
    marginBottom: 28,
  },
  //
  // Row
  interactionRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 19,
    paddingVertical: 14,
    paddingHorizontal: 5,
    borderBottomWidth: 0.4,
    borderColor: "rgba(119, 119, 119, 1)",
  },
  interactionBiomarker: {
    color: "rgba(56, 56, 56, 1)",
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 17.15,
    letterSpacing: -0.03,
    width: 70,
  },
  interactionText: {
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "Gilroy-Medium",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 18,
    flex: 1,
  },
  //
});
