import { View, Text, StyleSheet } from "react-native";
import React from "react";

const HelpYouCard = ({ time }: { time: string }) => {
  return (
    <View style={styles.helpYouContainer}>
      <Text style={styles.botText}>Does this help?</Text>
      <Text style={styles.messageTime}>{time}</Text>
    </View>
  );
};

export default HelpYouCard;

const styles = StyleSheet.create({
  // hep you
  helpYouContainer: {
    borderRadius: 10,
    maxWidth: "80%",
    marginBottom: 16,
    padding: 8,
    backgroundColor: "rgba(234, 235, 251, 1)",
    alignSelf: "flex-start",
    width: "100%",
  },
  botText: {
    color: "rgba(8, 8, 8, 1)", // #080808
    fontFamily: "Gilroy-Medium",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.4,
    textAlign: "left",
  },
  messageTime: {
    marginTop: 4,
    color: "rgba(8, 8, 8, 0.4)",
    fontFamily: "Gilroy-Medium",
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 20,
    letterSpacing: 0.4,
    textAlign: "left",
  },
});
