import React from "react";
import { render } from "@testing-library/react-native";
import Playlist from "../Playlist";

describe("Playlist", () => {
  it("renders the text prop", () => {
    const { getByText } = render(<Playlist text="My Playlist" />);
    const textElement = getByText("My Playlist");
    expect(textElement).toBeDefined();
  });
});
