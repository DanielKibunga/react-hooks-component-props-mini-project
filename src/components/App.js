import React from "react";
import blogData from "../data/blog";
import About from "../components/About";
import ArticleList from "../components/ArticleList";
import Header from "../components/Header";


console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name="My Blog"/>
      <About 
         image={blogData.image}
        about={blogData.about}
      />
      <ArticleList posts={blogData.posts}/>
    </div>
  );
}

export default App;