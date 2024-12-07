import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import CustomInput from "@/components/custom-input";
import BotMessageCard from "@/components/thunder/components/bot-message-card";
import HelpYouCard from "@/components/thunder/components/help-you-card";
import UserMessageCard from "@/components/thunder/components/user-message.card";
import { formatTime } from "@/utils/formateTime";
import { IChat } from "@/types/IChat";

type BotResponseKey = "anxious" | "sleep_issue" | "migraine";

const botResponses: Record<
  BotResponseKey,
  {
    message: string;
    suggestions: {
      id: string;
      title: string;
      duration: string;
      successRate: string;
    }[];
  }
> = {
  anxious: {
    message:
      "I understand you're feeling anxious. Let me suggest a few relaxation techniques.",
    suggestions: [
      {
        id: "1",
        title: "Meditation",
        duration: "10 mins",
        successRate: "90%",
      },
      {
        id: "2",
        title: "Deep Breathing Exercises",
        duration: "7 mins",
        successRate: "92%",
      },
    ],
  },
  sleep_issue: {
    message:
      "I understand you're having trouble sleeping. Let me suggest a quick solution that might help..",
    suggestions: [
      {
        id: "3",
        title: "4-7-8 Breathing Technique",
        duration: "5 mins",
        successRate: "96%",
      },
      {
        id: "4",
        title: "Progressive Muscle Relaxation",
        duration: "12 mins",
        successRate: "94%",
      },
    ],
  },
  migraine: {
    message:
      "Dealing with migraines can be tough. Here are some helpful techniques:",
    suggestions: [
      {
        id: "5",
        title: "Cold Compress",
        duration: "10 mins",
        successRate: "88%",
      },
      {
        id: "6",
        title: "Guided Imagery",
        duration: "15 mins",
        successRate: "85%",
      },
    ],
  },
};

const QuickConsultation = () => {
  const [chat, setChat] = useState<IChat[]>([]);
  const [inputText, setInputText] = useState<string>("");
  const [selectedIssue, setSelectedIssue] = useState<BotResponseKey | null>(
    null
  );

  // Handle Bot Option Click
  const handleOptionClick = ({ id, text }: { id: string; text: string }) => {
    const botResponseKey = id as BotResponseKey;

    setSelectedIssue(botResponseKey);

    const userMessage = {
      id: `user-${Date.now()}`,
      type: "user",
      message: text,
      options: [],
      time: formatTime(new Date()),
    };

    const botResponse = {
      id: `bot-${Date.now()}`,
      type: "bot",
      message:
        botResponses[botResponseKey]?.message ||
        "Sorry, I don't have an answer for that.",
      suggestions: botResponses[botResponseKey]?.suggestions,
      time: formatTime(new Date()),
    };

    setChat((prevChat) => [...prevChat, userMessage, botResponse]);
  };

  const handleChangeText = (text: string) => {
    setInputText(text);
  };

  // Handle Input Send button click
  const handleSend = () => {
    const trimmedMessage = inputText.trim();
    if (!trimmedMessage) return; // check for empty msg
    const userMessage = {
      id: `user-${Date.now()}`,
      type: "user",
      message: trimmedMessage,
      time: formatTime(new Date()),
    };
    setChat((prevChat) => [...prevChat, userMessage]);
    setInputText("");

    setTimeout(() => {
      const botResponse = {
        id: `bot-${Date.now()}`,
        type: "bot",
        message: `You said: "${trimmedMessage}". How can I help further?`,
        time: formatTime(new Date()),
      };

      setChat((prevChat) => [...prevChat, botResponse]);
    }, 1000);
  };

  useEffect(() => {
    // Initial Bot Message
    const initialBotMessage: IChat = {
      id: "1",
      type: "bot",
      message:
        "Tell us your concern and we’ll resolve it. If it’s neither of the options, type in your query!",
      options: [
        { id: "anxious", text: "I am feeling anxious" },
        { id: "sleep_issue", text: "Couldn't sleep last night" },
        { id: "migraine", text: "Migraine" },
      ],
      time: formatTime(new Date()),
    };
    setChat([initialBotMessage]);
  }, []);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.chatList}
          keyboardShouldPersistTaps="handled"
        >
          {chat.map((item) => (
            <View key={item.id}>
              {item.type === "bot" ? (
                <>
                  <BotMessageCard
                    item={item}
                    handleOptionClick={handleOptionClick}
                  />
                  {selectedIssue && item.id !== "1" && (
                    <HelpYouCard time={item.time} />
                  )}
                </>
              ) : (
                <UserMessageCard item={item} />
              )}
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Input Container */}
      <View style={styles.chatInputContainer}>
        <CustomInput
          value={inputText}
          handleChangeText={handleChangeText}
          placeholder="tell us your concern"
          otherStyles={{ borderWidth: 0.4 }}
          handleSubmit={handleSend}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default QuickConsultation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatList: {
    paddingBottom: 80,
    paddingVertical: 24,
    paddingHorizontal: 16,
    backgroundColor: "#F5F5F5",
  },
  chatInputContainer: {
    borderWidth: 0.4,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderColor: "#ABB292",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    padding: 16,
    backgroundColor: "#fff",

    // shadow
    ...Platform.select({
      ios: {
        shadowColor: "rgba(0, 0, 0, 0.15)",
        shadowOpacity: 0.15,
        shadowOffset: { width: 0, height: -4 },
        shadowRadius: 24,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  //
  //
});
