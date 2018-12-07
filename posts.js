let express = require("express");
let router = express.Router();

// /post - JSON list of all posts.
// /post/:id - JSON of a single post with the given ID.
// /post/user/:id - JSON of all posts that the user with the given ID wrote (right now, for the data we have, it should just be one post).
router.get("/post/:id", (req, res) => {
  res.json()
})


module.exports = router;
