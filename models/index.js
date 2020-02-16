'use strict';
const fs = require('fs');
const path = require('path');
const basename = path.basename(module.filename);
const Sequelize = require('sequelize');
const config    = require('../config/config.json');
const db = {};
const databases = Object.keys(config.databases);
for(let i = 0; i < databases.length; i++) {
  let database = config.databases[databases[i]];
  let spawnedDB = new Sequelize(database.database,database.username,database.password,
    {
      host: database.hostname,
      dialect: database.dialect,
      port: database.port,
      pool: {
        max: 5,
        min: 0
      }
    }
    );
  spawnedDB.authenticate()
    .then(() => {
      
      console.log(`Connection to ${databases[i]} has been established successfully`);

      fs
      .readdirSync(__dirname + '/' + databases[i])
      .filter(file =>
        (file.indexOf('.') !== 0) &&
        (file !== basename) && 
        (file.slice(-3) === '.js'))
      .forEach(file => {
        const model = spawnedDB.import(path.join(__dirname + '/' + databases[i], file));
        db[model.name] = model;
      });
    })
    .catch(err => {
      console.log(`Unable to connect to ${databases[i]}`);
    });
  
   

  db[databases[i]] = spawnedDB;

  
}

module.exports = db;