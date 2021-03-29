module.exports = (app, db) => {
    const query = require('../query/songs.queries.json');
    app.get('/api/users/get', (req, res) => {
        const sqlSelect = 
          "SELECT * FROM users.songinterests";
        db.query(query.getAllData, (err, result) => {
          console.log(result);
        });
      });
      
      app.post("/api/users/insert", (req, res) => {
        const ID = req.body.ID;
        const SongID = req.body.SongID;
        const SongName = req.body.SongName;
        const ArtistID = req.body.ArtistID;
        const ArtistName = req.body.ArtistName;
        const AlbumID = req.body.AlbumID;
        const AlbumPic = req.body.AlbumPic;
        const sqlInsert =
          "INSERT INTO users.songinterests (ID, SongID, SongName, ArtistID, ArtistName, AlbumID, AlbumPic) VALUES (?,?,?,?,?,?,?)";
        db.query(query.addNewSongInterest, [ID, SongID, SongName, ArtistID, ArtistName, AlbumID, AlbumPic], (err, result) => {
          console.log(err);
        });
      });
};