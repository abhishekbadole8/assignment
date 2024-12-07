import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { IChat } from "@/types/IChat";

const UserMessageCard = ({ item }: {item:IChat}) => {
  return (
    <View style={styles.userMessage}>
      <Text style={styles.userText}>{item.message}</Text>
      <Text style={styles.messageTime}>{item.time}</Text>
    </View>
  );
};

export default UserMessageCard;

const styles = StyleSheet.create({
  userMessage: {
    borderRadius: 10,
    maxWidth: "80%",
    marginBottom: 16,
    padding: 10,
    backgroundColor: "rgba(87, 95, 246, 1)", // #575FF6
    alignSelf: "flex-end",
    width: "auto",
  },
  userText: {
    color: Colors.background,
    fontFamily:"Gilroy-SemiBold",
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 16,
    letterSpacing: 0.4,
    textAlign: "right",
  },
  messageTime: {
    marginTop: 4,
    color: "rgba(255, 255, 255, 0.5)",
    fontFamily:"Gilroy-SemiBold",
    fontSize: 10,
    fontWeight: 400,
    lineHeight: 20,
    letterSpacing: 0.4,
    textAlign: "right",
  },
});
