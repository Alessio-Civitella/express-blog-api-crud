const express = require("express");
const router = express.Router();
const postslist = require("../controlloer/postscontroller");
const checkPostExist = require("../middlewares/checkpostexisit");

// index
router.get("/", postslist.index);

// create
router.post("/", postslist.create)

// update
router.put("/:id", checkPostExist, postslist.update)

//show
router.get("/:id", checkPostExist, postslist.show)

//destroy
router.delete("/:id", checkPostExist, postslist.destroy)


module.exports = router;