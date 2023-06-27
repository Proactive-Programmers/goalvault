const { Pool } = require ('pg');
const PG_URL = 'postgres://xjrthwmn:wNAG5ozdRoKvMOTz7v073zcImybILuim@rajje.db.elephantsql.com/xjrthwmn';
//create a pool instance using the connection above
const pool = new Pool({
    connectionString: PG_URL
});



// establish access point to the database
export function query(text, params, callback) {
    console.log('executed query', text);
    return pool.query(text, params, callback);
}