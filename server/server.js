const express = require('express');
const cors = require('cors');
const config = require('./config/db.config');
const mysql = require('mysql');

const app = express();

var corsOptions = {
  origin: "http://localhost:5001"
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var con = mysql.createConnection({
  host: config.HOST,
  user: config.USER,
  password: config.PASSWORD,
  database: config.DB
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to GCP Database!");
});

/*
const db = require('./models');
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});
*/

app.get("/", (req, res) => {
  res.json({ message: "Welcome to app." });
});

require("./routes/users.routes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;
