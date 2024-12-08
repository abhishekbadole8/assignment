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
  
  const UpcomingTaskCard: React.FC<{
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
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={task.cardBgImage} style={styles.cardBgImage} />
        </View>
        {task.cardLabel && (
          <View style={styles.topRightLabel}>
            <Text style={styles.topRightLabelText}>{task.cardLabel}</Text>
          </View>
        )}
  
        <View style={styles.cardTitleContainer}>
          <Text style={styles.cardTitle}>{task.title}</Text>
        </View>
  
        <View style={styles.statsContainer}>
          <View style={styles.stats}>
            <Text style={styles.semiBoldMutedText}>IMPACT:</Text>
            <Text style={styles.semiBoldText}>energy {task.energy}</Text>
            <View style={styles.divider} />
            <Text style={styles.semiBoldText}>recovery {task.recovery}</Text>
          </View>
          <Text style={styles.mutedText}>{task.benefit}</Text>
        </View>
  
        <View style={styles.cardFooter}>
          <View style={styles.cardFooterInfo}>
            <icons.BlackClock />
            <Text style={styles.mutedInfoText}>{task.time}</Text>
            <View style={styles.mutedDot} />
            <Text style={styles.mutedInfoText}>{task.duration}</Text>
            <View style={styles.mutedDot} />
            <Text style={styles.mutedInfoText}>{task.activityType}</Text>
          </View>
  
          <Pressable style={styles.startButton}>
            <Text style={styles.startButtonText}>Start</Text>
  
            <icons.ArrowRightBlack />
          </Pressable>
        </View>
      </View>
    );
  };
  
  export default UpcomingTaskCard;
  
  const styles = StyleSheet.create({
    container: {
      borderRadius: 12,
      marginHorizontal: 16,
      paddingBottom: 12,
      overflow: "hidden",
      borderWidth: 0.4,
      borderColor: "rgba(0, 0, 0, 0.5)",
      backgroundColor: "rgba(255, 255, 255, 1)",
    },
  
    topRightLabel: {
      position: "absolute",
      right: 0,
      paddingVertical: 8,
      paddingHorizontal: 24,
      backgroundColor: "rgba(9, 142, 102, 1)",
      borderBottomLeftRadius: 11,
    },
    topRightLabelText: {
      color: Colors.white,
      fontFamily: "Gilroy-SemiBold",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: 11,
    },
    imageContainer: {
      position: "absolute",
      left: "50%",
      top: 0,
    },
  
    cardBgImage: {
      height: 155,
      width: 155,
      // objectFit: "contain",
    },
    cardTitleContainer: {
      paddingVertical: 18,
      paddingHorizontal: 16,
    },
  
    cardTitle: {
      color: "rgba(9, 133, 95, 1)",
      fontFamily: "Gilroy-Bold",
      fontWeight: 400,
      fontSize: 20,
      lineHeight: 24.76,
    },
    statsContainer: {
      backgroundColor: "rgba(227, 241, 236, 1)",
      borderColor: "rgba(0, 0, 0, 0.4)",
      borderTopWidth: 0.4,
      borderBottomWidth: 0.4,
      paddingHorizontal: 16,
      gap: 7,
      paddingVertical: 10,
    },
    semiBoldMutedText: {
      color: "rgba(0, 0, 0, 0.4)",
      fontFamily: "Gilroy-SemiBold",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: 14.7,
    },
    mutedText: {
      color: "rgba(0, 0, 0, 0.6)",
      fontFamily: "Gilroy-SemiBold",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 18,
    },
    stats: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    },
    semiBoldText: {
      color: "rgba(0, 0, 0, 0.6)",
      fontFamily: "Gilroy-SemiBold",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 17.15,
    },
    divider: {
      borderColor: "rgba(0, 0, 0, 0.6)",
      borderWidth: 0.4,
      height: 13,
    },
  
    cardFooter: {
      flexDirection: "row",
      paddingHorizontal: 16,
      marginTop: 21,
      justifyContent: "space-between",
    },
  
    cardFooterInfo: {
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
    },
  
    mutedDot: {
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      width: 3,
      height: 3,
      borderRadius: "50%",
    },
  
    mutedInfoText: {
      color: "rgba(0, 0, 0, 0.4)",
      fontFamily: "Gilroy-SemiBold",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 18,
    },
  
    startButton: {
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
    },
  
    startButtonText: {
      color: "rgba(0, 0, 0, 1)",
      fontFamily: "Gilroy-Bold",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 17.33,
    },
  });
  