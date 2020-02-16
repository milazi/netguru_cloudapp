'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    cover_image: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  });

  return Article;
};