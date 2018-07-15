import React from 'react';

const bookList = props => {
    const bookLines = props.books.map(book => 
        <li key={book.isbn}><strong>{book.title}</strong>, {book.author}</li>
    );

    return (
        <ul>
            {bookLines}
        </ul>
    );
};

export default bookList;