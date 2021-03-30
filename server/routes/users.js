module.exports = (app, db) => {
  const query = require('../query/information.queries.json');

  app.get('/api/users/get', (req, res) => {
    db.query(query.getAllData, (err, result) => {
      console.log(result);
    });
  });
  
  app.post("/api/users/insert", (req, res) => {
    const username = req.body.username;
    const name = req.body.name;
    const password = req.body.password;
    db.query(query.addNewUser, [username, name, password], (err, result) => {
      console.log(err);
    });
  });

};