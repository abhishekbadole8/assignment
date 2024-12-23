import { StyleProp, Text, TextProps, TextStyle } from "react-native";
import React from "react";

interface CustomTextProps extends TextProps {
  fontSize?: number;
  color?: string;
  fontFamily?: string;
  fontWeight?:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
  textAlign?: "auto" | "left" | "right" | "center" | "justify";
  lineHeight?: number;
  letterSpacing?: number;
  style?: StyleProp<TextStyle>;
}

const CustomText: React.FC<CustomTextProps> = ({
  children,
  fontSize = 16,
  color = "black",
  fontFamily = "Gilroy-Medium",
  fontWeight = "normal",
  textAlign = "auto",
  lineHeight,
  letterSpacing,
  style,
  ...props
}) => {
  return (
    <Text
      style={[
        {
          fontSize,
          color,
          fontFamily,
          fontWeight,
          textAlign,
          lineHeight: lineHeight ? lineHeight : fontSize * 1.2,
        },
        style,
      ]}
      {...props}
    >
      {children || ""}
    </Text>
  );
};

export default CustomText;
