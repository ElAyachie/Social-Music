const express = require('express');
const cors = require('cors');

const app = express();

var corsOptions = {
  origin: "http://localhost:5001"
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./models');
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to app." });
});

require("./routes/users.routes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

/*
var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

var socialMusicDB = "socialMusicDB";

con.connect(function(err) {
  console.log("[create database in MySql] - block BEGIN");
  if (err) throw err;
  varId = 1;
  con.query("create database " + socialMusicDB, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
  console.log("Connected!");
  console.log("[create database in MySql] - block END");
});
*/

module.exports = app;
