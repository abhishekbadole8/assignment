import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { icons } from "@/constants";

interface audioCompanionItem {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
}

interface audioCompanionProps {
  audioCompanionItems: audioCompanionItem[];
  activeCompanionId: number;
  handleAudioCompanion: (id: number) => void;
}

const AudioCompanion = ({
  audioCompanionItems,
  activeCompanionId,
  handleAudioCompanion,
}: audioCompanionProps) => {
  return (
    <View style={styles.walkingCompanionContainer}>
      <Text style={styles.walkingCompanionTitle}>AUDIO COMPANION</Text>

      <View style={styles.walkingCompanion}>
        {audioCompanionItems.map((item) => {
          const isActive = activeCompanionId === item.id;

          return (
            <TouchableOpacity
              style={[styles.companionList, isActive ? styles.activeList : ""]}
              key={item.id}
              onPress={() => handleAudioCompanion(item.id)}
            >
              <View style={styles.companion}>
                <item.icon />
                <View style={styles.companionTextContainer}>
                  <Text style={styles.companionTitle}>{item.title}</Text>
                  {isActive ? (
                    <View style={styles.companionSubTitlePlaylist}>
                      <Text
                        style={[
                          styles.companionSubTitle,
                          { color: "rgba(0, 0, 0, 1)" },
                        ]}
                      >
                        {item.subtitle}
                      </Text>
                      <icons.ArrowRightBlack />
                    </View>
                  ) : (
                    <Text style={styles.companionSubTitle}>
                      {item.subtitle}
                    </Text>
                  )}
                </View>
              </View>

              {/* play-pause */}
              {isActive ? (
                <>
                  <View style={styles.waveIcon}>
                    <icons.SoundWave />
                  </View>
                  <icons.Pause />
                </>
              ) : (
                <icons.Play />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default AudioCompanion;

const styles = StyleSheet.create({
  // walking companion
  walkingCompanionContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  walkingCompanionTitle: {
    color: "rgba(39, 39, 39, 1)",
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 11.5,
  },
  walkingCompanion: {},
  companionList: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 0.4,
    borderColor: "rgba(0,0,0,0.3)",
    borderRadius: 12,
    paddingVertical: 13,
    paddingHorizontal: 9,
    marginBottom: 8,
  },
  // active list
  activeList: {
    backgroundColor: "rgba(71, 64, 202, 0.1)",
    borderWidth: 0.8,
    borderColor: "rgba(71, 64, 202, 1)",
  },
  companion: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  //
  // text container
  companionTextContainer: {},
  companionTitle: {
    color: "rgba(56, 56, 56, 1)",
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 17.33,
    letterSpacing: 0.03,
    marginBottom: 4,
  },
  companionSubTitle: {
    color: "rgba(140, 140, 140, 1)",
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 11,
  },
  companionSubTitlePlaylist: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  waveIcon: {},
  //
});
