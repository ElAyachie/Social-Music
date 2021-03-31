module.exports = (app, db) => {
    const query = require('../query/songs.queries.json');
    app.get('/api/users/songinterests/get', (req, res) => {
        db.query(query.getAllSongInterestsData, (err, result) => {
          console.log(result);
        });
      });
      
      app.post("/api/users/songinterests/insert", (req, res) => {
        const ID = req.body.ID;
        const SongName = req.body.SongName;
        const SongLink = req.body.SongLink;
        const ArtistID = req.body.ArtistID;
        const ArtistName = req.body.ArtistName;
        const AlbumID = req.body.AlbumID;
        const AlbumPic = req.body.AlbumPic;
        db.query(query.addNewSongInterest, [ID, SongName, SongLink, ArtistID, ArtistName, AlbumID, AlbumPic], (err, result) => {
          console.log(err);
        });
      });
};