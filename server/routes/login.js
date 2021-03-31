module.exports = (app, db) => {
    const query = require('../query/information.queries.json');
  
app.post('/api/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    db.query(query.getUser, [username], (error, result) => {
      if(error) {
        console.log("Error occured", error);
        res.send({
          "code": 400,
          "failed": "Error occured"
        });
      }
      else {
        if(result.length > 0) {
          if(result[0].Password == password) {
            res.send({
              "username": username,
              "code": 200,
              "success": "Login Successful"
            });
          }
          else {
            res.send({
              "code": 204,
              "failed": "Email and Password do not match."
            });
          }
        }
        else {
          res.send({
            "code": 204,
            "failed": "Email does not exist."
          });
        }
      }
    });
  });

}