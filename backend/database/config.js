import pg from 'pg';

const pool = new pg.Pool({
    host: 'localhost',
    user: 'postgres',
    password: '26062024',
    database: 'likeme',
    port: 5433
})

pool.query('SELECT NOW()',(err, res) => {
  if (err) {
    console.log('ERROR conecting', err);
  } else {
    console.log('conected', res.rows[0].now)
  } 
});

export default pool;