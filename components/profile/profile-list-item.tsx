import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { icons } from "@/constants";
import { Colors } from "@/constants/Colors";

const ProfileListItem = ({ option }) => {
  return (
    <TouchableOpacity key={option.id} style={styles.listItem}>
      <option.icon style={styles.listIcon} />
      <Text style={styles.listText}>{option.title}</Text>

      {/* Right Arrow Icon */}
      <icons.Arrow style={icons.Arrow} />
    </TouchableOpacity>
  );
};

export default ProfileListItem;

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    marginBottom: 8,
    borderBottomWidth: 0.4,
    borderBottomColor: Colors.border.secondary,
  },
  listIcon: {
    width: 24,
    height: 24,
    tintColor: Colors.black,
    marginRight: 12,
  },
  listText: {
    flex: 1,
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 19,
    letterSpacing: 0.25,
    color: Colors.text.secondary,
  },
  arrowIcon: {
    width: 19.2,
    height: 19.2,
    marginLeft: "auto",
    tintColor: Colors.black,
  },
});
