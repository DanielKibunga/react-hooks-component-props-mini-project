// import "@testing-library/jest-dom";
// import { render } from "@testing-library/react";
// import App from "../components/App";

// test("renders the correct child components", () => {
//   const { container } = render(<App />);
//   expect(container.querySelector(".App")).toBeInTheDocument();
//   expect(container.querySelector(".App header")).toBeInTheDocument();
//   expect(container.querySelector(".App aside")).toBeInTheDocument();
//   expect(container.querySelector(".App main")).toBeInTheDocument();
// });
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import blogData from "../data/blog";

test("renders blog name from Header", () => {
  render(<App />);
  const heading = screen.getByText(blogData.name);
  expect(heading).toBeInTheDocument();
});

test("renders About section with placeholder image or custom image", () => {
  render(<App />);
  const img = screen.getByAltText("blog logo");
  expect(img).toBeInTheDocument();
});

test("renders at least one Article", () => {
  render(<App />);
  const articleTitle = screen.getByText(blogData.posts[0].title);
  expect(articleTitle).toBeInTheDocument();
});
