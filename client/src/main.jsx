import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

const books = []; 

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename="/books">
      <App books={books} /> {/* Pass the books array as a prop to the App component */}
    </Router>
  </React.StrictMode>
);
