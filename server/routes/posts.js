module.exports = (app, db) => {
    const query = require('../query/posts.queries.json');

    app.get('/api/posts/get', (req, res) => {
        db.query(query.getPosts, (error, result) => {
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
                  "success": "posts got successfully"
                });
            }
        });
    });
  
    app.post('/api/posts/insert', (req, res) => {
        const postText = res.body.postText;
        db.query(query.addPost, [postText], (error, result) => {
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
                  "success": "post added successfully"
                });
            }
        });
    });
};