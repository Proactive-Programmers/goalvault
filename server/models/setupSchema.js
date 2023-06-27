const { Pool } = require('pg');

// Create a connection pool
const pool = new Pool({
  user: 'your_username',
  host: 'your_host',
  database: 'your_database',
  password: 'your_password',
  port: 5432, // Default PostgreSQL port
});

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

// Call the function to set up the schema
setupSchema();
