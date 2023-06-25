import React, { useEffect, useState } from 'react';
import { fetchBooks } from './api';
import BookList from './BookList';
import './App.css';

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooksData = async () => {
      try {
        const booksData = await fetchBooks();
        setBooks(booksData);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooksData();
  }, []);

  return (
    <div>
      <h1>My Book App</h1>
      {books.length > 0 ? (
        <BookList books={books} />
      ) : (
        <p>Loading books...</p>
      )}
    </div>
  );
};

export default App;
