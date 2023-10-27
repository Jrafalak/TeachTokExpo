import React from "react";
import { View, StyleSheet } from "react-native";
import Choice from "../../components/Choice/Choice";

const MultipleChoicePane = ({ options, correctAnswerId }) => {
  return (
    <View style={styles.container}>
      <View style={styles.choicesContainer}>
        {options.map((option, index) => (
          <Choice
            key={index}
            text={option.answer}
            isCorrect={option.id === correctAnswerId}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 20,
  },
  choicesContainer: {
    flex: 1,
  },
});

export default MultipleChoicePane;
