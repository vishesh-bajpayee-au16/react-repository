import React from "react";
import Book from "./Book";

const BookList = ({ books }) => {
  const bookList = books.map((book) => {
    return (
      <Book
        title={book.volumeInfo.title}
        description={book.volumeInfo.description}
        image={book.volumeInfo.imageLinks.thumbnail}
        author={book.volumeInfo.authors}
      />
    );
  });

  return bookList;
};

export default BookList;
