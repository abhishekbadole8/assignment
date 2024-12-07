import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { images, icons } from "@/constants";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "expo-router";

const ProfileHeader = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground
      source={images.backgroundPrint}
      style={styles.header}
      imageStyle={styles.backgroundImage}
    >
      {/* Here Back Icon */}
      <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
        <icons.LeftArrow style={styles.backIcon} />
      </TouchableOpacity>

      <Image source={images.userProfile} style={styles.profileImage} />
      <Text style={styles.name}>Mark Maurice</Text>
      <Text style={styles.memberSince}>MEMBER SINCE DEC'24</Text>
    </ImageBackground>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.black,
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 24,
    elevation: 4,
    paddingTop:
      Platform.OS === "android" ? (StatusBar.currentHeight || 44) + 30 : 74,
  },
  backgroundImage: {
    resizeMode: "cover",
    flex: 1,
  },
  backButton: {
    position: "absolute",
    top: Platform.OS === "android" ? (StatusBar.currentHeight || 44) + 17 : 17, // Adjust for Android status bar height
    left: 15,
    zIndex: 10,
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: Colors.white,
  },
  profileImage: {
    width: 104,
    height: 104,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#000",
    marginBottom: 6,
  },
  name: {
    fontFamily: "Recoleta",
    fontSize: 32,
    fontWeight: 500,
    lineHeight: 43.52,
    letterSpacing: 0.43,
    color: Colors.white,
  },
  memberSince: {
    fontFamily: "Gilroy-SemiBold",
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 17.15,
    letterSpacing: 0.43,
    color: "rgba(255, 255, 255, 0.7)",
  },
});
