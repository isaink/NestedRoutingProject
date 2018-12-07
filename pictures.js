let express = require("express");
let router = express.Router();

router.get("/picture", (req, res) => { // /picture - JSON list of all pictures.
  res.json({

  })
});
router.get("/picture/:id", (req, res) => { // /picture/:id - JSON of a single picture with a given ID.
  res.json({

  });
});
router.get("/picture/user/:id", (req, res) => { // /picture/user/:id - JSON of all pictures that the user with the given ID posted.
  res.json({

  })
})
module.exports = router;
