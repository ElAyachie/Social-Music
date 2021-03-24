
// Create and Save a new User
exports.create = (req, res) => {
  if (!req.body.title) {
      res.status(400).send({
          message: "Content can not be empty!"
      });
      return;
  }

  const user = {
      username: req.body.username,
      name: req.body.name,
      password: req.body.password
  };

  User.create(user)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occured while creating the User."
        });
    });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Users
exports.findAllPublished = (req, res) => {
  
};