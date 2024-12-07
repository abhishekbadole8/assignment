import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants";
import { SafeAreaView } from "react-native-safe-area-context";
import TopContainer from "@/components/tasks/top-container";

enum TAB_BUTTON {
  TODAY = "TODAY",
  TOMMOROW = "TOMMOROW",
}

const Tasks = () => {
  const [activeTab, setActiveTab] = useState(TAB_BUTTON.TODAY);

  const handleTabButton = (title: string) => {
    setActiveTab(
      title === TAB_BUTTON.TODAY ? TAB_BUTTON.TODAY : TAB_BUTTON.TOMMOROW
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Container */}
      <TopContainer />

      {/* Your tasks */}
      <View style={styles.contentContainer}>
        {/* <View style={styles.headerContainer}> */}
        <Text style={styles.headerText}>Your tasks</Text>

        {/* Tabs container */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={
              activeTab == TAB_BUTTON.TODAY
                ? styles.activeTab
                : styles.inactiveTab
            }
            onPress={() => handleTabButton(TAB_BUTTON.TODAY)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab !== TAB_BUTTON.TODAY && styles.inActiveTabText,
              ]}
            >
              today
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              activeTab == TAB_BUTTON.TOMMOROW
                ? styles.activeTab
                : styles.inactiveTab
            }
            onPress={() => handleTabButton(TAB_BUTTON.TOMMOROW)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab !== TAB_BUTTON.TOMMOROW && styles.inActiveTabText,
              ]}
            >
              tomorrow
            </Text>
          </TouchableOpacity>
        </View>
        {/* </View> */}
      </View>
    </SafeAreaView>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 31,
  },
  //
  // your tasks
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  headerText: {
    color: "rgba(49, 49, 49, 1)",
    fontFamily: "Recoleta",
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 27.2,
    letterSpacing: -0.03,
    marginBottom: 8,
  },
  //
  // tabs container
  tabsContainer: {
    flexDirection: "row",
    gap: 8,
  },
  // active
  activeTab: {
    borderWidth: 0.4,
    borderColor: "rgba(0, 0, 0, 1)",
    borderRadius: 80,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  tabText: {
    color: "rgba(0,0,0, 1)",
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 17.15,
    textAlign: "center",
  },

  // inactive
  inactiveTab: {
    borderWidth: 0.4,
    borderColor: "rgba(234, 234, 234, 1)",
    backgroundColor: "rgba(234, 234, 234, 1)",
    borderRadius: 80,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  inActiveTabText: {
    color: "rgba(0,0,0, 0.6)",
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 17.15,
    textAlign: "center",
  },
});
