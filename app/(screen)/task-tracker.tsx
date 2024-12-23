import {
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  View,
} from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "@/constants";

// components
import MapCard from "@/components/walking/components/map-card";
import CustomButton from "@/components/custom-button";
import TaskButtonWrapper from "@/components/task-button-wrapper";
import TaskCommonHeaderCard from "@/components/task-common-header-card";
import AudioCompanion from "@/components/walking/components/audio-companion";
import WhatsNearby from "@/components/walking/components/whats-nearby";

enum TAB_BUTTON {
  STEPS_MODE = "STEPS_MODE",
  MAP_MODE = "MAP_MODE",
}
interface audioCompanionItem {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
}

const audioCompanionItems: audioCompanionItem[] = [
  {
    id: 1,
    title: "Your playlist",
    subtitle: "custom",
    icon: icons.Music,
  },
  {
    id: 2,
    title: "News update",
    subtitle: "5mins",
    icon: icons.News,
  },
  {
    id: 3,
    title: "Nature sounds",
    subtitle: "continuous",
    icon: icons.NatureSound,
  },
];

const TaskTracker = () => {
  const [activeCompanionId, setActiveCompanionId] = React.useState(1);
  const [currentTab, setCurrentTab] = useState(TAB_BUTTON.MAP_MODE);

  const handleTabButtonPress = (tab: TAB_BUTTON) => {
    setCurrentTab(tab);
  };

  // audio companion
  const handleAudioCompanion = (id: number) => {
    setActiveCompanionId(id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#4740CA" />

      {/* header */}
      <TouchableOpacity
        style={styles.headerContainer}
        onPress={() => router.back()}
      >
        <icons.LeftArrowWhite />
      </TouchableOpacity>

      {/* Header - common task card */}
      <TaskCommonHeaderCard />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Map */}
        <MapCard
          activeTab={currentTab}
          handleTabButtonPress={handleTabButtonPress}
        />

        {/* Walking companion */}
        <AudioCompanion
          audioCompanionItems={audioCompanionItems}
          activeCompanionId={activeCompanionId}
          handleAudioCompanion={handleAudioCompanion}
        />

        {/* footer */}
        <WhatsNearby />
      </ScrollView>

      {/* footer button */}
      <TaskButtonWrapper containerStyle={{ flexDirection: "row", gap: 16 }}>
        {/* pause icon */}
        <View style={styles.pauseWalkingIcon}>
          <View style={styles.square} />
        </View>

        <CustomButton
          title="pause walking"
          handlePress={() => {}}
          containerStyles={{ width: "100%" }}
        />
      </TaskButtonWrapper>
    </SafeAreaView>
  );
};

export default TaskTracker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  //
  scrollContent: {
    paddingBottom: 90,
  },
  // header container
  headerContainer: {
    paddingTop: 17,
    paddingLeft: 15,
    alignItems: "flex-start",
    backgroundColor: "#4740CA",
  },
  //
  pauseWalkingIcon: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    padding: 13,
  },
  square: {
    width: 14,
    height: 14,
    borderRadius: 2,
    backgroundColor: "#000",
  },
});
