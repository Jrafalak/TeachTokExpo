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
      <View style={styles.actionButtonsContainer}>
        {/* Add your action buttons here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  choicesContainer: {
    flex: 3,
  },
  actionButtonsContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: "white",
  },
});

export default MultipleChoicePane;
