import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Choice from "../Choice";

describe("Choice", () => {
  const onPressMock = jest.fn();

  it("renders correctly", () => {
    const { getByTestId } = render(
      <Choice text="Test Choice" onPress={onPressMock} />
    );
    const choice = getByTestId("choice");
    expect(choice).toBeDefined();
  });

  it("calls onPress when pressed", () => {
    const { getByTestId } = render(
      <Choice text="Test Choice" onPress={onPressMock} />
    );
    const choice = getByTestId("choice");
    fireEvent.press(choice);
    expect(onPressMock).toHaveBeenCalled();
  });
});
