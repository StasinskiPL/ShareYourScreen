import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NavButtons from "./NavButtons";

test("<NavButtons>", () => {
  render(<NavButtons />);

  const buttons = screen.getAllByRole("button");

  expect(buttons).toHaveLength(2);
});
