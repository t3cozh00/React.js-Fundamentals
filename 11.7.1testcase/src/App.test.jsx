import { render, screen, fireEvent } from "@testing-library/react";
import {
  toBeInTheDocument,
  toHaveTextContent,
} from "@testing-library/jest-dom/matchers";
import App from "./App";

expect.extend({ toBeInTheDocument, toHaveTextContent });

test("renders App component", () => {
  render(<App />);
  const header = screen.getByText("My Todolist");
  expect(header).toBeInTheDocument();
});

test("add & clear todo", () => {
  render(<App />);
  const desc = screen.getByPlaceholderText("Description");
  fireEvent.change(desc, { target: { value: "Go to coffee" } });
  const date = screen.getByPlaceholderText("Date");
  fireEvent.change(date, { target: { value: "29.12.2023" } });
  const status = screen.getByPlaceholderText("Status");
  fireEvent.change(status, { target: { value: "Open" } });
  const addButton = screen.getByText("Add");
  fireEvent.click(addButton);
  const clearButton = screen.getByText("Clear");
  fireEvent.click(clearButton);

  const table = screen.getByRole("table");
  expect(table).toHaveTextContent("go to coffee");
  expect(table).not.toHaveTextContent("go to coffee");
});
