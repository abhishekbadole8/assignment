import { View, StyleSheet, StatusBar } from "react-native";
import React from "react";
import { icons } from "@/constants";
import CustomText from "@/components/custom-text";
import GoalCard from "@/components/task-details/components/goal-card";

const TaskDetails = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#4740CA" />

      {/* Top conatainer */}
      <View style={styles.headerContainer}>
        <icons.GirlWalking style={styles.girlIcon} />

        <View style={styles.headerContentContainer}>
          <View style={styles.cardTitleContainer}>
            <CustomText
              fontFamily="Gilroy-Bold"
              fontSize={20}
              color="#fff"
              style={{ marginBottom: 2 }}
            >
              Afternoon walk
            </CustomText>

            <View style={styles.cardFooterInfo}>
              <icons.GreyClock />
              <CustomText style={styles.mutedInfoText}>now</CustomText>
              <View style={styles.mutedDot} />
              <CustomText style={styles.mutedInfoText}>10mins</CustomText>
              <View style={styles.mutedDot} />
              <CustomText style={styles.mutedInfoText}>outdoor</CustomText>
            </View>
          </View>

          <View style={styles.weatherBlock}>
            <icons.SunOutlined
              style={{ fontSize: 14, width: 14, height: 14 }}
            />
            <CustomText
              fontFamily="Gilroy-SemiBold"
              fontSize={14}
              letterSpacing={0.03}
              color="#fff"
            >
              28°C
            </CustomText>
          </View>
        </View>
      </View>

      <View style={styles.contentContainer}>
        {/* Goal Card */}
        <GoalCard />
      </View>
    </View>
  );
};

export default TaskDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  //
  // header container
  headerContainer: {
    paddingBottom: 21,
    paddingHorizontal: 16,
    backgroundColor: "rgba(71, 64, 202, 1)", // #4740CA
  },
  girlIcon: {
    marginBottom: 8,
  },
  headerContentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  //
  // title content
  cardTitleContainer: {},
  //
  cardFooterInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  mutedDot: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    width: 3,
    height: 3,
    borderRadius: "50%",
  },
  mutedInfoText: {
    color: "rgba(255, 255, 255, 0.7)",
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 18,
  },
  //
  // weather block
  weatherBlock: {
    // maxHeight:30,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: "rgba(64, 58, 182, 1)", // #403AB6
  },
  //
  // content container
  contentContainer: {
    flex: 1,
    padding: 16,
  },
});
