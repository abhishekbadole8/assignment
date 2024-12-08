import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Pressable,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { icons } from "@/constants";
import { STATUS_BAR_HEIGHT } from "@/constants/layout";
import { router } from "expo-router";

const CustomHeader = ({ screen }: { screen?: any }) => {
  const handleNavigation = () => {
    router.push(screen);
  };
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.userName}>Mark Maurice</Text>
      <TouchableOpacity style={styles.iconContainer} onPress={handleNavigation}>
        <icons.SettingBlack />
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: STATUS_BAR_HEIGHT,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.white,
    paddingVertical: 8,
    paddingRight: 16,
    paddingLeft: 20,

    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 14,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  userName: {
    color: Colors.black,
    fontFamily: "Recoleta",
    fontWeight: 500,
    fontSize: 24,
    lineHeight: 32.64,
    letterSpacing: -0.03,
  },
  iconContainer: {
    width: 32,
    height: 32,
  },
});
