import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { icons, images } from "@/constants";
import TaskCard from "./task-card";

type TaskItem = {
  id: number;
  title: string;
  subTitle: {
    time: string;
    environment: string;
  };
  icon: any;
  labelColor: string;
  backgroundColor: string;
};

const CARD_WIDTH = 266;

const tasks: TaskItem[] = [
  {
    id: 1,
    title: "Morning Sunlight",
    subTitle: {
      time: "10 min",
      environment: "outdoor",
    },
    icon: icons.YogaGirl,
    labelColor: "rgba(9, 142, 102, 1)", // #098E66
    backgroundColor: "#4259B6",
  },
  {
    id: 2,
    title: "Mid-day Meals",
    subTitle: {
      time: "10 min",
      environment: "indoor",
    },
    icon: icons.YogaGirl,
    labelColor: "rgba(0, 0, 0, 0.2)",
    backgroundColor: "rgba(66, 89, 182, 1)", //#4259B6
  },
  {
    id: 3,
    title: "Evening Routine",
    subTitle: {
      time: "10 min",
      environment: "indoor",
    },
    icon: icons.YogaGirl,
    labelColor: "rgba(0, 0, 0, 0.2)",
    backgroundColor: "rgba(66, 89, 182, 1)", //#4259B6
  },
];

const UpcomingTasks = () => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>UPCOMING TASKS</Text>

      <View>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <TaskCard task={item} />}
          ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
          contentContainerStyle={{ paddingHorizontal: 16 }}          
        />
      </View>
    </View>
  );
};

export default UpcomingTasks;

const styles = StyleSheet.create({
  // Cards
  cardContainer: {
    // paddingLeft: 16,
    marginBottom: 24,
  },
  cardTitle: {
    fontFamily: "Gilroy-Bold",
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 20,
    marginBottom: 10,
    marginLeft:16
  },
});
