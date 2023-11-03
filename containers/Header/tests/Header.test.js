import React from "react";
import { render } from "@testing-library/react-native";
import Header from "../Header";
import { milliToMinuteSecond } from "../../../utils";

describe("Header", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<Header />);
    const header = getByTestId("header");
    expect(header).toBeDefined();
  });

  it("displays the timer correctly", () => {
    const { getByTestId } = render(<Header counter={60} />);
    const timerText = getByTestId("timer-text");
    expect(timerText.props.children).toBe(milliToMinuteSecond(60));
  });
});
