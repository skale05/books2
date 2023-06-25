import React from 'react';
import PropTypes from 'prop-types';
import '../BookList.css';

const BookList = ({ books }) => {
    return (
        <div className="book-list">
            <h2>Book List</h2>
            <div className="grid-container">
                {books.map((book) => (
                    <div key={book.id} className="book-card">
                        <img className="book-image" src={book.cover_url} alt={book.title} />
                        <div className="book-details">
                            <h3 className="book-title">{book.title}</h3>
                            <p className="book-author">Author: {book.author}</p>
                            <p className="book-description">Description: {book.description}</p>
                            <p className="book-category">Category: {book.category}</p>
                            <p className="book-publishedat">Published At: {book.publishedat}</p>
                            <p className="book-isactive">Active: {book.isactive ? 'Yes' : 'No'}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

};

BookList.propTypes = {
    books: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            cover_url: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            publishedat: PropTypes.string.isRequired,
            isactive: PropTypes.bool.isRequired,
        })
    ).isRequired,
};

export default BookList;
