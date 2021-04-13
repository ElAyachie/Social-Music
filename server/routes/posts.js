module.exports = (app, db) => {
    const query = require('../query/posts.queries.json');

    app.get('/api/posts/get', (req, res) => {
        db.query(query.getPosts, (error, result) => {
            //console.log(result);
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
                  "success": "posts got successfully",
                  "results": result
                });
            }
        });
    });
  
    app.post('/api/posts/insert', (req, res) => {
        const PostText = req.body.postText;
        const UserID = 4;
        db.query(query.addPost, [PostText, UserID], (error, result) => {
            //console.log(result);
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
                  "success": "post added successfully"
                });
            }
        });
    });
};