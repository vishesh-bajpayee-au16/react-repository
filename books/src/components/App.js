import React from "react";
import SearhBar from "./SearchBar";
import books from "../api/books";
import BookList from "./BookList";
class App extends React.Component {
  state = { books: [] };

  onFormSubmit = async (term) => {
    const response = await books.get(
      "https://www.googleapis.com/books/v1/volumes?",
      {
        params: {
          q: term,
        },
      }
    );
    this.setState({ books: response.data.items });
    console.log(this.state.books);
  };

  render() {
    return (
      <div className="ui container">
        <SearhBar onSubmit={this.onFormSubmit} />
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default App;
