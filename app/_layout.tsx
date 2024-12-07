import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    Recoleta: require("../assets/fonts/Recoleta-RegularDEMO.otf"),
    "Gilroy-SemiBold": require("../assets/fonts/gilroy/Gilroy-SemiBold.ttf"),
    "Gilroy-Medium": require("../assets/fonts/gilroy/Gilroy-Medium.ttf"),
    "Gilroy-Bold": require("../assets/fonts/gilroy/Gilroy-Bold.ttf"),
    "Gilroy-ExtraBold": require("../assets/fonts/gilroy/Gilroy-ExtraBold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false,  }} />
        <Stack.Screen name="(screen)" options={{ headerShown: false,  }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}
