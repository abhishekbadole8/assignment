import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CustomText from "@/components/custom-text";

interface ImpactItem {
  id: number;
  title: string;
  description: string;
}

interface ImpactBlock {
  id: number;
  title: string;
  value: string;
}

const impactItems: ImpactItem[] = [
  {
    id: 1,
    title: "Improves Heart Health",
    description: "Boosts cardiovascular fitness and circulation.",
  },
  {
    id: 2,
    title: "Burns Calories",
    description: "Aids in weight management and energy expenditure.",
  },
  {
    id: 3,
    title: "Strengthens Muscles",
    description: "Enhances leg strength and builds endurance.",
  },
];

const impactBlocks: ImpactBlock[] = [
  { id: 1, title: "ENERGY", value: "+15%" },
  { id: 2, title: "MOOD", value: "+25%" },
  { id: 3, title: "CIRCULATION", value: "+23%" },
];

const ExpectedImpactCards = () => {
  return (
    <View style={styles.ImpactCardContainer}>
      {/* Header */}
      <View style={styles.ImpactCardHeader}>
        <CustomText fontFamily="Gilroy-Bold">Expected impact</CustomText>
      </View>

      {/* Body */}
      <View style={styles.ImpactCardBody}>
        {impactBlocks.map((block, index) => (
          <View
            key={index}
            style={[
              styles.ImpactCardBodyItem,
              impactBlocks.length - 1 === index ? { borderRightWidth: 0 } : "",
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
              {block.title}
            </CustomText>
            <CustomText
              fontFamily="Gilroy-Bold"
              fontSize={24}
              lineHeight={29.71}
              textAlign="center"
            >
              {block.value}
            </CustomText>
          </View>
        ))}
      </View>

      {/* Footer  */}
      <View style={styles.ImpactCardFooter}>
        {impactItems.map((item, index) => (
          <View
            style={[
              styles.impactItem,
              impactItems.length - 1 === index ? { marginBottom: 0 } : "",
            ]}
            key={index}
          >
            <Text style={styles.bullet}>•</Text>

            <CustomText
              fontFamily="Gilroy-SemiBold"
              fontSize={14}
              lineHeight={20}
              color="rgba(0, 0, 0, 0.8)"
              style={{ flex: 1 }}
            >
              {item.title}:{" "}
              <CustomText fontSize={14} color="rgba(0, 0, 0, 0.5)">
                {item.description}
              </CustomText>
            </CustomText>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ExpectedImpactCards;

const styles = StyleSheet.create({
  ImpactCardContainer: {
    borderWidth: 0.4,
    borderColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 12,
    marginBottom: 75,
  },
  //
  // header
  ImpactCardHeader: {
    padding: 12,
  },
  //
  // body
  ImpactCardBody: {
    borderWidth: 0.4,
    borderColor: "rgba(0, 0, 0, 0.5)",
    flexDirection: "row",
    width: "100%",
  },
  ImpactCardBodyItem: {
    flex: 1,
    borderRightWidth: 0.4,
    borderColor: "rgba(0, 0, 0, 0.5)",
    paddingVertical: 7,
  },
  //
  // footer
  ImpactCardFooter: {
    paddingTop: 12,
    paddingBottom: 12,
  },
  impactItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 6,
    paddingHorizontal: 8,
    marginBottom: 12,
  },
  bullet: {
    fontSize: 16,
    marginRight: 2,
  },
});
