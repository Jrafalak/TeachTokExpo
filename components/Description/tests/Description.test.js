import React from "react";
import { render } from "@testing-library/react-native";
import Description from "../Description";

describe("Description component", () => {
  it("renders author and description", () => {
    const author = "John Doe";
    const description = "This is a test description";
    const { getByText } = render(
      <Description author={author} description={description} />
    );
    const authorElement = getByText(author);
    const descriptionElement = getByText(description);
    expect(authorElement).toBeDefined();
    expect(descriptionElement).toBeDefined();
  });
});
