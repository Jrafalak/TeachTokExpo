import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import ActionButton from "../ActionButton";

describe("ActionButton", () => {
  it("renders correctly with an icon name and number of presses", () => {
    const iconName = "add";
    const numberOfPresses = 0;
    const onPress = jest.fn();
    const { getByTestId } = render(
      <ActionButton
        iconName={iconName}
        numberOfPresses={numberOfPresses}
        onPress={onPress}
      />
    );
    const button = getByTestId("action-button");
    expect(button).toBeDefined();
  });

  it("calls onPress when the button is pressed", () => {
    const iconName = "add";
    const numberOfPresses = 0;
    const onPress = jest.fn();
    const { getByTestId } = render(
      <ActionButton
        iconName={iconName}
        numberOfPresses={numberOfPresses}
        onPress={onPress}
      />
    );
    const button = getByTestId("action-button");
    fireEvent.press(button);
    expect(onPress).toHaveBeenCalled();
  });
});
