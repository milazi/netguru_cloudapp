'use strict';
module.exports = (sequelize, DataTypes) => {
  var Author = sequelize.define('Author', {
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    nationality: DataTypes.STRING,
    image: DataTypes.STRING
  });

  Author.associate = function(models) {
    models.Author.hasMany(models.Book);
  };

  return Author;
};