module.exports = (app, db) => {
    const query = require('../query/artists.queries.json');
    app.get('/api/users/get', (req, res) => {
        db.query(query.getAllData, (err, result) => {
          console.log(result);
        });
      });
      
      app.post("/api/users/insert", (req, res) => {
        const ID = req.body.ID;
        const ArtistID = req.body.ArtistID;
        const ArtistName = req.body.ArtistName;
        const ArtistPic = req.body.ArtistPic;
        db.query(query.addNewArtistInterest, [ID, ArtistID, ArtistName, ArtistPic], (err, result) => {
          console.log(err);
        });
      });
};