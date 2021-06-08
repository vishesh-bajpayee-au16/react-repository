// Import the React and ReactDOM libraries

import React from "react";
import ReactDOM from "react-dom";

// Create a react component
const App = () => {
  const divText = () => {
    return "Vishesh is awesome";
  };
  return (
    <div className="div" style={{ color: "teal", background: "black" }}>
      {divText()}
    </div>
  );
};
// Take the react component and show it on the screen

ReactDOM.render(<App />, document.querySelector("#root"));
