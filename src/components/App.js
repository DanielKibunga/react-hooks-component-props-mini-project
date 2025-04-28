// components/App.js
import React from "react";
import Header from "./Header";
import Aside from "./Aside"; // Assuming you have an Aside component
import ArticleList from "./ArticleList"; // Assuming you have ArticleList

function App() {
  return (
    <div className="App">
      <Header name="Underreacted" />
      <Aside />
      <ArticleList posts={[]} />
    </div>
  );
}

export default App;
