const db = require('../models');
const analytics = require('../helpers/analytics');

module.exports =  {

  getBooks : function(req, res) {
    db.book.findAll().then(result => {
      analytics.track({
        userId: req.user.id,
        event: 'Books Fetched',
      });
      res.json(result);
    });
  },

  getBookById : function (req, res) {
    db.book.findByPk(req.params.id).then(result => {
      analytics.track({
        userId: req.user.id,
        event: 'Book Opened',
        properties: {
          id: req.params.id,
          title: result.title
        }
      });
      res.json(result);
    });
  },
  
  createBook: function (req, res) {
    db.book
    .create({
      title: req.body.title,
      description: req.body.description,
      cover_image: req.body.cover_image
    })
    .then(result => {
      analytics.track({
        userId: req.user.id,
        event: 'Book Created',
        properties: {
          id: req.params.id,
          title: result.title
        }
      });
      res.json(result);
    });
  },
  
  updateBook: function (req, res) {
    db.book
        .update(
          {
            title: req.body.title,
            description: req.body.description,
            cover_image: req.body.cover_image 
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
            event: 'Book Updated',
            properties: {
              id: req.params.id,
              title: result.title
            }
          });
          res.json(result);
        });
  },

  deleteBook: function (req, res) {
    db.book
    .destroy({
      where: {
        id: req.params.id
      }
    })
    .then(result => {
      analytics.track({
        userId: req.user.id,
        event: 'Book Deleted',
        properties: {
          id: req.params.id,
        }
      });
      res.json(result);
    });
  },
   
};