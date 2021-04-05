module.exports = (app, db) => {
  const query = require('../query/information.queries.json');

  app.get('/api/users/get', (req, res) => {
    db.query(query.getAllData, (error, result) => {
      console.log(result);
    });
  });
  
  app.post("/api/users/insert", (req, res) => {
    const email = req.body.email;
    const username = req.body.username;
    const name = req.body.name;
    const password = req.body.password;
    db.query(query.addNewUser, [email, username, name, password], (error, result) => {
      console.log(result);
      if(error) {
        console.log("Error on insert", error);
        res.send({
          "code": 400,
          "failed": "error occured"
        });
      }
      else {
        res.send({
          "code": 200,
          "success": "user registered sucessfully"
        });
      }
    });
  });
};