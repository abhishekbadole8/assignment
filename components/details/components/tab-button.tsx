import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

interface ITabButtonProps {
  title: string;
  isActive: boolean;
  handleTabButton: (title: string) => void;
}

const TabButton: React.FC<ITabButtonProps> = ({
  title,
  isActive,
  handleTabButton,
}) => {
  return (
    <TouchableOpacity
      style={[styles.tabButton, isActive && styles.activeTab]}
      onPress={() => handleTabButton(title)}
    >
      <Text style={[styles.tabText, isActive && styles.activeTabText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default TabButton;

const styles = StyleSheet.create({
  tabButton: {
    flex: 1,
    borderRadius: 25,
    alignItems: "center",
    paddingVertical: 9.5,
    paddingHorizontal: 16,
  },
  tabText: {
    color: "rgba(242, 243, 239, 1)",
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 17.33,
  },
  activeTab: {
    backgroundColor: "rgba(238, 238, 238, 1)",
  },
  activeTabText: {
    color: "rgba(0, 0, 0, 1)",
  },
});
