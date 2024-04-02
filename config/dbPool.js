import pkg from "pg";
const { Pool } = pkg;
import "dotenv/config";


const pool = new Pool({
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
    user: process.env.DB_USER,
  allowExitOnIdle: true,
});

const getDate = async () => {
  const { rows } = await pool.query("SELECT NOW()");
  console.log(rows);
  return rows;
};
getDate();


export default pool;
