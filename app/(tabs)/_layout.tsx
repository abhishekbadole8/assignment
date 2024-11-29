import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, Image, Platform, View } from "react-native";
import { Colors } from "@/constants/Colors";
import { icons } from "@/constants";

interface ITabIcon {
  icon: any;
  color: string;
  name: string;
  focused?: boolean;
}

// TabIcon
const TabIcon = ({ icon, color, name, focused }: ITabIcon) => {
  return (
    <View
      style={[styles.tabIconContainer, name !== "Thunder" && { padding: 8.33 }]}
    >
      <Image source={icon} style={styles.tabIcon} />
    </View>
  );
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerStyle: [
          styles.header,
          { backgroundColor: Colors.tabHeaderBackground, height: 90 },
        ],
        tabBarStyle: {
          width: "100%",
          height: 68,
          paddingHorizontal: 32,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
        },
        tabBarActiveTintColor: "#999",
        tabBarInactiveTintColor: "#999",
        headerTitleStyle: {
          fontFamily: "Recoleta",
          fontSize: 20,
          fontWeight: 500,
          letterSpacing: -0.48,
        },
        headerTintColor: Colors.background,
        headerShadowVisible: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.Home}
              color={color}
              name="Home"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="quick-consultation"
        options={{
          title: "Quick consultation",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.Clipboard}
              color={color}
              name="Quick consultation"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="thunder"
        options={{
          title: "Thunder",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.Thunder}
              color={color}
              name="Thunder"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="heart"
        options={{
          title: "Heart",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.Heart}
              color={color}
              name="Heart"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.Profile}
              color={color}
              name="Profile"
              focused={focused}
            />
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

  // TabIcon
  tabIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    // paddingTop: 18.5,
    marginVertical: "auto",
  },
  tabIcon: {
    resizeMode: "contain",
    // width: 40,
    // height: 40,
  },
});
