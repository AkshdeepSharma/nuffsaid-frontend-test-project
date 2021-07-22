import React from "react";
import { render, screen } from "@testing-library/react";
import MessageCard from "../components/MessageCard";

const testProps = {
  message: "test",
  priority: 1,
  allObjects: [{ message: "test", priority: 1 }],
  setAllObjects: () => {},
  setSnackbarOpen: () => {},
  snackbarMessage: "test",
};

test("renders message from given props", () => {
  render(<MessageCard {...testProps} />);
  const cardElement = screen.getByText("test", {
    exact: false,
  });
  expect(cardElement).toBeInTheDocument;
});
