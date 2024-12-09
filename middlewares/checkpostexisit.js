const posts = require("../data");


const checkPostExist = (req, res, next) => {
    const postId = parseInt(req.params.id);
    const post = posts.find((curPost) => curPost.id === postId);
    if (post !== undefined) {
        next()
    } else {
        res.statusCode = 404;
        res.json({
            error: true,
            message: "Post non trovato"
        })
    }
};

module.exports = checkPostExist;