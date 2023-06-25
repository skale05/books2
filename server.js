// server.js

const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const pool = require('./db');
const books = require('./books');

app.use(cors());

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.set('db', pool);


app.get('/books', books.getAllBooks);
app.get('/books/:id', books.getBookById);


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
