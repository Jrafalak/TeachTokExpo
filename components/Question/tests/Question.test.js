import React from "react";
import { render, screen } from "@testing-library/react-native";
import Question from "../Question";

describe("Question", () => {
  it("renders the question text", () => {
    const text = "What is your favorite color?";
    render(<Question text={text} />);
    expect(screen.getByText(text)).toBeDefined();
  });
});
