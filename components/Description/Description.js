import React from "react";
import { Text, StyleSheet, View } from "react-native";

const Description = ({ author, description }) => {
  return (
    <View>
      <Text style={styles.author}>{author}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  author: {
    fontWeight: "600",
    fontSize: 16,
    color: "white",
    marginBottom: 5,
  },
  description: {
    color: "white",
    fontSize: 12,
    marginBottom: 5,
  },
});

export default Description;
