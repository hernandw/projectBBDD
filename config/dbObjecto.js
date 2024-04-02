import pkg from "pg";
const { Pool } = pkg;
import "dotenv/config";


const config = {
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  allowExitOnIdle: true,
};

const pool = new Pool(config);

const getDate = async () => {
  const { rows } = await pool.query("SELECT NOW()");
  console.log(rows);
  return rows;
};
getDate();