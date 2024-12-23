import { View, StyleSheet } from "react-native";
import React from "react";
import MapCardFooter from "./map-card-footer";
import MapCardHeader from "./map-card-header";
import MapCardBody from "./map-card-body";

const MAP_CARD_HEIGHT = 368;

enum TAB_BUTTON {
  STEPS_MODE = "STEPS_MODE",
  MAP_MODE = "MAP_MODE",
}

interface MapCardProps {
  activeTab: TAB_BUTTON;
  handleTabButtonPress: (tab: TAB_BUTTON) => void;
}

const MapCard: React.FC<MapCardProps> = ({
  activeTab,
  handleTabButtonPress,
}) => {
  return (
    <View style={styles.mapContainer}>
      {/* Header - overflow */}
      <MapCardHeader
        activeTab={activeTab}
        handleTabButtonPress={handleTabButtonPress}
      />

      {/* Circular progress */}
      {activeTab === TAB_BUTTON.STEPS_MODE && <MapCardBody />}

      {/* Map */}
      {activeTab === TAB_BUTTON.MAP_MODE && <MapCardBody />}

      {/* Footer - overflow */}
      <MapCardFooter isMapTab={activeTab === TAB_BUTTON.MAP_MODE}/>
    </View>
  );
};

export default MapCard;

const styles = StyleSheet.create({
  // map container
  mapContainer: {
    width: "100%",
    height: MAP_CARD_HEIGHT,
    borderWidth: 0.4,
    borderColor: "rgba(0, 0, 0, 0.4)",
    backgroundColor: "grey",
    position: "relative",
    flexDirection: "row",
    justifyContent: "center",
  },
});
