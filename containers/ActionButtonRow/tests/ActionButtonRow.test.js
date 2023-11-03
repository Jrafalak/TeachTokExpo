import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import ActionButtonRow from "../ActionButtonRow";
import { Alert } from "react-native";

describe("ActionButtonRow", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<ActionButtonRow />);
    const actionButton = getByTestId("action-button-row");
    expect(actionButton).toBeDefined();
  });
});
