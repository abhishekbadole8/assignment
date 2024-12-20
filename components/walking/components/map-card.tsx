import { View, Text, StyleSheet } from "react-native";
import React from "react";

const MapCard = () => {
  return (
    <View style={style.container}>
      <Text>MapCard</Text>
    </View>
  );
};

export default MapCard;

const style = StyleSheet.create({
  container: {
    borderWidth: 0.4,
    borderColor: "rgba(0, 0, 0, 0.2)",
  },
});
