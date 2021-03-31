module.exports = (app, db) => {
    const query = require('../query/albums.queries.json');
    app.get('/api/users/albuminterests/get', (req, res) => {
        db.query(query.getAllalbumInterestsData, (err, result) => {
          console.log(result);
        });
      });
      
      app.post("/api/users/albuminterests/insert", (req, res) => {
        const ID = req.body.ID;
        const AlbumID = req.body.AlbumID;
        const AlbumName = req.body.AlbumName;
        const AlbumPic = req.body.AlbumPic;
        const ArtistID = req.body.ArtistID;
        const ArtistName = req.body.ArtistName;
        db.query(query.addNewAlbumInterest, [ID, AlbumID, AlbumName, AlbumPic, ArtistID, ArtistName], (err, result) => {
          console.log(err);
        });
      });
};