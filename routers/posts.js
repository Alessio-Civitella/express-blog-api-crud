const express = require("express");
const router = express.Router();
const postslist = require("../controlloer/postscontroller");

// index
router.get("/", postslist.index);

// create
router.post("/", postslist.create)

// update
router.put("/:id", postslist.update)

//show
router.get("/:id", postslist.show)

//destroy
router.delete("/:id", postslist.destroy)


module.exports = router;