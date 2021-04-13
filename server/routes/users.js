module.exports = (app, db) => {
  const query = require('../query/user_information.queries.json');

  app.get('/api/users/get', (req, res) => {
    db.query(query.getAllData, (error, result) => {
      console.log(result);
    });
  });
  
  app.post('/api/users/insert', (req, res) => {

    const username = req.body.username;
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;
    db.query(query.addNewUser, [username, email, name, password], (error, result) => {
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

  app.patch('/api/users/update_info/update', (req, res) => {
    const UserID = req.body.userID;
    const Name = req.body.newName;
    const Bio = req.body.newBio;
    db.query(query.updateUserInfo, [Name, Bio, UserID], (error, result) => {
      console.log(result);
      if(error) {
        console.log("Error on put", error);
        res.send({
          "code": 400,
          "failed": "error occured"
        });
      }
      else {
        res.send({
          "code": 200,
          "success": "Changes were successful"
        });
      }
    });
  });
};