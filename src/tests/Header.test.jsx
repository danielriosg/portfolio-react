import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";

describe("Header", () => {
  it("renders the developer's name", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(getByText("Developer Name")).toBeInTheDocument();
  });

  it("renders the navigation links", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(getByText("About Me")).toBeInTheDocument();
    expect(getByText("Portfolio")).toBeInTheDocument();
    expect(getByText("Contact")).toBeInTheDocument();
    expect(getByText("Resume")).toBeInTheDocument();
  });
});
