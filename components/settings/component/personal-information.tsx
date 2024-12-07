import { View, StyleSheet } from "react-native";
import React from "react";
import FormField from "./custom-form-field";
import { Colors } from "@/constants/Colors";

interface PersonalInfoField {
  id: number;
  title: string;
  value: string;
  inputMode?: "text" | "email" | "tel" | "numeric";
}

const personalInfoFields: PersonalInfoField[] = [
  { id: 1, title: "full name", value: "Mark Maurice" },
  {
    id: 2,
    title: "linked email ID",
    value: "mrkmaurice@gmail.com",
    inputMode: "email",
  },
  {
    id: 3,
    title: "linked phone number",
    value: "9065811368",
    inputMode: "tel",
  },
  { id: 4, title: "gender", value: "Male" },
  { id: 5, title: "date of birth", value: "11-12-1980", inputMode: "text" },
];

const PersonalInformation = () => {
  const handleChangeText = (id: number, text: string) => {
    console.log(`Field ID: ${id}, Updated Value: ${text}`);
  };

  return (
    <View style={styles.section}>
      {personalInfoFields.map(({ id, title, value, inputMode }, index) => (
        <FormField
          key={id}
          title={title}
          value={value}
          inputMode={inputMode}
          handleChangeText={(text) => handleChangeText(id, text)}
          otherStyles={
            index === personalInfoFields.length - 1 && { borderBottomWidth: 0 }
          }
        />
      ))}
    </View>
  );
};

export default PersonalInformation;

const styles = StyleSheet.create({
  section: {
    borderRadius: 12,
    borderWidth: 0.4,
    borderColor: Colors.border.secondary,
    paddingVertical: 12,
    paddingHorizontal: 15.3,
  },
});
