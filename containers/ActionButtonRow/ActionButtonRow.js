import React from "react";
import { Alert, View, StyleSheet } from "react-native";
import ActionButton from "../../components/ActionButton/ActionButton";
import Avatar from "../../components/Avatar/Avatar";

const ActionButtonRow = (imageUrl) => {
  return (
    <View testID="action-button-row" style={styles.container}>
      <Avatar imageUrl={imageUrl} />
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
    paddingLeft: 20,
    borderRadius: 20,
    elevation: 5,
  },
});

export default ActionButtonRow;
