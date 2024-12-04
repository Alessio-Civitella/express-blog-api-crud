const express = require("express");
const posts = require("./data")
const app = express();
const router = require("./routers/posts")
const port = 3000;

app.use(express.static("public"));

app.use("/posts", router)

app.get("/", (req, res) => {
    res.json({
        message: "Server del mio blog"
    })
})

app.get("/bacheca", (req, res) => {
    res.json({posts: posts,
        length: posts.length,}
    );
})

app.listen(port, () => {
    console.log("Server in ascolto"); 
});

