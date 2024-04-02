import pkg from "pg";
const { Client } = pkg;
import "dotenv/config";

const connect = async () => {
  const client = new Client({
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
  });

  await client.connect();
  const { rows } = await client.query("SELECT NOW()");
  console.log(rows);
  await client.end();
};

connect();
 




