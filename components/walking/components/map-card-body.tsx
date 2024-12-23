import { View, StyleSheet } from "react-native";
import React from "react";
import MapView from "react-native-maps";

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
       
      </MapView>
    </View>
  );
};

export default MapCardBody;

const styles = StyleSheet.create({
  mapBody: {
    width:'100%',

  },
  map: {
    width: "100%",
    height: "100%",
  },
  //
});
