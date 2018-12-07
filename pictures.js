let express = require("express");
let router = express.Router();
let {pictures} = require("./data.js");

router.get("/", (req, res) => { // /picture - JSON list of all pictures.
  res.json({
    pictures,
  })
});
router.get("/:id", (req, res) => { // /picture/:id - JSON of a single picture with a given ID.
  let id = req.params.id;
  res.json({pictures}.pictures[id -1]);
});
router.get("/user/:id", (req, res) => { // /picture/user/:id - JSON of all pictures that the user with the given ID posted.
  res.json({

  })
})
module.exports = router;
