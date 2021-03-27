module.exports = (app, db) => {
  const query = require('../query/information.queries.json');

  app.get('/api/users/get', (req, res) => {
    const sqlSelect = 
      "SELECT * FROM users.information";
    db.query(query.getAllData, (err, result) => {
      console.log(result);
    });
  });
  
  app.post("/api/users/insert", (req, res) => {
    const username = req.body.username;
    const name = req.body.name;
    const password = req.body.password;
    //Have to sort the issue with the id, can we have sql set it automatically? obvi cant get from user.
    const sqlInsert =
      "INSERT INTO users.information (username, name, password) VALUES (?,?,?)";
    db.query(query.addNewUser, [username, name, password], (err, result) => {
      console.log(err);
    });
  });

};