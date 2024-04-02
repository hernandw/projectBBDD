import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  password: "123456",
  database: "users",
  host: "localhost",
    user: "postgres",
  allowExitOnIdle: true,
});

const getDate = async () => {
  const { rows } = await pool.query("SELECT NOW()");
  console.log(rows);
  return rows;
};
getDate();

export default pool;
