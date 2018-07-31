import React, { Component } from "react";
import "./App.css";
import JSAlpharetta from "../assets/JSAlpharetta.jpg";

import books from "../data/books";
import TextBox from "../components/text-box/text-box";
import BookList from "../components/book-list/book-list";

class App extends Component {
  state = {
    // current state for list of books, new book title, new book isbn, and new book author
    newBookTitle: "",
    newBookIsbn: "",
    newBookAuthor: "",
    books: books
  };

  // method to handle the change of text within textbox for new book title
  handleChangeNewBookTitleTextBox = e => {
    this.setState({
      newBookTitle: e.target.value
    });
  };

  // method to handle the change of text within textbox for new book isbn
  handleChangeNewBookIsbnTextBox = e => {
    this.setState({
      newBookIsbn: e.target.value
    });
  };

  // method to handle the change of text within textbox for new book author
  handleChangeNewBookAuthorTextBox = e => {
    this.setState({
      newBookAuthor: e.target.value
    });
  };

  // handle clicking the add book button
  handleOnSubmit = () => {
    this.addBook();
  };

  // method to handle event created by clicking the 'add book' button to add book to current list of books in data/books.js
  addBook = () => {
    // create new book object from current state of isbn, title, and author
    const book = {
      isbn: this.state.newBookIsbn,
      title: this.state.newBookTitle,
      author: this.state.newBookAuthor
    };

    books.push(book);

    // clear out current values for author, isbn, and title and set books array to data/books.js with the new values added
    this.setState({
      books: books,
      newBookAuthor: "",
      newBookIsbn: "",
      newBookTitle: ""
    });
  };

  render() {
    return (
      <div>
        <header className="App-header">
          <img src={JSAlpharetta} height="100" width="150" alt="jsAlpharetta" />
          <h1 className="App-title">JS Alpharetta Book Store</h1>
        </header>
        <h2>Add New Book</h2>
        <div className="new-book-form">
          <label>ISBN: </label>
          <TextBox
            value={this.state.newBookIsbn}
            change={this.handleChangeNewBookIsbnTextBox}
          />
          <label>Title: </label>
          <TextBox
            value={this.state.newBookTitle}
            change={this.handleChangeNewBookTitleTextBox}
          />
          <label>Author: </label>
          <TextBox
            value={this.state.newBookAuthor}
            change={this.handleChangeNewBookAuthorTextBox}
          />
          <button onClick={this.handleOnSubmit} className="form-button">Add Book</button>
        </div>
        <h2>Book List</h2>
        <BookList books={books} />
      </div>
    );
  }
}

export default App;
