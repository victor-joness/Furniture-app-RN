import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants";

const backBtn = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.backBtn}>
      <Ionicons name="chevron-back-circle" size={30} color={COLORS.primary} />
    </TouchableOpacity>
  );
};

export default backBtn;

const styles = StyleSheet.create({
  backBtn: {
    alignItems: "center",
    position: "absolute",
    zIndex: 99,
    top: SIZES.large - 10,
  },
});
