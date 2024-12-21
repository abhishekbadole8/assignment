import { View, StyleSheet } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import { icons } from "@/constants";

const map_height = 208;

const MapCardBody = () => {
  return (
    <View style={styles.mapBody}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title="My Location"
          description="This is a marker in San Francisco"
        />
      </MapView>

      {/* full screen icon */}
      <View style={{ position: "absolute", right: 10, top: 10 }}>
        <icons.FullscreenBlack />
      </View>
    </View>
  );
};

export default MapCardBody;

const styles = StyleSheet.create({
  mapBody: {
    height: map_height,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  //
});
