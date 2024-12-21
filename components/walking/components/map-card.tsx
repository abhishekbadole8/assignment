import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { icons } from "@/constants";
import MapCardBody from "./map-card-body";
import MapCardFooter from "./map-card-footer";

const MapCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        {/* Header */}
        <View style={styles.mapHeader}>
          <View>
            <Text style={styles.routeRecommendationText}>
              recommended route
            </Text>
            <View>
              <Text style={styles.routeDescriptionText}>via Central Park</Text>
            </View>
          </View>
          <Text style={styles.routeDistanceText}>1.2km</Text>
        </View>

        {/* Body */}
        <MapCardBody />

        {/* footer */}
        <MapCardFooter />
      </View>
    </View>
  );
};

export default MapCard;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
    paddingBottom: 8,
    paddingHorizontal: 16,
  },
  mapContainer: {
    borderWidth: 0.4,
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: 12,
    overflow: "hidden",
  },
  // header
  mapHeader: {
    borderBottomWidth: 0.4,
    borderColor: "rgba(0, 0, 0, 0.2)",
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  routeRecommendationText: {
    fontFamily: "Gilroy-Medium",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 11,
    color: "rgba(92, 92, 92, 0.7)",
    marginBottom: 8,
  },
  routeDescriptionText: {
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 14,
    // lineHeight: 11,
    color: "rgba(85, 85, 85, 1)",
  },
  routeDistanceText: {
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 16,
    // lineHeight: 11,
    color: "rgba(92, 92, 92, 1)",
  },
  //
});
