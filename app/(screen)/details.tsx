import HealthStats from "@/components/details/components/health-stats";
import TabButton from "@/components/details/components/tab-button";
import TimeLabelCard from "@/components/details/components/time-label-card";
import TimelineHeader from "@/components/details/components/timeline-header";
import TimelineItem from "@/components/details/components/timeline-item";
import { icons } from "@/constants";
import { chartData2 } from "@/constants/chart";
import { Colors } from "@/constants/Colors";
import { analytics, timeFilters, timelineData } from "@/constants/data";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
import { LineChart } from "react-native-gifted-charts";

const TOP_CONTAINER_HEIGHT = 355;

enum TAB_BUTTON {
  JOURNEY = "JOURNEY",
  OVERVIEW = "OVERVIEW",
}

const { width } = Dimensions.get("window");
const chartWidth = width;

const Analytics = () => {
  const [activeTab, setActiveTab] = useState(TAB_BUTTON.OVERVIEW);
  const [activeTimeFilter, setActiveTimeFilter] = useState("1m");
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleTimeLabelClick = (id: string) => {
    setActiveTimeFilter(id);
  };

  const handleTabButton = (title: string) => {
    setActiveTab(
      title === "journey" ? TAB_BUTTON.JOURNEY : TAB_BUTTON.OVERVIEW
    );
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor="transparent"
      />
      {/* Top container */}
      <LinearGradient
        colors={["rgba(29, 173, 115, 1)", "rgba(5, 150, 105, 1)"]}
        start={[0.25, 0]}
        end={[0.67, 1]}
        style={styles.topContainer}
      >
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <icons.LeftArrow style={styles.backIcon} />
        </TouchableOpacity>

        {/* Area Chart */}
        <View style={styles.areaChartContainer}>
          <LineChart
            disableScroll
            parentWidth={chartWidth}
            startOpacity={0.1}
            endOpacity={0.2}
            color="rgba(217, 217, 217, 1)"
            areaChart
            curved
            hideDataPoints
            hideAxesAndRules
            data={chartData2}
            adjustToWidth
            hideYAxisText
            initialSpacing={0}
            height={84.91}
            thickness={1}
            yAxisThickness={0}
            yAxisLabelWidth={0}
            xAxisThickness={0}
            xAxisLabelsHeight={0}
          />
        </View>

        {/* Header text context*/}
        <View style={styles.scoreHeaderContainer}>
          <View style={styles.healthScoreContainer}>
            <Text style={styles.healthScoreValue}>78</Text>
            <Text style={styles.healthScoreMax}>/100</Text>
          </View>

          <View>
            <Text style={styles.healthScoreLabel}>My Health Score</Text>
            <View style={styles.scoreImprovementContainer}>
              <icons.ArrowTrendUpWhite />
              <Text style={styles.scoreImprovementText}>
                Improving steadily
              </Text>
            </View>
          </View>
        </View>

        {/* Timeline labels */}
        <View style={styles.timeFilterContainer}>
          {timeFilters.map((filter) => (
            <TimeLabelCard
              key={filter.id}
              filter={filter}
              handleTimeLabelClick={handleTimeLabelClick}
              activeTimeLabel={activeTimeFilter}
            />
          ))}
        </View>

        {/* Analytics */}
        <View style={styles.analyticsContainer}>
          {analytics.map((info, index) => (
            <View
              key={info.id}
              style={[
                styles.infoBlock,
                analytics.length - 1 === index && { borderRightWidth: 0 },
              ]}
            >
              <View style={styles.infoContentContainer}>
                <Text style={styles.infoTitle}>{info.title}</Text>
                <View style={styles.infoCardValueContainer}>
                  <Text style={styles.infoValue}>{info.value}</Text>
                  <info.icon />
                </View>
              </View>
            </View>
          ))}
        </View>
      </LinearGradient>

      <View style={styles.tabContainerWrapper}>
        <View style={styles.tabContainerInsideWrapper}>
          {/* tab container header */}
          <View style={styles.tabContainer}>
            <View style={styles.tabWrapper}>
              <TabButton
                title="overview"
                handleTabButton={handleTabButton}
                isActive={activeTab === TAB_BUTTON.OVERVIEW}
              />

              {/* Vertical Line */}
              <View style={styles.verticalLine} />

              <TabButton
                title="journey"
                handleTabButton={handleTabButton}
                isActive={activeTab === TAB_BUTTON.JOURNEY}
              />
            </View>
          </View>

          {activeTab === TAB_BUTTON.JOURNEY && (
            <>
              <TimelineHeader activeTimeFilter={activeTimeFilter} />

              <View style={styles.timelineContainer}>
                {timelineData.map((item, index) => (
                  <TimelineItem
                    key={item.id}
                    date={item.date}
                    title={item.title}
                    description={item.description}
                    isLastItem={index === timelineData.length - 1}
                  />
                ))}
              </View>
            </>
          )}

          {activeTab === TAB_BUTTON.OVERVIEW && (
            <View>
              <HealthStats />
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default Analytics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  topContainer: {
    backgroundColor: "#1DAD73",
    // height: TOP_CONTAINER_HEIGHT,
  },
  //
  // Back Icon
  backButton: {
    marginTop:
      Platform.OS === "android" ? (StatusBar.currentHeight || 44) + 17 : 17,
    marginLeft: 15,
    zIndex: 10,
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: Colors.black,
  },
  //
  // Area charts
  areaChartContainer: {
    position: "absolute",
    top: 135,
    left: 0,
    width: "100%",
  },
  //
  //

  // header
  scoreHeaderContainer: {
    marginLeft: 24,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 1,
    zIndex: 99,
  },
  healthScoreContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  healthScoreValue: {
    color: "rgba(245, 245, 245, 1)",
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 48,
    lineHeight: 59.42,
  },
  healthScoreMax: {
    color: "rgba(245, 245, 245, 1)",
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 35.42,
  },
  //
  healthScoreLabel: {
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19.81,
    letterSpacing: 0.03,
  },
  // Icon container
  scoreImprovementContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  scoreImprovementText: {
    color: "rgba(255, 255, 255, 0.7)",
    fontFamily: "Gilroy-Medium",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 16,
  },
  //

  // Time line COntainer
  timeFilterContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 84.2,
    paddingHorizontal: 16,
    paddingTop: 20.09,
    paddingBottom: 12,
    backgroundColor: "rgba(255, 255, 255, 0.17)",
  },
  //

  // Analytics
  analyticsContainer: {
    flexDirection: "row",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    paddingTop: 8,
    paddingBottom: 7,
  },
  infoBlock: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 0.5,
    borderColor: "rgba(255, 255, 255, 0.2)",
    paddingVertical: 3,
  },
  infoContentContainer: {
    alignItems: "flex-start",
  },
  infoTitle: {
    color: "rgba(255, 255, 255, 0.6)",
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 11.12,
    lineHeight: 13.62,
    marginBottom: 2,
  },
  infoCardValueContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoValue: {
    color: Colors.white,
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 20,
    lineHeight: 24.76,
    letterSpacing: -0.03,
  },
  //

  // screen body
  tabContainerWrapper: {
    padding: 16,
    paddingBottom: 132,
  },
  tabContainerInsideWrapper: {
    borderWidth: 0.4,
    borderColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 12,
  },

  // tab container
  tabContainer: {
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  tabWrapper: {
    backgroundColor: "rgba(0, 0, 0, 1)",
    flexDirection: "row",
    gap: 8,
    alignSelf: "center",
    borderRadius: 25,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#000",
    width: "65%",
  },

  // vertical line
  verticalLine: {
    width: 0.5,
    backgroundColor: "rgba(238, 238, 238, 0.4)",
    height: "auto",
    marginVertical: 10,
  },
  //

  // footer

  // body
  timelineContainer: {
    paddingVertical: 17,
  },
});
