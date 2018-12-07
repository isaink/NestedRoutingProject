let express = require("express");
let router = express.Router();

router.get("/user", (req, res) => {// /user - JSON list of all users.
  res.json({

  })
});
router.get("/user/:id", (req, res) => {// /user/:id - JSON of a single user with the given ID.
  res.json({
  // req.paramas.id
  });
});

module.exports = router;
