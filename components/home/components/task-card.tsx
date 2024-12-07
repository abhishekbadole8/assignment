import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { images } from "@/constants";
import CustomButton from "@/components/custom-button";
import { Colors } from "@/constants/Colors";

type TaskCardProps = {
  task: {
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
};

const CARD_WIDTH = 266;

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const Icon = task.icon;

  return (
    <View style={[styles.card, { backgroundColor: task?.backgroundColor }]}>
      <View style={styles.imageContainer}>
        {/* <Image source={task?.image} /> */}
        <Icon />
      </View>

      <View style={styles.upNextlabel}>
        <Text style={styles.upNextText}>up next</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{task?.title}</Text>
        <Text style={styles.subtitle}>
          {task?.subTitle.time} • {task?.subTitle.environment}
        </Text>
      </View>

      {/* Start button */}
      <CustomButton
        title="start"
        handlePress={() => {}}
        textStyles={{ color: "#F2F3EF" }}
      />
    </View>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  // Flatlist Component
  card: {
    flex: 1,
    position: "relative",
    width: CARD_WIDTH,
    padding: 12,
    borderRadius: 24,
    // marginRight: 12,
  },

  // Img - Girl
  imageContainer: {
    position: "absolute",
    right: 29,
  },
  //

  // Text Content
  textContainer: {
    width: CARD_WIDTH / 2,
    marginBottom: 8,
  },
  title: {
    color: Colors.background,
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 20,
    lineHeight: 24.76,
    marginTop: 23,
  },
  subtitle: {
    color: "rgba(255, 255, 255, 0.7)",
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 18,
  },
  //

  // label - tag
  upNextlabel: {
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(9, 142, 102, 1)", // #098E66
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderTopLeftRadius: 24,
    borderBottomRightRadius: 12,
  },
  upNextText: {
    color: Colors.background,
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 14.7,
    textAlign: "center",
  },
  //
});
