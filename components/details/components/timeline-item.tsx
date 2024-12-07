import { View, Text, StyleSheet } from "react-native";
import React from "react";

type TimelineItemProps = {
  date: string;
  title: string;
  description: string;
  isLastItem?: boolean;
};

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  description,
  isLastItem,
}) => (
  <View style={styles.timelineItem}>
    <View style={styles.timelineIndicator}>
      <View style={styles.timelineDot} />
      {!isLastItem && <View style={styles.verticalLine} />}
    </View>
    <View style={styles.timelineContent}>
      <Text style={styles.dateText}>{date}</Text>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.descriptionText}>{description}</Text>
    </View>
  </View>
);

export default TimelineItem;

const styles = StyleSheet.create({
  timelineItem: {
    flexDirection: "row",
    paddingHorizontal: 11,
  },
  timelineIndicator: {
    alignItems: "center",
    marginRight: 6,
    // paddingTop: 8,
  },
  timelineDot: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: "rgba(0, 0, 0, 1)",
  },
  verticalLine: {
    width: 1,
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 1)",
  },
  timelineContent: {
    flex: 1,
    paddingBottom: 16,
  },
  dateText: {
    color: "rgba(95, 95, 95, 1)",
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 14.7,
    marginBottom: 8,
  },
  titleText: {
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19.81,
    letterSpacing: -0.03,
    marginBottom: 4,
  },
  descriptionText: {
    color: "rgba(0, 0, 0, 0.7)",
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 16,
  },
});
