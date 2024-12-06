import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const ScreenLayout = () => {
  return (
    <>
      <StatusBar backgroundColor="#000" style="light" />
      <Stack>
        <Stack.Screen
          name="view-all-biomarkers"
          options={{ headerShown: false,  }}
        />
      </Stack>
    </>
  );
};

export default ScreenLayout;
