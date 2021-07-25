import React from "react";
import { render } from "@testing-library/react";
import EmptyResult from "../EmptyResult";

describe("<EmptyResult />", () => {
  it("should render component", () => {
    const { container } = render(<EmptyResult />);

    expect(container).toBeInTheDocument();
  });

  it("should have default text", () => {
    const defaultMessage = "Oops... Não encontramos nada.";
    const { getByText } = render(<EmptyResult />);

    expect(getByText(defaultMessage)).toBeInTheDocument();
  });

  it("should render image with default width", () => {
    const defaultWidth = 200;
    const { getByAltText } = render(<EmptyResult />);

    const imageElement = getByAltText(/empty result/i);

    expect(imageElement).toBeInTheDocument();
    expect(imageElement.width).toBe(defaultWidth);
  });

  it("should render with new message text", () => {
    const defaultMessage = "Oops... Não encontramos nada.";
    const testMessage = "My test message";
    const { getByText } = render(<EmptyResult message={testMessage} />);

    expect(getByText(testMessage)).toBeInTheDocument();
    expect(getByText(testMessage)).not.toBe(defaultMessage);
  });

  it("should render with new width", () => {
    const defaultWidth = 200;
    const testWidth = 300;
    const { getByAltText } = render(<EmptyResult width={testWidth} />);

    const imageElement = getByAltText(/empty result/i);

    expect(imageElement.width).toBe(testWidth);
    expect(imageElement.width).not.toBe(defaultWidth);
  });
});
