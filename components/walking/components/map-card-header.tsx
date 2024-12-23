import { View, StyleSheet } from "react-native";
import React from "react";
import TabButton from "@/components/details/components/tab-button";

enum TAB_BUTTON {
  STEPS_MODE = "STEPS_MODE",
  MAP_MODE = "MAP_MODE",
}

interface MapCardHeaderProps {
    activeTab: TAB_BUTTON; 
  }

const MapCardHeader: React.FC<MapCardHeaderProps> = ({ activeTab }) => {
  return (
    <View style={styles.tabContainer}>
      <View style={styles.tabWrapper}>
        <TabButton
          title="steps mode"
          handleTabButton={() => {}}
          isActive={activeTab === TAB_BUTTON.STEPS_MODE}
        />

        {/* Vertical Line */}
        <View style={styles.verticalLine} />

        <TabButton
          title="map mode"
          handleTabButton={() => {}}
          isActive={activeTab === TAB_BUTTON.MAP_MODE}
        />
      </View>
    </View>
  );
};

export default MapCardHeader;

const styles = StyleSheet.create({
  // tab container
  tabContainer: {
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // width: "100%",
    position: "absolute",
    top: 0,
    zIndex:1
  },
  tabWrapper: {
    backgroundColor: "rgba(0, 0, 0, 1)",
    flexDirection: "row",
    gap: 8,
    borderRadius: 25,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#000",
    // width: "75%",
  },

  // vertical line
  verticalLine: {
    width: 0.5,
    backgroundColor: "rgba(238, 238, 238, 0.4)",
    height: "auto",
    marginVertical: 10,
  },
  //
});
