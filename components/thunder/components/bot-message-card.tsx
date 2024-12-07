import { Colors } from "@/constants/Colors";
import { View, Text, StyleSheet, Pressable, Platform } from "react-native";
import { IChat, IOption } from "@/types/IChat";
import CustomButton from "@/components/custom-button";

interface IBotMessageProps {
  item: IChat;
  handleOptionClick: (option: IOption) => void;
}

const BotMessageCard = ({ item, handleOptionClick }: IBotMessageProps) => {
  return (
    <View style={styles.botMessage}>
      <View style={styles.botHeader}>
        <Text style={styles.botText}>{item.message}</Text>
        <Text style={styles.messageTime}>{item.time}</Text>
      </View>

      {/* Bot Option's */}
      {item.options && (
        <View style={styles.optionsContainer}>
          {item.options.map((option) => (
            <Pressable
              key={option.id}
              style={styles.optionButton}
              onPress={() => handleOptionClick(option)}
            >
              <Text style={styles.optionText}>{option.text}</Text>

              <Text style={styles.optionButtonTime}>2d</Text>
            </Pressable>
          ))}
        </View>
      )}

      {/* Bot Suggestion's */}
      {item.suggestions && (
        <View>
          {item.suggestions.map((suggestion) => (
            <View key={suggestion.id} style={styles.suggestionCard}>
              <Text style={styles.suggestionTitle}>{suggestion.title}</Text>
              <Text style={styles.suggestionDetails}>
                {suggestion.duration} • {suggestion.successRate} success
              </Text>

              <View style={styles.buttonContainer}>
                <CustomButton
                  title="details"
                  handlePress={() => {}}
                  containerStyles={{ backgroundColor: Colors.background2 }}
                  textStyles={{ color: "#000" }}
                />
                <CustomButton
                  title="start"
                  handlePress={() => {}}
                  textStyles={{ fontFamily: "Gilroy-SemiBold" }}
                />
              </View>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default BotMessageCard;

const styles = StyleSheet.create({
  botMessage: {
    width: "80%",
    marginBottom: 16,
    borderWidth: 0.4,
    borderColor: Colors.border.primary,
    borderRadius: 10,
    alignSelf: "flex-start",
    overflow: "hidden",

     // shadow
     ...Platform.select({
      ios: {
        shadowColor: "rgba(0, 0, 0, 0.15)",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 14,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  botHeader: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#EAEBFB",
  },
  botText: {
    color: Colors.textPrimary,
    fontFamily: "Gilroy-Medium",
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 20,
    letterSpacing: 0.4,
  },
  messageTime: {
    color: "rgba(8, 8, 8, 0.4)",
    fontFamily: "Gilroy-Medium",
    fontSize: 10,
    fontWeight: 400,
    lineHeight: 20,
    letterSpacing: 0.4,
  },
  optionsContainer: {
    flexDirection: "column",
  },
  optionButton: {
    backgroundColor: Colors.background2,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 0.4,
    borderTopColor: Colors.border.primary,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  optionText: {
    color: Colors.text.fifth,
    fontFamily: "Gilroy-SemiBold",
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 16,
    letterSpacing: 0.4,
  },
  optionButtonTime: {
    color: "#737373",
    fontFamily: "Gilroy-Medium",
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 16,
    letterSpacing: 0.4,
  },

  suggestionCard: {
    backgroundColor: Colors.background2,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 0.4,
    borderTopColor: Colors.text.fifth,
  },
  suggestionTitle: {
    color: "rgba(69, 69, 69, 1)", // #454545
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 18,
    letterSpacing: 0.4,
  },
  suggestionDetails: {
    color: "rgba(0, 0, 0, 0.7)",
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 18,
    // letterSpacing: 0.4,
    marginTop: 4,
    marginBottom: 12,
  },

  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
  },
});
