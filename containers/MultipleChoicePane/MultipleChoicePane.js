import React from "react";
import { View, StyleSheet } from "react-native";
import Choice from "../../components/Choice/Choice";

const MultipleChoicePane = ({
  questionId,
  options,
  correctAnswerId,
  completedQuestions,
  onPress,
}) => {
  const selectedChoice = () => {
    if (completedQuestions.find((question) => question.id === questionId)) {
      return completedQuestions.find((question) => question.id === questionId)
        .data.selectedAnswer;
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <View testID="multiple-choice-pane" style={styles.choicesContainer}>
        {options.map((option, index) => (
          <Choice
            key={index}
            text={option.answer}
            optionId={option.id}
            isCorrect={option.id === correctAnswerId}
            completed={completedQuestions.find(
              (question) => question.id === questionId
            )}
            selectedChoice={selectedChoice()}
            onPress={() => onPress(option.id)}
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
