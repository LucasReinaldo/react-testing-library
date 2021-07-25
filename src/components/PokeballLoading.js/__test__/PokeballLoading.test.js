import React from "react";
import { render } from "@testing-library/react";
import PokeballLoading from "../PokeballLoading";

describe("<PokeballLoading />", () => {
  it("should render component with default props", () => {
    const defaultSize = 200;

    const { container, getByAltText } = render(<PokeballLoading />);

    const imageElement = getByAltText(/Pokeball Loading/i);

    expect(container).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.width).toBe(defaultSize);
    expect(imageElement.width).not.toBe(defaultSize - defaultSize);
    expect(imageElement.height).toBe(defaultSize);
    expect(imageElement.height).not.toBe(defaultSize - defaultSize);
  });

  it("should render component with message", () => {
    const testMessage = "Testing loading message";

    const { queryByText, rerender } = render(<PokeballLoading />);

    expect(queryByText(testMessage)).not.toBeInTheDocument();

    rerender(<PokeballLoading message={testMessage} />);

    expect(queryByText(testMessage)).toBeInTheDocument();
  });

  it("should render width and height with new size", () => {
    const defaultSize = 200;
    const size = 250;

    const { getByAltText } = render(<PokeballLoading size={size} />);

    const imageElement = getByAltText(/Pokeball Loading/i);

    expect(imageElement.width).toBe(size);
    expect(imageElement.width).not.toBe(defaultSize);
    expect(imageElement.height).toBe(size);
    expect(imageElement.height).not.toBe(defaultSize);
  });
});
