let express = require("express");
let router = express.Router();

// /user - JSON list of all users.
// /user/:id - JSON of a single user with the given ID.
router.get("/user/:id", (req, res) => {
  res.json({
  // req.paramas.id
  });
});

module.exports = router;
