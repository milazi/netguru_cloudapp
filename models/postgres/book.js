'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    cover_image: DataTypes.STRING
  });

  Book.associate = function(models) {
    models.Book.belongsTo(models.Author);
  };

  return Book;
};