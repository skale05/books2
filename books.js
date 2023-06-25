


exports.getAllBooks = (req, res) => {
    const db = req.app.get('db');

    db.query('SELECT * FROM books', (err, result) => {
        if (err) {
            console.error('Error fetching books:', err);
            res.status(500).json({ error: 'An error occurred while fetching the books' });
        } else {
            const books = result.rows;
            res.json(books);
        }
    });
};


exports.getBookById = (req, res) => {
    const db = req.app.get('db');
    const bookId = req.params.id;

    db.query('SELECT * FROM books WHERE id = $1', [bookId], (err, result) => {
        if (err) {
            console.error('Error fetching book:', err);
            res.status(500).json({ error: 'An error occurred while fetching the book' });
        } else {
            const book = result.rows[0];
            res.json(book);
        }
    });
};
