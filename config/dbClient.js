import pkg from "pg";
const { Client } = pkg;

const connect = async () => {
  const client = new Client({
    host: "localhost",
    database: "users",
    user: "postgres",
    password: "123456",
  });

  await client.connect();
  const { rows } = await client.query("SELECT email FROM users");
  console.log(rows);
  await client.end();
};

connect();
 




