var express = require('express');
var router = express.Router();
var authorsController = require('../controllers/authors');

router.get('/', authorsController.getAuthors);
router.get('/:id',authorsController.getAuthorById);
router.put('/:id', authorsController.updateAuthor);
router.delete('/:id',authorsController.deleteAuthor);

module.exports = router;
  