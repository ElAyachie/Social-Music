const express = require('express');
const cors = require('cors');
const config = require('./config/db.config');
const mysql = require('mysql');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Server is up." });
});

app.get('/status', (req, res) => res.send('Working!'));

const db = mysql.createPool({
  host: config.HOST,
  user: config.USER,
  password: config.PASSWORD
});

require("./routes/users")(app, db);
require("./routes/artists")(app, db);
require("./routes/songs")(app, db);

app.use('/login', (req, res) => {
  res.send({
    'token': 'test123'
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`API Server is running on port ${PORT}.`);
});

module.exports = app;

/*db.connect(function(err) {
  if (err) throw err;
  console.log("Connected to GCP Database!");
});*/

//require("./routes/users.routes")(app, db);