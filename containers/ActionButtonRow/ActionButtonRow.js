import React from "react";
import { Alert, View, StyleSheet } from "react-native";
import ActionButton from "../../components/ActionButton/ActionButton";

const ActionButtonRow = () => {
  return (
    <View style={styles.container}>
      <ActionButton
        iconName="heart"
        numberOfPresses="87"
        onPress={() => {
          Alert.alert("Liked!");
        }}
      />
      <ActionButton
        iconName="chatbubble-ellipses-sharp"
        numberOfPresses="2"
        onPress={() => {
          Alert.alert("Commented!");
        }}
      />
      <ActionButton
        iconName="bookmark"
        numberOfPresses="203"
        onPress={() => {
          Alert.alert("Bookmarked!");
        }}
      />
      <ActionButton
        iconName="share"
        numberOfPresses="17"
        onPress={() => {
          Alert.alert("Shared!");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingLeft: 20,
    borderRadius: 20,
    elevation: 5,
  },
});

export default ActionButtonRow;
