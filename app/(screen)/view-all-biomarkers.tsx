import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "expo-router";
import ViewBiomarkerCard from "@/components/view-all-biomarkers/components/view-biomarker-card";
import RecommendedSolutions from "@/components/view-all-biomarkers/components/recommended-solutions";
import BiomarkerInteractionGuide from "@/components/view-all-biomarkers/components/biomarker-interaction-guide";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "@/constants";

const ViewAllBiomarkers = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      {/* header */}
      <TouchableOpacity
        onPress={handleBackPress}
        style={styles.headerContainer}
      >
        <icons.LeftArrowBlack style={styles.headerIcon} />
      </TouchableOpacity>

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
  // header cont
  headerContainer: {
    // maxHeight: 49,
    paddingTop: 17,
    paddingLeft: 15,
    paddingBottom: 8,
    alignItems: "flex-start",
  },
  headerIcon: {},
  //
  innerContainer: {
    paddingHorizontal: 16,
  },
});

export default ViewAllBiomarkers;
