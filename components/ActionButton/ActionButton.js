import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import ShareIcon from "@expo/vector-icons/MaterialCommunityIcons";

const ActionButton = ({ iconName, numberOfPresses, onPress }) => {
  return (
    <TouchableOpacity
      testID="action-button"
      style={styles.touchableWrapper}
      onPress={onPress}
    >
      {iconName === "share" ? (
        <ShareIcon name={iconName} size={32} color="white" />
      ) : (
        <Icon name={iconName} size={32} color="white" />
      )}
      <Text style={{ fontSize: 12, color: "white" }}>{numberOfPresses}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableWrapper: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    marginVertical: 5,
  },
});

export default ActionButton;
