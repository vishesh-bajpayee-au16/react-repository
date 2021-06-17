import React from "react";
import Accordion from "./Accordion";
import Search from "./Search";
// const items = [
//   {
//     title: "What is react?",
//     content: "React is a javascript front end library",
//   },
//   {
//     title: "Why use React?",
//     content: "React is a favourite library among engineers",
//   },
//   {
//     title: "How do you use React?",
//     content: "We use it with creating components",
//   },
// ];

const App = () => {
  return (
    <div className="ui container">
      <Search />
    </div>
  );
};

export default App;
