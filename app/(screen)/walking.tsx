import { View, TouchableOpacity, StyleSheet, StatusBar, Platform } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "@/constants";
import RouteSafety from "@/components/walking/components/route-safety";
import HeaderCard from "@/components/walking/components/header-card";
import WalkingCompanion from "@/components/walking/components/walking-companion";
import MapCard from "@/components/walking/components/map-card";
import CustomButton from "@/components/custom-button";

interface WalkingCompanionItem {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
}

const walkingCompanion: WalkingCompanionItem[] = [
  {
    id: 1,
    title: "News update",
    subtitle: "5mins",
    icon: icons.News,
  },
  {
    id: 2,
    title: "Nature sounds",
    subtitle: "continuous",
    icon: icons.NatureSound,
  },
  {
    id: 3,
    title: "Your playlist",
    subtitle: "custom",
    icon: icons.Music,
  },
];

const Walking = () => {
  const [activeCompanion, setActiveCompanion] = React.useState(3);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#4740CA" />

      {/* header */}
      <TouchableOpacity onPress={() => {}} style={styles.headerContainer}>
        <icons.LeftArrowBlack style={styles.headerIcon} />
      </TouchableOpacity>

      {/* Header Card */}
      <HeaderCard />

      {/* Map */}
      <MapCard />

      {/* Walking companion */}
      <WalkingCompanion
        walkingCompanion={walkingCompanion}
        activeCompanion={activeCompanion}
      />

      {/* footer */}
      <RouteSafety />

      <View style={styles.footerButtonContainer}>
        <CustomButton
          title="start walking"
          handlePress={() => {}}
          containerStyles={{ width: "100%" }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Walking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  //
  // header container
  headerContainer: {
    paddingTop: 17,
    paddingLeft: 15,
    paddingBottom: 8,
    alignItems: "flex-start",
    backgroundColor: "#4740CA",
  },
  headerIcon: {
    tintColor: "#fff",
    color: "#fff",
  },
  //
  // footer button container
  footerButtonContainer: {
    backgroundColor: "rgba(247, 247, 247, 1)",
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingVertical: 24,
    paddingHorizontal: 28,

    // shadow
    ...Platform.select({
        ios: {
          shadowColor: 'rgba(0, 0, 0, 0.15)',
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.15,
          shadowRadius: 24,
        },
        android: {
          elevation: 8, // Adjust elevation to match the shadow appearance
        },
      }),
  },
});
