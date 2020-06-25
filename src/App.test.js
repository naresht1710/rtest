import React from "react";
import {
  render,
  cleanup,
  debug,
  waitFor,
  findByText,
  getAllByTestId,
  findByTestId,
  fireEvent,
  getByText,
  getByLabelText,
  waitForDomChange
} from "@testing-library/react";

import App from "./App";

import "@testing-library/jest-dom";

import "@testing-library/jest-dom/extend-expect";

beforeEach(cleanup);

test("component rendered", async () => {
  let { getByTestId } = render(<App />);

  console.log('getByText("Hello CodeSandbox")', getByTestId("test"));
  expect(getByTestId("test")).toBeInTheDocument();
});
