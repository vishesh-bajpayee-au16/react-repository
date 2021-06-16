import React from "react";

const BookList = ({ books }) => {
  const bookList = books.map((book) => {
    return (
      <div key={book.id}>
        <h5>{book.volumeInfo.title}</h5>
      </div>
    );
  });

  return bookList;
};

export default BookList;
