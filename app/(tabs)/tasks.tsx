import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants";
import { SafeAreaView } from "react-native-safe-area-context";
import TopContainer from "@/components/tasks/top-container";
import CurrentTaskCard from "@/components/tasks/current-task-card";
import { todaysTasks, tommorowsTasks } from "@/constants/data";
import UpcomingTaskCard from "@/components/tasks/upcoming-task-card";

enum TAB_BUTTON {
  TODAY = "TODAY",
  TOMMOROW = "TOMMOROW",
}

const Tasks = () => {
  const [activeTab, setActiveTab] = useState(TAB_BUTTON.TOMMOROW);

  const handleTabButton = (title: string) => {
    setActiveTab(
      title === TAB_BUTTON.TODAY ? TAB_BUTTON.TODAY : TAB_BUTTON.TOMMOROW
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      {/* Top Container */}
      <TopContainer />

      {/* Scrollable Content */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
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
        </View>

        {/* </View> */}
        {activeTab === TAB_BUTTON.TODAY && (
          <>
            <CurrentTaskCard task={todaysTasks[0]} />

            {/* more in day */}
            <View style={styles.dividerContainer}>
              <View style={styles.divider} />
              <Text style={styles.dividerText}>more in the day</Text>
              <View style={styles.divider} />
            </View>

            {/* cards */}
            <View style={styles.upcomingTasksContainer}>
              {todaysTasks.map((task) => (
                <UpcomingTaskCard key={task.id} task={task} />
              ))}
            </View>
          </>
        )}

        {activeTab === TAB_BUTTON.TOMMOROW && (
          <View style={styles.upcomingTasksTomContainer}>
            {tommorowsTasks.map((task) => (
              <UpcomingTaskCard key={task.id} task={task} />
            ))}
          </View>
        )}
      </ScrollView>
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
  scrollContent: {
    paddingBottom: 31,
  },
  // your tasks
  contentContainer: {
    paddingHorizontal: 16,
    marginVertical: 14,
    marginBottom: 16,
  },
  //
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
  //
  //
  //
  dividerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    paddingVertical: 10,
  },
  dividerText: {
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 17.15,
    paddingHorizontal: 10,
  },
  divider: {
    borderTopWidth: 0.4,
    borderColor: "rgba(0, 0, 0, 0.4)",
    width: 60,
  },
  //
  //
  upcomingTasksContainer: {
    gap: 16,
    paddingBottom: 30,
  },
  //
  upcomingTasksTomContainer: {
    gap: 16,
    paddingBottom: 30,
  },
});
