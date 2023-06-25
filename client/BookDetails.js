import React from 'react';

const BookDetails = ({ book }) => {
    return (
        <div>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Description: {book.description}</p>
            <p>Category: {book.category}</p>
            <img src={book.cover_url} alt={book.title} />
            <p>Published At: {book.publishedAt}</p>
            <p>Active: {book.isActive ? 'Yes' : 'No'}</p>
        </div>
    );
};

export default BookDetails;
