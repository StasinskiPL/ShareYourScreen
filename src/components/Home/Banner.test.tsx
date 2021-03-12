import { render, getByTestId } from "@testing-library/react";
import Banner from "./Banner";

test("<Banner>", () => {
  const { container } = render(<Banner />);

  const text = getByTestId(container, "banner");

  expect(container).toBeTruthy();
  expect(text.textContent).toBe("Connect with people all around the world");
});
