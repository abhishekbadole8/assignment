import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

type TimeLabelCardProps = {
  filter: {
    id: string;
    label: string;
  };
  handleTimeLabelClick: (id: string) => void;
  activeTimeLabel: string | number;
};

const TimeLabelCard: React.FC<TimeLabelCardProps> = ({
  filter,
  handleTimeLabelClick,
  activeTimeLabel,
}) => {
  return (
    <TouchableOpacity
      key={filter.id}
      style={[
        styles.timeFilterButton,
        activeTimeLabel === filter.id && styles.activeTimeFilterButton,
      ]}
      onPress={() => handleTimeLabelClick(filter.id)}
    >
      <Text
        style={[
          styles.timeFilterText,
          activeTimeLabel === filter.id && styles.activeTimeFilterText,
        ]}
      >
        {filter.label}
      </Text>
    </TouchableOpacity>
  );
};

export default TimeLabelCard;

const styles = StyleSheet.create({
  timeFilterButton: {
    paddingVertical: 5.5,
    paddingHorizontal: 16,
    borderRadius: 25,
  },
  activeTimeFilterButton: {
    backgroundColor: "rgba(255, 255, 255, 0.28)",
  },
  timeFilterText: {
    color: "rgba(255, 255, 255, 0.7)",
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 17.33,
  },
  activeTimeFilterText: {
    color: "rgba(245, 245, 245, 1)",
  },
});
