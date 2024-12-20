import { icons } from "@/constants";
import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, TouchableOpacity } from "react-native";

const ScreenLayout = () => {
  return (
    <>
      <StatusBar backgroundColor="#000" style="light" />
      <Stack>
        <Stack.Screen
          name="view-all-biomarkers"
          options={{
            headerShown: false,
            // headerTitle: "",
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="settings"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="details"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="walking"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
};

export default ScreenLayout;

const styles = StyleSheet.create({
  headerContainer: {
    maxHeight: 49,
    paddingTop: 17,
    // paddingLeft: 15,
    paddingBottom: 8,
    // alignItems:"flex-start",
    borderWidth: 1,
  },
  headerIcon: {},
});
