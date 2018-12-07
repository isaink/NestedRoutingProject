let express = require("express");
let router = express.Router();

router.get("/post", (req, res) => { // /post - JSON list of all posts.
  res.json({

  })
});
router.get("/post/:id", (req, res) => { // /post/:id - JSON of a single post with the given ID.
  res.json({

  });
});
router.get("/post/user/:id", (req, res) => { // /post/user/:id - JSON of all posts that the user with the given ID wrote (right now, for the data we have, it should just be one post).
  res.json({

  })
})
module.exports = router;
