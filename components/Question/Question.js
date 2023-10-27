import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

const Question = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.outterText}>
        <Text testID="question-text" style={styles.text}>
          {text}
        </Text>
      </Text>
    </View>
  );
};

//TODO: need to make test highlight have borderradius
const styles = StyleSheet.create({
  container: {
    marginTop: 90,
    padding: 15,
    height: 200,
    width: "100%",
  },
  outterText: {
    maxWidth: "65%",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
});

export default Question;
