import React, { Component } from 'react';
import './App.css';

import books from '../data/books';
import TextBox from '../components/text-box/text-box';
import BookList from '../components/book-list/book-list';

class App extends Component {
  state = {
    // current state for book title, isbn, and author
    newBookTitle: '',
    newBookIsbn: '',
    newBookAuthor: '',
    books: books
  };

  // method to change text within textbox for new book title
  onChangeNewBookTitleTextBox = (e) => {
    this.setState({
      newBookTitle: e.target.value
    });
  };

  // method to change text within textbox for new book isbn
  onChangeNewBookIsbnTextBox = (e) => {
    this.setState({
      newBookIsbn: e.target.value
    });
  };

  // method to change text within textbox for new book author
  onChangeNewBookAuthorTextBox = (e) => {
    this.setState({
      newBookAuthor: e.target.value
    });
  };

  // method to add book to current list of books in data/books.js
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
      newBookAuthor: '',
      newBookIsbn: '',
      newBookTitle: ''
    });
  };

  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">JavaScript Book Store</h1>
        </header>
        <h2>Add New Book</h2>
        <div className="new-book-form">
          <label>ISBN: </label><TextBox value={this.state.newBookIsbn} change={this.onChangeNewBookIsbnTextBox} />
          <label>Title: </label><TextBox value={this.state.newBookTitle} change={this.onChangeNewBookTitleTextBox} />
          <label>Author: </label><TextBox value={this.state.newBookAuthor} change={this.onChangeNewBookAuthorTextBox} />
          <button onClick={this.addBook}>Add Book</button>
        </div>
        <h2>Book List</h2>
        <BookList books={books} />
      </div>
    );
  }
}

export default App;
