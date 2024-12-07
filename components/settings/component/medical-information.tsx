import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { icons } from "@/constants";
import { Colors } from "@/constants/Colors";

interface MedicalItem {
  id: number;
  label: string;
  value: string;
}

const medicalItems: MedicalItem[] = [
  { id: 1, label: "Blood type", value: "A+" },
  { id: 2, label: "Allergies", value: "1 listed" },
  { id: 3, label: "Chromic conditions", value: "1 listed" },
  { id: 4, label: "Current medication", value: "1 active" },
];

const MedicalInformation = () => {
  return (
    <View style={styles.section}>
      {medicalItems.map((item, index) => (
        <TouchableOpacity
          key={item.id}
          style={[
            styles.listItem,
            index === medicalItems.length - 1 && { borderBottomWidth: 0 },
          ]}
          activeOpacity={0.75}
        >
          <Text style={styles.listText}>{item.label}</Text>
          <View style={styles.listRightCol}>
            <Text style={styles.listTextValue}>{item.value}</Text>
            <icons.ArrowRightBlack style={styles.icon} />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default MedicalInformation;

const styles = StyleSheet.create({
  section: {
    borderRadius: 12,
    borderWidth: 0.4,
    borderColor: Colors.border.secondary,
    paddingVertical: 12,
    paddingHorizontal: 15.3,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15.5,
    borderBottomWidth: 0.4,
    borderBottomColor: Colors.border.secondary,
  },
  listText: {
    fontFamily: "Gilroy-Medium",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 0.25,
    color: Colors.text.third,
  },
  listRightCol: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14.4,
    marginLeft: "auto",
  },
  listTextValue: {
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 0.25,
    color: Colors.text.third,
  },
  icon: {
    tintColor: Colors.black,
  },
});
