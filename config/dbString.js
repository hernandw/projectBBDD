import pkg from "pg";
const { Pool } = pkg;


const pool = new Pool({
    connectionString: 'postgres://postgres:123456@localhost:5432/ejemplo'
})


const getDate = async () => {
  const { rows } = await pool.query("SELECT NOW()");
  console.log(rows);
  return rows;
};
getDate();