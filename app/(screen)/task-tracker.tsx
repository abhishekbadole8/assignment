import {
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "@/constants";
import RouteSafety from "@/components/walking/components/route-safety";
import HeaderCard from "@/components/walking/components/header-card";
import WalkingCompanion from "@/components/walking/components/walking-companion";
import MapCard from "@/components/walking/components/map-card";
import CustomButton from "@/components/custom-button";
import TaskButtonWrapper from "@/components/task-button-wrapper";

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
      <TouchableOpacity style={styles.headerContainer} onPress={() => {}}>
        <icons.LeftArrowWhite />
      </TouchableOpacity>

      <ScrollView>
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
      </ScrollView>

      {/* footer button */}
      <TaskButtonWrapper>
        <CustomButton
          title="start walking"
          handlePress={() => {}}
          containerStyles={{ width: "100%" }}
        />
      </TaskButtonWrapper>
    </SafeAreaView>
  );
};

export default Walking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  //
  // header container
  headerContainer: {
    paddingTop: 17,
    paddingLeft: 15,
    alignItems: "flex-start",
    backgroundColor: "#4740CA",
  },
  //
});
