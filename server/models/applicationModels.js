import pkg from 'pg';
const { Pool } = pkg;

const PG_URI =
  'postgres://tndgsbki:7pzT2gTuFV_Rk4BJSXPl0CTeeAEx1M4Z@batyr.db.elephantsql.com/tndgsbki';

const pool = new Pool({
  connectionString: PG_URI,
});

//Export an object that contains a property called query,
//which is a function that returns the invocation of pool.query() after logging the query
export default {
  query: (text, params, callback) => {
    console.log('executed query', text);
    console.log('params', params);
    console.log('callback', callback);
    return pool.query(text, params, callback);
  },
};
