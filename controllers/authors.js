const db = require('../models');
const analytics = require('../helpers/analytics');

module.exports =  {

  getAuthors : function(req, res) {
    db.Author.findAll().then(result => {
      analytics.track({
        userId: req.user.id,
        event: 'Authors Fetched',
      });
      res.json(result);
    });
  },

  getAuthorById : function (req, res) {
    db.Author.findByPk(req.params.id).then(result => {
      analytics.track({
        userId: req.user.id,
        event: 'Author Opened',
        properties: {
          id: req.params.id,
          name: result.name,
          surname: result.surname
        }
      });
      res.json(result);
    });
  },
  
  createAuthor: function (req, res) {
    db.Author
    .create({
      name: req.body.name,
      surname:req.body.surname,
      nationality: req.body.nationality,
      image: req.body.image
    })
    .then(result => {
      analytics.track({
        userId: req.user.id,
        event: 'Author Created',
        properties: {
          id: req.params.id,
          name: req.body.name,
          surname: req.body.name,
        }
      });
      res.json(result);
    });
  },
  
  updateAuthor: function (req, res) {
    db.Author
        .update(
          {
            name: req.body.name,
            surname:req.body.surname,
            nationality: req.body.nationality,
            image: req.body.image
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
              name: req.body.name,
              surname: req.body.name,
            }
          });
          res.json(result);
        });
  },

  deleteAuthor: function (req, res) {
    db.Author
    .destroy({
      where: {
        id: req.params.id
      }
    })
    .then(result => {
      analytics.track({
        userId: req.user.id,
        event: 'Author Deleted',
        properties: {
          id: req.params.id,
        }
      });
      res.json(result);
    });
  },
   
};