const { Pool } = require('pg');

// database connection URI
const PG_URI = 'postgres://nvjotmfx:I2Z_ieuv5rsVfHs88Hdqx22QoAsyDjQh@rajje.db.elephantsql.com/nvjotmfx';

// create a new pool here using the connection string above
const pool = new Pool({
    connectionString: PG_URI,
});

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers
module.exports = {
    query: (text, params, callback) => {
        // ensure that we are connected to the database
        console.log('db is connected');
        // console.log will tell us what the query was
        console.log('executed query', text);
        return pool.query(text, params, callback);
    },
};

// Here we are creating a new pool instance, which will allow us to make queries to our database.
// Define the SQL statements for creating the schema
const createSchemaSql = `
  CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
  );

  CREATE TABLE goals (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    goal_name VARCHAR(255) NOT NULL
  );

  CREATE TABLE subtasks (
    id SERIAL PRIMARY KEY,
    goal_id INTEGER REFERENCES goals(id),
    task VARCHAR(255) NOT NULL,
    due_date DATE,
    priority INTEGER
  );
`;

// Function to execute the schema setup
async function setupSchema() {
  let client;
  try {
    // Acquire a client from the connection pool
    client = await pool.connect();

    // Begin a transaction
    await client.query('BEGIN');

    // Execute the schema creation statements
    await client.query(createSchemaSql);

    // Commit the transaction
    await client.query('COMMIT');

    console.log('Schema setup successful!');
  } catch (error) {
    // Rollback the transaction on error
    await client.query('ROLLBACK');
    console.error('Schema setup error:', error);
  } finally {
    // Release the client back to the pool
    if (client) {
      client.release();
    }

    // End the pool's database connection
    await pool.end();
  }
}

// Call the function to set up the schema, commented out so it doesn't run every time we start the server
//setupSchema();
