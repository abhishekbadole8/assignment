import { View, Text, StyleSheet, Platform, Pressable } from "react-native";
import { Colors } from "@/constants/Colors";
import { icons } from "@/constants";
import { STATUS_BAR_HEIGHT } from "@/constants/layout";

const HealthInsightHeader = ({ title }: { title: string }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.userName}>{title}</Text>

      <Pressable onPress={() => {}} style={styles.button}>
        <icons.Upload />
        <Text style={styles.buttonText}>upload</Text>
      </Pressable>
    </View>
  );
};

export default HealthInsightHeader;

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: STATUS_BAR_HEIGHT,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.white,
    paddingBottom: 8,
    paddingTop: 1,
    paddingRight: 16,
    paddingLeft: 20,

    ...Platform.select({
      ios: {
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 14,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  userName: {
    color: Colors.black,
    fontFamily: "Recoleta",
    fontWeight: 500,
    fontSize: 24,
    lineHeight: 32.64,
    letterSpacing: -0.03,
  },
  iconContainer: {
    width: 32,
    height: 32,
  },

  //right
  button: {
    // flex: 1,
    borderRadius: 40,
    paddingHorizontal: 18.5,
    paddingVertical: 8,
    backgroundColor: "#000",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
    textAlign: "center",
  },
  buttonText: {
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 18,
    color: "rgba(247, 247, 247, 1)", // #F7F7F7
  },
});
