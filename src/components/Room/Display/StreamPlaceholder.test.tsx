import StreamPlaceholder from "./StreamPlaceholder";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("StreamPlaceholder h3", () => {
  const { getByText } = render(<StreamPlaceholder />);

  expect(getByText("No one is sharing screen")).toBeInTheDocument();
});

test("StreamPlaceholder btn", () => {
  render(<StreamPlaceholder />);

  const btn = screen.getByRole("button");

  expect(btn).toHaveTextContent("Start Streaming");
});
