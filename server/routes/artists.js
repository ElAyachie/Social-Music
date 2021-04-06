module.exports = (app, db) => {
    const query = require('../query/artists.queries.json');

    app.get('/api/users/artist_interests/get', (req, res) => {
      const UserID = req.boyd.UserID
      db.query(query.getAllArtistInterestsByUser, [UserID], (error, result) => {
        console.log(result);
      });
      });
      
      app.post("/api/users/artist_interests/insert", (req, res) => {
        const UserID = req.body.UserID;
        const ArtistID = req.body.ArtistID;
        const ArtistName = req.body.ArtistName;
        const ArtistPic = req.body.ArtistPic;
        db.query(query.addNewArtistInterest, [UserID, ArtistID, ArtistName, ArtistPic], (error, result) => {
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
              "success": "artist interest added."
            });
          }
        });
      });
};