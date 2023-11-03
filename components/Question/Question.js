import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

const Question = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text testID="question-text" style={styles.text}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 90,
    padding: 15,
    height: 200,
    width: "100%",
  },
  text: {
    padding: 10,
    maxWidth: "65%",
    color: "#fff",
    fontSize: 20,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: 10,
    overflow: "hidden",
  },
});

export default Question;
