import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { icons } from "@/constants";

interface BottomSheetHeaderProps {
  TitleIcon: any;
  title: string;
  onClose: () => void;
}

const BottomSheetHeader: React.FC<BottomSheetHeaderProps> = ({
  TitleIcon,
  title,
  onClose,
}) => {
  return (
    <View style={styles.listItem}>
      <TitleIcon style={styles.listIcon} />
      <Text style={styles.listText}>{title}</Text>

      {/* Right Arrow Icon */}
      <TouchableOpacity
        onPress={() => {
          console.log("onPress fired");
          onClose();
        }}
      >
        <icons.CloseCircle />
      </TouchableOpacity>
    </View>
  );
};

export default BottomSheetHeader;

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
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
    width: 24,
    height: 24,
    marginLeft: "auto",
    tintColor: Colors.black,
  },
});
