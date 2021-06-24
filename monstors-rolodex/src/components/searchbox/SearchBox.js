import React from "react";
import "./searchbox.css";

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      type="search"
      placeholder={placeholder}
      className="search"
      onChange={handleChange}
    />
  );
};

export default SearchBox;
