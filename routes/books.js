var express = require('express');
var router = express.Router();
var booksController = require('../controllers/books');

router.get('/', booksController.getBooks);
router.get('/:id',booksController.getBookById);
router.put('/:id', booksController.updateBook);
router.delete('/:id',booksController.deleteBook);

module.exports = router;
  