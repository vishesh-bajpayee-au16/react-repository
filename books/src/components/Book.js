import React from "react";

const Book = ({ title, description, image, author }) => {
  return (
    <div className="ui list">
      <div className="ui inverted segment">
        <div
          style={{ display: "flex", alignItems: "center" }}
          className="ui item"
        >
          <div className="ui grid">
            <div className="four wide column">
              <img className="ui image" src={image} alt={title} />
            </div>
            <div className="twelve wide column">
              <div className="content">
                <h2 className="header">{title}</h2>
                <h5>{author}</h5>

                <div className="description">{description}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
