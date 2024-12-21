import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants";

interface promotionItem {
  id: number;
  title: string;
  subtitle: string;
  Icon: string;
}

const promotions: promotionItem[] = [
  {
    id: 1,
    title: "Coffee shop",
    subtitle: "2mins off route",
    Icon: icons.Cup,
  },
  {
    id: 2,
    title: "Park",
    subtitle: "on route",
    Icon: icons.Tree,
  },
];

const MapCardFooter = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <View style={styles.mapFooterContainer}>
      <TouchableOpacity
        onPress={() => setIsExpanded(!isExpanded)}
        activeOpacity={0.8}
        style={styles.mapFooter}
      >
        <Text style={styles.footerTitleText}>ALONG YOUR ROUTE</Text>

        {!isExpanded && (
          <Text style={styles.footerDescriptionText}>
            Park, Coffee shop, bakery...
          </Text>
        )}

        <icons.DownwardArrowBlack
          style={{ transform: [{ rotate: isExpanded ? "180deg" : "0deg" }] }}
        />
      </TouchableOpacity>

      {isExpanded && (
        <View style={styles.promotionList}>
          {promotions.map((promotion) => (
            <View style={styles.promotionItem} key={promotion.id}>
              <View style={styles.promotionLeft}>
                <promotion.Icon />
                <View>
                  <Text style={styles.promotionTitle}>{promotion.title}</Text>
                  <Text style={styles.promotionSubTitle}>
                    {promotion.subtitle}
                  </Text>
                </View>
              </View>
              {/* right */}
              <View style={styles.promotionRight}>
                <Text style={styles.promotionDetails}>details</Text>
                <icons.ArrowRightBlack />
              </View>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default MapCardFooter;

const styles = StyleSheet.create({
  mapFooterContainer: {},
  // footer
  mapFooter: {
    paddingTop: 7,
    paddingBottom: 11,
    paddingRight: 10,
    paddingLeft: 12,
    borderTopWidth: 0.4,
    borderColor: "rgba(0, 0, 0, 0.4)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  footerTitleText: {
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 14.7,
    color: "rgba(95, 95, 95, 1)",
  },
  footerDescriptionText: {
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 12,
    // lineHeight: 11,
    color: "rgba(140, 140, 140, 1)",
  },
  //
  promotionList: {},
  // promotion list
  promotionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 0.4,
    borderColor: "rgba(204, 204, 204, 1)",
    padding: 12,
  },
  promotionLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  promotionTitle: {
    color: "rgba(56, 56, 56, 1)",
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 17.33,
    letterSpacing: 0.03,
    marginBottom: 4,
  },
  promotionSubTitle: {
    color: "rgba(140, 140, 140, 1)",
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 11,
  },
  //
  // right
  promotionRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  promotionDetails: {
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 17.33,
  },
});
