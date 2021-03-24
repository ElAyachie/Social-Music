module.exports = (app, db) => {
  //const users = require("../controllers/user.controller.js");
  //const controller = require('../controllers/user.controller');
  
  app.get('/api/get', (req, res) => {
    const sqlSelect = 
      "SELECT * FROM information";
    db.query(sqlSelect, (err, result) => {
      console.log(result);
    });
  });
  
  app.post("/api/insert", (req, res) => {
  
    const username = req.body.username;
    const name = req.body.name;
    const password = req.body.password;
    //Have to sort the issue with the id, can we have sql set it automatically? obvi cant get from user.
    const sqlInsert = 
      "INSERT INTO users.information (id, username, name, password) VALUES (6,?,?,?)";
    db.query(sqlInsert, [username, name, password], (err, result) => {
      console.log(err);
    });
  });

};