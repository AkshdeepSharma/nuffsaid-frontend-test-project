import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import ClearButton from "../components/ClearButton";

test("renders the clear button", () => {
  const setAllObjects = () => {};
  render(<ClearButton setAllObjects={setAllObjects} />);
  const buttonElement = screen.getByText("clear", {
    exact: false,
  });
  expect(buttonElement).toBeInTheDocument;
});
