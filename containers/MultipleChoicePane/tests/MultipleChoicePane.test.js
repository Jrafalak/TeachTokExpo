import React from "react";
import { render } from "@testing-library/react-native";
import MultipleChoicePane from "../MultipleChoicePane";

describe("MultipleChoicePane", () => {
  const options = [
    { id: 1, text: "Option 1" },
    { id: 2, text: "Option 2" },
    { id: 3, text: "Option 3" },
  ];
  const correctAnswerId = 2;

  const defaultProps = {
    questionId: 1,
    options,
    correctAnswerId,
    completedQuestions: [
      { id: 1, data: { correctAnswer: "A", selectedAnswer: 2 } },
    ],
    onPress: jest.fn(),
  };

  it("renders all options", () => {
    const { getByTestId } = render(<MultipleChoicePane {...defaultProps} />);

    expect(getByTestId("multiple-choice-pane").props.children.length).toBe(3);
  });
});
