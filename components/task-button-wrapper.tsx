import React, { ReactNode } from "react";
import { Platform, View, StyleSheet } from "react-native";

interface TaskButtonWrapperProps {
  children: ReactNode;
}

const TaskButtonWrapper: React.FC<TaskButtonWrapperProps> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default TaskButtonWrapper;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(247, 247, 247, 1)",
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingVertical: 24,
    paddingHorizontal: 28,

    // shadow
    ...Platform.select({
      ios: {
        shadowColor: "rgba(0, 0, 0, 0.15)",
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.15,
        shadowRadius: 24,
      },
      android: {
        elevation: 8,
      },
    }),
  },
});