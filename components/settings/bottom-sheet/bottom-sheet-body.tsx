import { StyleSheet, ScrollView } from "react-native";
import React from "react";

const BottomSheetBody = ({ children }: { children: React.ReactNode }) => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      {children}
    </ScrollView>
  );
};

export default BottomSheetBody;

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
    paddingBottom: 40,
  },
});
