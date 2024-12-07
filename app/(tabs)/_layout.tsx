import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, Image, Platform, StatusBar, View } from "react-native";

import { Colors } from "@/constants/Colors";
import { icons } from "@/constants";
import CustomHeader from "@/components/custom-header";
import CalendarIcon from "@/components/tab-bar/clipboard-icon";
import ThunderIcon from "@/components/tab-bar/thunder-icon";
import HomeIcon from "@/components/tab-bar/home-icon";
import ClipboardIcon from "@/components/tab-bar/clipboard-icon";
import HeartIcon from "@/components/tab-bar/heart-icon";
import UserIcon from "@/components/tab-bar/user-icon";
import CustomButton from "@/components/custom-button";
import HealthInsightHeader from "@/components/health-insights/components/health-insight-header";

interface ITabBar {
  icon?: any;
  color: any;
  focused: boolean;
}
type IconComponent = React.FC<{
  color: string;
  size: number;
  focused: boolean;
}>;

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarShowLabel: false,

        // tab bar style
        tabBarStyle: {
          height: 80,
          backgroundColor: "rgba(247, 247, 247, 1)",
          borderTopColor: "rgba(171, 178, 146, 1)",
          alignItems: "center",
          paddingTop: 20,
          paddingBottom: Platform.OS === "ios" ? 20 : 10,
          paddingHorizontal: 33,
          borderTopWidth: 0.4,

          // shadow
          ...Platform.select({
            ios: {
              shadowColor: "#000",
              shadowOpacity: 0.15,
              shadowOffset: { width: 0, height: -4 },
              shadowRadius: 24,
            },
            android: {
              elevation: 8,
            },
          }),
        },
        headerStyle: [
          styles.header,
          { backgroundColor: Colors.tabHeaderBackground, height: 90 },
        ],
        headerTintColor: Colors.background,
        headerShadowVisible: true,
        headerTitleStyle: {
          fontFamily: "Recoleta",
          fontSize: 20,
          fontWeight: 500,
          letterSpacing: -0.48,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <HomeIcon color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="quick-consultation"
        options={{
          title: "Quick consultation",
          headerLeft: () => (
            <icons.QuickConsultationIcon style={styles.headerIcon} />
          ),
          tabBarIcon: ({ color, focused }) => (
            <ClipboardIcon color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="thunder"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <ThunderIcon color={color} focused={focused} />
          ),
          header: () => (
            <>
              <StatusBar barStyle="dark-content" backgroundColor="#fff" />
              <CustomHeader title="Mark Maurice" />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="analytics"
        options={{
          headerShown: false,
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ color, focused }) => (
            <HeartIcon color={color} focused={focused} />
          ),
          header: () => (
            <>
              <StatusBar translucent backgroundColor="transparent" />
              {/* <CustomHeader /> */}
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="health-insights"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <HeartIcon color={color} focused={focused} />
          ),
          header: () => (
            <>
              <StatusBar barStyle="dark-content" backgroundColor="#fff" />
              <HealthInsightHeader title="Health Insights" />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ color, focused }) => (
            <UserIcon color={color} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  header: {
    ...Platform.select({
      ios: {
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  icon: {
    width: 32,
    height: 32,
  },
  headerIcon: {
    width: 32,
    height: 32,
  },

  // tab bar - bottom

  tabBarItem: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
