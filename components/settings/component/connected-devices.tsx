import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { icons } from "@/constants";
import CustomButton from "@/components/custom-button";
import { Colors } from "@/constants/Colors";

const connectedDevices = [
  {
    id: 1,
    name: "Apple Watch Series 8",
    batteryStatus: "98% battery",
    isConnected: true,
  },
  {
    id: 2,
    name: "Samsung Galaxy Watch 5",
    batteryStatus: "0% battery",
    isConnected: false,
  },
  {
    id: 3,
    name: "Fitbit Versa 3",
    batteryStatus: "75% battery",
    isConnected: true,
  },
];

const ConnectedDevices = () => {
  return (
    <View style={styles.section}>
      {connectedDevices.map((device, index) => (
        <TouchableOpacity
          key={device.id}
          style={[
            styles.listItem,
            index === connectedDevices.length - 1 && { borderBottomWidth: 0 },
          ]}
          activeOpacity={0.75}
        >
          {/* bluetooth Icon cont */}
          <View
            style={[
              styles.listIconContainer,
              !device.isConnected && {
                backgroundColor: "rgba(172, 172, 172, 0.2)",
              },
            ]}
          >
            {device.isConnected ? (
              <icons.BluetoothActive style={styles.listIcon} />
            ) : (
              <icons.BluetoothInActive style={styles.listIcon} />
            )}
          </View>

          <View style={styles.listTextContainer}>
            <Text style={styles.listText}>{device.name}</Text>
            <View style={styles.listTextBatteryContainer}>
              {device.isConnected ? (
                <>
                  <icons.Battery style={styles.batteryIcon} />
                  <Text style={styles.batteryStatusTitle}>
                    {device.batteryStatus}
                  </Text>
                </>
              ) : (
                <Text style={styles.batteryStatusTitle}>disconnected</Text>
              )}
            </View>
          </View>

          <icons.ArrowRightBlack style={styles.arrowIcon} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ConnectedDevices;

const styles = StyleSheet.create({
  section: {
    borderRadius: 12,
    borderWidth: 0.4,
    borderColor: Colors.border.secondary,
    paddingVertical: 12,
    paddingHorizontal: 15.3,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 0.4,
    borderBottomColor: Colors.border.secondary,
  },
  listIconContainer: {
    width: 24,
    height: 24,
    padding: 4.31,
    backgroundColor: "rgba(18, 165, 73, 0.2)",
    borderRadius: 100,
    alignItems: "center",
    marginRight: 16,
  },
  listIcon: {
    tintColor: Colors.black,
  },
  listTextContainer: {
    flex: 1,
    flexDirection: "column",
    gap: 4,
  },

  // 1st row
  listText: {
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 0.25,
    color: Colors.text.third,
  },
  // 2nd row
  listTextBatteryContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  batteryIcon: {
    width: 16.5,
    height: 8,
    tintColor: "rgba(0, 0, 0, 0.25)",
  },
  batteryStatusTitle: {
    fontFamily: "Gilroy-SemiBold",
    fontSize: 11.52,
    fontWeight: 400,
    lineHeight: 15.36,
    letterSpacing: 0.48,
    color: "rgba(0, 0, 0, 0.28)",
  },

  // Arrow
  arrowIcon: {
    width: 19.2,
    height: 19.2,
    marginLeft: "auto",
    tintColor: Colors.black,
  },
});
