const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const pool = require('./db');
const books = require('./books');

app.use(cors());
app.use(express.json());

app.set('db', pool);

app.get('/books', cors(), books.getAllBooks);
app.get('/books/:id', cors(), books.getBookById);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
