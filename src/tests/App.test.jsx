import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders title", () => {
  render(<App />);
  const titleElement = screen.getByText("help.com coding challenge", {
    exact: false,
  });
  expect(titleElement).toBeInTheDocument;
});

test("renders a divider", () => {
  render(<App />);
  const dividerElement = screen.getByRole("separator");
  expect(dividerElement).toBeInTheDocument;
});
