module.exports = (app, db) => {
    const query = require('../query/albums.queries.json');
    app.get('/api/users/get', (req, res) => {
        const sqlSelect = 
          "SELECT * FROM users.albuminterests";
        db.query(query.getAllData, (err, result) => {
          console.log(result);
        });
      });
      
      app.post("/api/users/insert", (req, res) => {
        const ID = req.body.ID;
        const AlbumID = req.body.AlbumID;
        const AlbumName = req.body.AlbumName;
        const AlbumPic = req.body.AlbumPic;
        const ArtistID = req.body.ArtistID;
        const ArtistName = req.body.ArtistName;
        const sqlInsert =
          "INSERT INTO users.albuminterests (ID, AlbumID, AlbumName, AlbumPic, ArtistID, ArtistName) VALUES (?,?,?,?,?,?)";
        db.query(query.addNewAlbumInterest, [ID, AlbumID, AlbumName, AlbumPic, ArtistID, ArtistName], (err, result) => {
          console.log(err);
        });
      });
};