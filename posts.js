let express = require("express");
let router = express.Router();
let {posts} = require("./data.js");
// object destructuring

router.get("/", (req, res) => { // /post - JSON list of all posts.
  res.json({
    posts,
  })
})
router.get("/:id", (req, res) => { // /post/:id - JSON of a single post with the given ID.
  // let id = req.params.id;
  // res.json({posts}.posts[id -1]);
  posts.forEach(posts => {
    if(posts.id === Number(req.params.id)){
      res.json(
        {chosenPosts: posts,}
      )
    }
  })

});
router.get("/user/:id", (req, res) => { // /post/user/:id - JSON of all posts that the user with the given ID wrote (right now, for the data we have, it should just be one post).
  let userId = req.params.userId;
  res.json({posts}.posts[userId - 1])
})
module.exports = router;
