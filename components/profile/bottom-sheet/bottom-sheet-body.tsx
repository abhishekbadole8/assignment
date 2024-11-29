import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import BottomSheetFooter from "./bottom-sheet-footer";

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
