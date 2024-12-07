import { icons } from "@/constants";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

interface HealthCardProps {
  title: string;
  score: number;
  low: number;
  high: number;
  details: { id: string; label: string; value: number }[];
  expanded: boolean;
  onToggle: () => void;
}

const HealthCard = (props: HealthCardProps) => {
  const { title, score, low, high, details, expanded, onToggle } = props;

  return (
    <View style={styles.card}>
      {/* Header */}
      <TouchableOpacity onPress={onToggle} style={styles.accordionHeader}>
        <View style={styles.accordionHeaderLeftContainer}>
          <Text style={styles.accordionHeaderTitle}>{props.title}</Text>
          <icons.ArrowTrendUpBlack />
        </View>
        <View style={styles.accordionHeaderRightContainer}>
          <Text style={styles.accordionHeaderSubTitle}>breakdown</Text>
          {expanded ? <icons.UpwardArrowBlack /> : <icons.DownwardArrowBlack />}
        </View>
      </TouchableOpacity>

      {/* Score Bar */}
      <View style={styles.scoreContainer}>
        <View style={styles.scoreBar}>
          <View style={[styles.scoreFill, { width: `${score}%` }]} />
        </View>

        {/* Top score label */}
        <View style={[styles.currentScore]}>
          <View style={[styles.currentScoreC, { marginLeft: `${score}%` }]}>
            <Text style={styles.scoreValue}>{score}</Text>
            <Text style={styles.scoreLabel}>CURRENT</Text>
          </View>

          <View style={[styles.iconCont, { marginLeft: `${score}%` }]}>
            <icons.Polygon />
          </View>
        </View>

        {/* Score range */}
        <View style={styles.scoreRange}>
          <Text style={styles.rangeText}>
            52W LOW{"\n"}
            <Text style={styles.rangeValue}>{low}</Text>
          </Text>

          <Text style={[styles.rangeText, { textAlign: "right" }]}>
            52W HIGH{"\n"}
            <Text style={styles.rangeValue}>{high}</Text>
          </Text>
        </View>
      </View>

      {/* Breakdown Section */}
      {expanded && props.details.length > 0 && (
        <>
          {/* Header */}
          <View style={styles.breakdownHeader}>
            <View style={styles.horizontalLine} />
            <Text style={styles.breakdownTitle}>breakdown</Text>
            <View style={styles.horizontalLine} />
          </View>

          {/* <View> */}
          {/* Score blocks */}
          <FlatList
            data={props.details}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.breakdownItem}>
                <Text style={styles.breakdownLabel}>{item.label}</Text>
                <Text style={styles.breakdownValue}>{item.value}</Text>
              </View>
            )}
          />
          {/* </View> */}
        </>
      )}
    </View>
  );
};

const HealthStats = () => {
  const data = [
    {
      id: 1,
      title: "Physical health",
      score: 75,
      low: 57,
      high: 97,
      details: [
        { id: "1", label: "STRENGTH", value: 57 },
        { id: "2", label: "ENDURANCE", value: 64 },
        { id: "3", label: "DIET", value: 96 },
        { id: "4", label: "HYDRATION", value: 96 },
      ],
    },
    { id: 2, title: "Vital signs", score: 60, low: 46, high: 75, details: [] },
    { id: 3, title: "Mental", score: 68, low: 60, high: 70, details: [] },
  ];

  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setExpandedCard((prev) => (prev === id ? null : id));
  };

  return (
    <View style={styles.container}>
      {data.map((item) => (
        <HealthCard
          key={item.id}
          title={item.title}
          score={item.score}
          low={item.low}
          high={item.high}
          details={item.details}
          expanded={expandedCard === item.id}
          onToggle={() => toggleCard(item.id)}
        />
      ))}
    </View>
  );
};

export default HealthStats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: "rgba(238, 238, 238, 1)",
    marginBottom: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  //
  // Accordion header
  accordionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 9.5,
    paddingLeft: 12,
    paddingRight: 16,
    borderBottomWidth: 0.4,
    borderTopColor: "rgba(0, 0, 0, 0.7)",
    borderBottomColor: "rgba(0, 0, 0, 0.2)",
    backgroundColor: "rgba(238, 238, 238, 1)",
  },
  accordionHeaderLeftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  accordionHeaderRightContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  accordionHeaderTitle: {
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Gilroy-Bold",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 19.81,
    letterSpacing: -0.03,
  },
  accordionHeaderSubTitle: {
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 14.7,
  },
  //
  // score range
  scoreContainer: {
    paddingHorizontal: 16,
  },
  scoreBar: {
    height: 5,
    backgroundColor: "rgba(177, 213, 201, 1)",
    borderRadius: 50,
    overflow: "hidden",
    marginBottom: 6,
    marginTop: 46,
  },
  scoreFill: {
    height: "100%",
    backgroundColor: "rgba(15, 159, 109, 1)",
    borderRadius: 3,
  },
  // Label
  currentScore: {
    position: "absolute",
    top: 6,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,
    paddingRight: 15,
  },
  currentScoreC: {
    backgroundColor: "rgba(15, 159, 109, 1)",
    paddingHorizontal: 4,
    paddingVertical: 3,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginBottom: 4,
  },
  scoreValue: {
    color: "rgba(238, 238, 238, 1)",
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 17.33,
  },
  scoreLabel: {
    color: "rgba(238, 238, 238, 0.8)",
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 12.38,
  },
  iconCont: {},
  //
  // score range context
  scoreRange: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rangeText: {
    color: "rgba(0, 0, 0, 0.6)",
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 12.25,
    marginBottom: 4,
  },
  rangeValue: {
    color: "rgba(95, 95, 95, 1)",
    fontSize: 14,
    lineHeight: 17.15,
  },
  //
  // breakdown heading
  breakdownHeader: {
    marginTop: 6,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 65,
  },
  horizontalLine: {
    flex: 1,
    width: "50%",
    height: 1,
    backgroundColor: "#ccc",
  },
  breakdownTitle: {
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 17.15,
    letterSpacing: 0.03,
    textAlign: "center",
    marginHorizontal: 6,
  },
  //
  // breakdown box - item
  breakdownItem: {
    flex: 1,
    alignItems: "center",
    paddingTop: 9.5,
    paddingBottom: 5.5,
    borderWidth: 0.4,
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderLeftColor: "rgba(0, 0, 0, 0)",
  },
  breakdownLabel: {
    color: "rgba(95, 95, 95, 1)",
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 14.7,
    marginBottom: 4,
  },
  breakdownValue: {
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 24,
    lineHeight: 29.71,
    letterSpacing: 0.03,
  },
  //
});
