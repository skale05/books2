import React from 'react';
import PropTypes from 'prop-types';
import './BookCard.css';

const BookCard = ({ book }) => {
    return (
        <div className="book-card">
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
    );
};

BookCard.propTypes = {
    book: PropTypes.shape({
        cover_url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        publishedat: PropTypes.string.isRequired,
        isactive: PropTypes.bool.isRequired,
    }).isRequired,
};

export default BookCard;
