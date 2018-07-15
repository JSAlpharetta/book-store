import React, { Component } from 'react';
import './App.css';

import books from '../data/books';
import TextBox from '../components/text-box/text-box';
import BookList from '../components/book-list/book-list';

class App extends Component {
  state = {
    newBookTitle: '',
    newBookIsbn: '',
    newBookAuthor: '',
    books: books
  };

  changeNewBookTitle = (e) => {
    this.setState({
      newBookTitle: e.target.value
    });
  };

  changeNewBookIsbn = (e) => {
    this.setState({
      newBookIsbn: e.target.value
    });
  };

  changeNewBookAuthor = (e) => {
    this.setState({
      newBookAuthor: e.target.value
    });
  };

  addBook = () => {
    const book = {
      isbn: this.state.newBookIsbn,
      title: this.state.newBookTitle,
      author: this.state.newBookAuthor
    };

    books.push(book);

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
          <label>ISBN: </label><TextBox value={this.state.newBookIsbn} change={this.changeNewBookIsbn} />
          <label>Title: </label><TextBox value={this.state.newBookTitle} change={this.changeNewBookTitle} />
          <label>Author: </label><TextBox value={this.state.newBookAuthor} change={this.changeNewBookAuthor} />
          <button onClick={this.addBook}>Add Book</button>
        </div>
        <h2>Book List</h2>
        <BookList books={books} />
      </div>
    );
  }
}

export default App;
