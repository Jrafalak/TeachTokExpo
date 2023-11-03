import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import NavBar from "../NavBar";

// this test is for a static UI component, not much to test
describe("NavBar", () => {
  it("should render correctly", () => {
    const { getByTestId } = render(<NavBar />);
    const container = getByTestId("navbar-container");
    expect(container).toBeDefined();
  });
});
