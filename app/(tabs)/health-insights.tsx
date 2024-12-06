import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import BiomarkerCard from "@/components/health-insights/components/biomarker-card";
import { icons } from "@/constants";
import { assessedAreas } from "@/constants/data";

const HealthInsights = () => {
  const [openAreaId, setOpenAreaId] = useState<number | null>(2);

  const toggleAccordion = (id: number) => {
    setOpenAreaId(openAreaId === id ? null : id);
  };

  return (
    <ScrollView style={styles.container}>
      <BiomarkerCard />

      {/* heading */}
      <View style={styles.testPendingContainer}>
        <View style={styles.testPendingLeft}>
          <View style={styles.iconContainer}>
            <icons.Funnel />
          </View>
          <Text style={styles.testPendingTitle}>
            <Text style={styles.testPendingSubTitle}>3 </Text>
            recommended tests pending
          </Text>
        </View>
        <icons.ArrowRightBlack style={{ marginRight: 7 }} />
      </View>

      {/* assessed area container */}
      <View style={styles.assesssedAreasContainer}>
        {/* <View style={styles.assesssedAreaHeader}></View> */}
        <Text style={styles.assesssedAreaHeading}>Assessed areas</Text>

        {assessedAreas.map(({ id, title, icon: Icon, risks }) => (
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
                      <Text
                        style={[styles.areaItemSubText, { color: risk.color }]}
                      >
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
                        style={[
                          styles.areaFooterLeftText,
                          { color: risk.color },
                        ]}
                      >
                        {detail.text}
                      </Text>
                      <Text
                        style={[
                          styles.areaFooterRightText,
                          { color: risk.color },
                        ]}
                      >
                        view
                      </Text>
                    </View>
                  ))
                )}
              </View>
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default HealthInsights;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 27,
  },

  // Test pending cont
  testPendingContainer: {
    padding: 16,
    backgroundColor: "rgba(238, 238, 238, 1)",
    borderWidth: 0.4,
    borderColor: "rgba(0, 0, 0, 0.1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  testPendingLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  iconContainer: {},
  testPendingTitle: {
    color: "rgba(61, 61, 61, 1)",
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19.81,
  },
  testPendingSubTitle: {
    fontSize: 14,
    lineHeight: 17.33,
  },
  //

  // assessed area
  assesssedAreasContainer: {
    borderRadius: 12,
    borderWidth: 0.4,
    borderColor: "rgba(0, 0, 0, 0.5)",
    marginHorizontal: 16,
    backgroundColor: "rgba(245, 245, 245, 1)",
    marginBottom: 48,
  },
  assesssedAreaHeading: {
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19.81,
    margin: 12,
  },
  //
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
