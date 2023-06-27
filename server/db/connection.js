//Load environment variables from .env file
require('dotenv').config();
//establishes a connection to database
const { Sequelize } = require('sequelize');

// Create a new Sequelize instance
const sequelize = new Sequelize(process.env.POSTGRESQL_DB_URI, {
    dialect: 'postgres'
})

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

module.exports = sequelize;


