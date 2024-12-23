import { icons } from "@/constants";
import { Colors } from "@/constants/Colors";
import { router, Stack, useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, TouchableOpacity } from "react-native";

const ScreenLayout = () => {
  const navigation = useNavigation();

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
          name="task-tracker"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="task-details"
          options={{
            headerTitle: "",
            headerShadowVisible: false,
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.headerLeft}
              >
                <icons.LeftArrowWhite />
              </TouchableOpacity>
            ),
            headerStyle: {
              backgroundColor: "rgba(71, 64, 202, 1)", // #4740CA
            },
            headerTintColor: "#fff",
          }}
        />
      </Stack>
    </>
  );
};

export default ScreenLayout;

const styles = StyleSheet.create({
  // header left
  headerLeft: {},
});
