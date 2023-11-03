import React from "react";
import { render } from "@testing-library/react-native";
import Avatar from "../Avatar";

describe("Avatar", () => {
  it("renders without crashing", () => {
    const imageUrl = { imageUrl: "https://example.com/avatar.png" };
    const { getByTestId } = render(<Avatar imageUrl={imageUrl} />);
    const avatarContainer = getByTestId("avatar-container");
    expect(avatarContainer).toBeDefined();
  });

  it("renders an image when imageUrl prop is provided", () => {
    const imageUrl = { imageUrl: "https://example.com/avatar.png" };
    const { getByTestId } = render(<Avatar imageUrl={imageUrl} />);
    const avatarImage = getByTestId("avatar-image");
    expect(avatarImage.props.source).toEqual({ uri: imageUrl.imageUrl });
  });

  it("renders a plus icon", () => {
    const imageUrl = { imageUrl: "https://example.com/avatar.png" };
    const { getByTestId } = render(<Avatar imageUrl={imageUrl} />);
    const avatarPlusIcon = getByTestId("avatar-plus-icon");
    expect(avatarPlusIcon).toBeDefined();
  });
});
