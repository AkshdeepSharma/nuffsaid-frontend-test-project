import React from "react";
import { render, screen } from "@testing-library/react";
import MessageColumn from "../components/MessageColumn";

const testProps = {
  columnTitle: "test column 1",
  allObjects: [
    { message: "test1", priority: 1 },
    { message: "test2", priority: 1 },
    { message: "test3", priority: 2 },
  ],
  setAllObjects: () => {},
  messages: ["test1", "test2"],
  setSnackbarOpen: () => {},
  snackbarMessage: "",
};

test("renders the message column with the passed in props", () => {
  render(<MessageColumn {...testProps} />);
  const messageColumnElement = screen.getByText("test column 1", {
    exact: false,
  });
  expect(messageColumnElement).toBeInTheDocument;
});
