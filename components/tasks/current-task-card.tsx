import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { icons, images } from "@/constants";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import CustomButton from "../custom-button";
import { router } from "expo-router";

const CurrentTaskCard: React.FC<{
  task: {
    title: string;
    cardLabel?: string;
    energy: string;
    recovery: string;
    benefit: string;
    time: string;
    duration: string;
    activityType: string;
    cardBgImage: ImageSourcePropType;
  };
}> = ({ task }) => {
  return (
    <LinearGradient
      colors={["rgba(7, 166, 117, 1)", "rgba(5, 135, 95, 1)"]}
      start={[1, 1]}
      end={[1, 1]}
      style={styles.container}
    >
      <View style={styles.imageContainer}>
        <icons.YogaGirl />
      </View>

      {/* Text context */}
      <View style={styles.cardTitleContainer}>
        <Text style={styles.cardTitle}>Morning sunlight</Text>
      </View>

      {/* mode info blur block */}
      <BlurView intensity={24} style={styles.blurContainer}>
        <View style={styles.stats}>
          <Text style={styles.semiBoldMutedText}>IMPACT:</Text>

          <View style={styles.statsValues}>
            <Text style={styles.semiBoldText}>energy +15%</Text>

            <View style={styles.divider} />

            <Text style={styles.semiBoldText}>recovery +25%</Text>
          </View>
        </View>

        <Text style={styles.mutedText}>Enhances vitamin D absorption</Text>
      </BlurView>

      {/* footer */}
      <View style={styles.cardFooter}>
        <View style={styles.cardFooterInfo}>
          <icons.GreyClock />
          <Text style={styles.mutedInfoText}>7:00 am</Text>
          <View style={styles.mutedDot} />
          <Text style={styles.mutedInfoText}>10 mins</Text>
          <View style={styles.mutedDot} />
          <Text style={styles.mutedInfoText}>outdoor</Text>
        </View>

        {/* button */}
        <CustomButton title="start" handlePress={() => router.push('/(screen)/walking')} />
      </View>

      {/* corner tag */}
      {task.cardLabel && (
        <View style={styles.topLeftLabel}>
          <Text style={styles.topLeftLabelText}>{task.cardLabel}</Text>
        </View>
      )}
    </LinearGradient>
  );
};

export default CurrentTaskCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    marginHorizontal: 16,
    overflow: "hidden",
    marginBottom: 16,

    // shadow
    ...Platform.select({
      ios: {
        shadowColor: "rgba(0, 0, 0, 0.4)",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 6,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  //
  // image container
  imageContainer: {
    position: "absolute",
    right: 26.31,
  },
  //
  // context
  cardTitleContainer: {
    marginTop: 27,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  cardTitle: {
    color: "rgba(245, 245, 245, 1)",
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 20,
    lineHeight: 24.76,
  },
  //
  // Blur container
  blurContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    gap: 7,
  },
  stats: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  semiBoldMutedText: {
    color: "rgba(245, 245, 245, 0.6)",
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 14.7,
  },
  statsValues: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  semiBoldText: {
    color: Colors.white,
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 17.15,
  },
  // divider
  divider: {
    borderColor: "rgba(245, 245, 245, 0.6)",
    borderWidth: 0.4,
    height: 13,
  },
  //
  mutedText: {
    color: "rgba(255, 255, 255, 0.7)",
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 18,
  },
  //
  // footer
  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 17,
    paddingVertical: 9,
    paddingHorizontal: 12,
  },
  cardFooterInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  // dot
  mutedDot: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    width: 3,
    height: 3,
    borderRadius: "50%",
  },
  //
  mutedInfoText: {
    color: "rgba(255, 255, 255, 0.7)",
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 18,
  },
  //
  //
  // corner tag
  topLeftLabel: {
    position: "absolute",
    paddingVertical: 8,
    paddingHorizontal: 24,
    backgroundColor: "rgba(9, 142, 102, 1)",
    borderBottomRightRadius: 11,
  },
  topLeftLabelText: {
    color: "rgba(245, 245, 245, 1)",
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 11,
    textAlign: "center",
  },
});
