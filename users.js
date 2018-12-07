let express = require("express");
let router = express.Router();
let {users} = require("./data.js");

router.get("/", (req, res) => {// /user - JSON list of all users.
  res.json({
    users,
  })
});
router.get("/:id", (req, res) => {// /user/:id - JSON of a single user with the given ID.
  let id = req.params.id;
  res.json({users}.users[id -1]);
});

module.exports = router;
``
