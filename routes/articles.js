var express = require('express');
var router = express.Router();
var articlesController = require('../controllers/articles');

router.get('/', articlesController.getArticles);
router.get('/:id',articlesController.getArticleById);
router.put('/:id', articlesController.updateArticle);
router.delete('/:id',articlesController.deleteArticle);

module.exports = router;
  