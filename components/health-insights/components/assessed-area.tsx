import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { icons } from "@/constants";
import { IAssessedArea } from "@/constants/data";

interface AssessedAreaProps {
  area: IAssessedArea;
  openAreaId: string | null;
  toggleAccordion: (id: string) => void;
  handleNavigation: (id: string) => void;
}

const AssessedArea = ({
  area,
  openAreaId,
  toggleAccordion,
  handleNavigation,
}: AssessedAreaProps) => {
  const { id, title, icon: Icon, risks } = area;

  return (
    <View key={id} style={styles.assesssedAreaItems}>
      {/* header */}
      <TouchableOpacity
        style={styles.assesssedAreaItemsHeader}
        onPress={() => toggleAccordion(id)}
      >
        {/* left icon container */}
        <View style={styles.areaIconContainer}>
          <Icon />
        </View>
        {/* left icon container */}
        <View style={styles.areaItemContext}>
          <Text style={styles.areaItemText}>{title}</Text>

          <View style={styles.areaItemSubTextContainer}>
            {risks.map((risk, index) => (
              <View key={index} style={styles.areaItemSubTextItem}>
                {index > 0 && <Text>•</Text>}
                <Text style={[styles.areaItemSubText, { color: risk.color }]}>
                  {risk.text}
                </Text>
              </View>
            ))}
          </View>
        </View>
        {/* dropdown */}
        <icons.DownwardArrowBlack
          style={[
            styles.dropdownIcon,
            openAreaId === id && { transform: [{ rotate: "180deg" }] },
          ]}
        />
      </TouchableOpacity>

      {/* footer */}
      {openAreaId === id && risks.length > 0 && (
        <View style={styles.assesssedAreaItemsFooter}>
          {risks.map((risk, index) =>
            risk.details.map((detail, detailIndex) => (
              <View
                key={`${index}-${detailIndex}`}
                style={[
                  styles.assesssedAreaItemsFooterItem,
                  { backgroundColor: risk.bgColor },
                ]}
              >
                <Text
                  style={[styles.areaFooterLeftText, { color: risk.color }]}
                >
                  {detail.text}
                </Text>
                <TouchableOpacity onPress={() => handleNavigation(id)}>
                  <Text
                    style={[styles.areaFooterRightText, { color: risk.color }]}
                  >
                    view
                  </Text>
                </TouchableOpacity>
              </View>
            ))
          )}
        </View>
      )}
    </View>
  );
};

export default AssessedArea;

const styles = StyleSheet.create({
  // item
  assesssedAreaItems: {
    borderTopColor: "rgba(0, 0, 0, 0.5)",
    borderTopWidth: 0.4,
    borderBottomWidth: 0.4,
    borderBottomColor: "rgba(0, 0, 0, 0.5)",
    backgroundColor: "rgba(238, 238, 238, 1)",
    marginBottom: 16,
  },
  // header
  assesssedAreaItemsHeader: {
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  areaIconContainer: {
    width: 36,
    height: 36,
    backgroundColor: "rgba(76, 72, 195, 0.1)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4.65,
  },
  areaItemContext: {},
  areaItemText: {
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 17.33,
    marginBottom: 6,
  },
  areaItemSubText: {
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 14,
  },
  areaItemSubTextContainer: {
    flexDirection: "row",
  },
  areaItemSubTextItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginRight: 4,
  },

  //icon
  dropdownIcon: {
    marginLeft: "auto",
    marginTop: "auto",
  },

  // footer
  assesssedAreaItemsFooter: {
    padding: 12,
  },
  assesssedAreaItemsFooterItem: {
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgba(255, 0, 42, 0.1)",
    paddingVertical: 11.5,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  areaFooterLeftText: {
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 17.15,
  },
  areaFooterRightText: {
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 16,
  },
});
