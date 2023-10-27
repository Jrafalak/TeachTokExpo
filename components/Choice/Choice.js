import React from "react";
import { Text, TouchableHighlight, StyleSheet, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Choice = ({ text, isCorrect, isSelected, onPress }) => {
  const icon = isCorrect ? "thumbs-up" : "thumbs-down";
  const color = isSelected ? (isCorrect ? "green" : "red") : "black";

  var touchProps = {
    activeOpacity: 0.5,
    underlayColor: isCorrect ? "green" : "red", // <-- "backgroundColor" will be always overwritten by "underlayColor"
    style: styles.container,
    onPress: () => console.log("HELLO"), // <-- "onPress" is apparently required
  };

  return (
    <TouchableHighlight {...touchProps}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>{text}</Text>
        <FontAwesome name={icon} size={24} color={color} />
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    padding: 8,
    marginVertical: 4,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  correct: {
    backgroundColor: "green",
  },
  incorrect: {
    backgroundColor: "red",
  },
  text: {
    marginLeft: 8,
    fontSize: 16,
    color: "white",
  },
});

export default Choice;
