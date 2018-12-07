const express = require("express");
let app = express();

let users = require("./users");
let posts = require("./posts");
let pictures = require("./pictures");

app.use("/users", users);
app.use("/posts", posts);
app.use("/pictures", pictures);

app.listen(1000, () =>{
  console.log("You are listening to NestedRouting, port 1000");
});
