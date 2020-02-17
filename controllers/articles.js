var db = require('../models');
var analytics = require('../helpers/analytics');

module.exports =  {

  getArticles : function(req, res) {
    db.Article.findAll().then(result => {
      analytics.track({
        userId: req.user.id,
        event: 'Articles Fetched',

      });
      res.json(result);
    });
  },

  getArticleById : function (req, res) {
    db.Article.findByPk(req.params.id).then(result => {
      analytics.track({
        userId: req.user.id,
        event: 'Article Opened',
        properties: {
          id: req.params.id,
          title: result.title
        }
      });
      res.json(result);
    });
  },
  
  createArticle: function (req, res) {
    db.Article
    .create({
      title: req.body.title,
      body: req.body.body,
      cover_image: req.body.cover_image,
      user_id: req.body.user_id,
    })
    .then(result => {
      analytics.track({
        userId: req.user.id,
        event: 'Article Created',
        properties: {
          id: req.params.id,
          title: result.title
        }
      });
      res.json(result);
    });
  },
  
  updateArticle: function (req, res) {
    db.Article
        .update(
          {
            title: req.body.title,
            body: req.body.body,
            cover_image: req.body.cover_image,
            user_id: req.body.user_id,
          },
          {
            where: {
              id: req.params.id
            }
          }
        )
        .then(result => {
          analytics.track({
            userId: req.user.id,
            event: 'Article Updated',
            properties: {
              id: req.params.id,
              title: result.title
            }
          });
          res.json(result);
        });
  },

  deleteArticle: function (req, res) {
    db.Article
    .destroy({
      where: {
        id: req.params.id
      }
    })
    .then(result => {
      analytics.track({
        userId: req.user.id,
        event: 'Article Deleted',
        properties: {
          id: req.params.id,
        }
      });
      res.json(result);
    });
  },
   
};