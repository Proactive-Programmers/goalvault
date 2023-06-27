const { DataTypes, Sequelize} = require('sequelize');
const sequelize = require('../db/connection');

const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    // Specify the schema name
    schema: 'userSchema',
    // sync: { force: true },
  });
// Create the schema using sequelize.createSchema()
// sequelize.createSchema('userSchema').then(() => {
//     // Schema is created, sync the model with the database schema
//     User.sync();
//   }).catch((error) => {
//     console.error('Error creating schema:', error);
//   });

module.exports = User;

