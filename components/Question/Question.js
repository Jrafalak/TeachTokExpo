import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Question = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text>
        <Text style={styles.text}>{text}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomLeftRadius: 500,
    borderBottomRightRadius: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    maxWidth: "65%",
  },
  text: {
    color: "#fff",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 50,
    margin: 10,
    fontSize: 20,
    // borderBottomLeftRadius: 50,
    // borderBottomRightRadius: 50,
    // borderTopLeftRadius: 50,
    // borderTopRightRadius: 50,
  },
});

export default Question;
