import { View, StyleSheet, Platform } from "react-native";
import React from "react";
import CustomText from "@/components/custom-text";

interface Detail {
  id: number;
  title: string;
  value: string;
}

const details: Detail[] = [
  {
    id: 1,
    title: "STEPS",
    value: "1800",
  },
  {
    id: 2,
    title: "DIST.",
    value: "1.5km",
  },
  {
    id: 3,
    title: "DURATION",
    value: "1h 08m",
  },
  {
    id: 4,
    title: "CAL.",
    value: "8000",
  },
];

const MapCardFooter = ({ isMapTab }: { isMapTab: boolean }) => {
  const filteredDetails = !isMapTab
    ? details.filter((detail) => detail.id !== 1)
    : details;

  return (
    <View style={styles.mapFooterContainer}>
      {filteredDetails.map((detail, index) => (
        <View
          key={index}
          style={[
            styles.detailBlock,
            details.length - 1 === index ? { borderRightWidth: 0 } : "",
          ]}
        >
          <CustomText
            fontFamily="Gilroy-SemiBold"
            fontSize={12}
            lineHeight={14.7}
            textAlign="center"
            color="rgba(95, 95, 95, 1)"
            style={{ marginBottom: 4 }}
          >
            {detail.title}
          </CustomText>
          <CustomText
            fontFamily="Gilroy-Bold"
            fontSize={16}
            lineHeight={19.81}
            textAlign="center"
          >
            {detail.value}
          </CustomText>
        </View>
      ))}
    </View>
  );
};

export default MapCardFooter;

const styles = StyleSheet.create({
  mapFooterContainer: {
    width: "90%",
    position: "absolute",
    bottom: 16,
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: 7,
    zIndex: 1,

    // shadow
    ...Platform.select({
      ios: {
        shadowColor: "rgba(0, 0, 0, 0.15)",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  //
  // block
  detailBlock: {
    flex: 1,
    borderRightWidth: 0.4,
    borderColor: "rgba(0, 0, 0, 0.5)",
    paddingVertical: 7.5,
  },
  //
});
