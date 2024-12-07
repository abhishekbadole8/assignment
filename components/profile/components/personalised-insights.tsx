import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import { icons, images } from "@/constants";
import InsightCard from "./insight-card";
import InsightCardLast from "./insight-card-last";

type Insight = {
  id: number;
  title: string;
  tip: string;
  insight1: {
    title: string;
    value: string;
    icon: JSX.Element;
  };
  insight2: {
    title: string;
    value: string;
    icon: JSX.Element;
  };
};

const CARD_WIDTH = 283;

const insights: Insight[] = [
  {
    id: 1,
    title: "Better sleep quality on days with evening meditation",
    tip: "10min meditation before bed suggested.",
    insight1: {
      title: "STRESS LEVELS",
      value: "23",
      icon: icons.ArrowTrendDownWhite,
    },
    insight2: {
      title: "ENERGY LEVELS",
      value: "56",
      icon: icons.ArrowTrendUpWhite,
    },
  },
  {
    id: 2,
    title: "Better sleep quality on days with evening meditation",
    tip: "10min meditation before bed suggested.",
    insight1: {
      title: "STRESS LEVELS",
      value: "23",
      icon: icons.ArrowTrendDownWhite,
    },
    insight2: {
      title: "ENERGY LEVELS",
      value: "56",
      icon: icons.ArrowTrendUpWhite,
    },
  },
];

const PersonalisedInsights = () => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>PERSONALISED INSIGHTS</Text>
      <Text style={styles.cardSubTitle}>
        Learn what affects your body. Explore all insights.
      </Text>

      <View>
        <FlatList
          data={insights}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <InsightCard insight={item} />}
          ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          ListFooterComponent={<InsightCardLast />}
          ListFooterComponentStyle={{ marginLeft: 16 }}
        />
      </View>
    </View>
  );
};

export default PersonalisedInsights;

const styles = StyleSheet.create({
  // Cards
  cardContainer: {
    // paddingLeft: 16,
    marginBottom: 24,
  },
  cardTitle: {
    color: "rgba(39, 39, 39, 1)",
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 20,
    marginLeft: 16,
  },
  cardSubTitle: {
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 10,
    marginLeft: 16,
  },
});
