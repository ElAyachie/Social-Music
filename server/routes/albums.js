module.exports = (app, db) => {
    const query = require('../query/albums.queries.json');

      app.get('/api/users/album_interests/get', (req, res) => {
        db.query(query.getAllAlbumData, (error, result) => {
          console.log(result);
        });
      });

      app.get('/api/users/load_albums/get', (req, res) => {
        const UserID = req.body.UserID
        db.query(query.getAllAlbumInterestsByUserID, [UserID], (error, result) => {
          console.log(result);
        });
      });
      
      app.post("/api/users/album_interests/insert", (req, res) => {
        const UserID = req.body.UserID;
        const AlbumID = req.body.AlbumID;
        const AlbumName = req.body.AlbumName;
        const AlbumPic = req.body.AlbumPic;
        const ArtistID = req.body.ArtistID;
        const ArtistName = req.body.ArtistName;
        db.query(query.addNewAlbumInterest, [UserID, AlbumID, AlbumName, AlbumPic, ArtistID, ArtistName], (error, result) => {
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
              "success": "album interest added."
            });
          }
        });
      });
};