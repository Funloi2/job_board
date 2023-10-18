import mariadb from "mariadb";

const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "jobboard",
});

pool.getConnection((err) => {
  if (err) {
    console.error("erreur");
  } else {
    console.log("conecté");
  }
});

export default pool;
