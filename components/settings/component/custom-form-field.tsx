import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";

interface IFormField {
  title: string;
  value: string;
  inputMode?: "text" | "email" | "tel" | "numeric";
  placeholder?: string;
  maxLength?: number;
  handleChangeText: (text: string) => void;
  otherStyles?: any;
  textStyles?: string;
  editable?: boolean;
  isPhoneNumber?: boolean;
}

const FormField = ({
  title,
  value = "",
  inputMode = "text",
  placeholder = "",
  maxLength,
  handleChangeText,
  otherStyles,
  textStyles = "",
  editable = true,
  isPhoneNumber = false,
  ...props
}: IFormField) => {
  const [isEditable, setIsEditable] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const toggleIsEditableVisibility = () => setIsEditable((prev) => !prev);

  return (
    <View style={[styles.formField, otherStyles]}>
      {/* Field Title */}
      <Text style={styles.formTitle}>{title}</Text>

      <View style={styles.inputContainer}>
        {/* For Indian +91 */}
        {inputMode === "tel" && (
          <View style={styles.inputModeTel}>
            <Text style={styles.formInput}>+91</Text>
            <Text style={[styles.formInput, styles.dash]}>-</Text>
          </View>
        )}

        <TextInput
          inputMode={inputMode}
          value={value}
          placeholder={placeholder}
          onChangeText={handleChangeText}
          maxLength={maxLength}
          secureTextEntry={inputMode === "tel" && !isEditable}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          editable={editable}
          style={styles.formInput}
          {...props}
        />

        {/* When Passoword */}
        {inputMode === "tel" && value !== "" && (
          <Pressable
            onPress={toggleIsEditableVisibility}
            style={styles.formActionLabel}
          >
            <Text style={styles.formActionLabelText}>edit</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({
  formField: {
    paddingVertical: 8,
    borderBottomWidth: 0.4,
    borderBottomColor: Colors.border.secondary,
  },
  formTitle: {
    fontFamily: "Gilroy-SemiBold",
    fontSize: 11.52,
    fontWeight: 400,
    lineHeight: 15.36,
    letterSpacing: 0.47,
    color: Colors.text.fourth,
    marginBottom: 4,
  },
  inputModeTel: {
    flexDirection: "row",
  },
  dash: {
    marginHorizontal: 4,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  formInput: {
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 0.25,
    color: Colors.text.third,
    padding: 0,
  },

  // edit - update
  formActionLabel: {
    marginLeft: "auto",
  },
  formActionLabelText: {
    color: Colors.text.third,
    fontFamily: "Gilroy-SemiBold",
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 19,
    letterSpacing: 0.25,
  },
});
