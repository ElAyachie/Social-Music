module.exports = (app, db) => {
    const query = require('../query/songs.queries.json');

    app.get('/api/users/song_interests/get', (req, res) => {
        db.query(query.getAllSongData, (error, result) => {
          console.log(result);
        });
      });

      app.get('/api/users/load_songs/get', (req, res) => {
        const UserID = req.body.UserID;
        db.query(query.getAllSongInterestsByUserID, [UserID], (error, result) => {
          console.log(result);
        });
      });
      
      app.post("/api/users/song_interests/insert", (req, res) => {
        const UserID = req.body.UserID;
        const SongName = req.body.SongName;
        const SongLink = req.body.SongLink;
        const ArtistID = req.body.ArtistID;
        const ArtistName = req.body.ArtistName;
        const AlbumID = req.body.AlbumID;
        const AlbumPic = req.body.AlbumPic;
        db.query(query.addNewSongInterest, [UserID, SongName, SongLink, ArtistID, ArtistName, AlbumID, AlbumPic], (error, result) => {
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
              "success": "song interest added."
            });
          }
        });
      });
};