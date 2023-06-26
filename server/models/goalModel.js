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
