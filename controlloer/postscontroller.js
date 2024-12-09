const postslist = require("../data");

//index
const index = (req, res) => {
    res.json({
        data: postslist,
        count: postslist.length,
    })
}

//create
const create = (req, res) => {
    const objectparams = req.body;

    const nextID = postslist[postslist.length - 1].id + 1;

    const newPost = {
        Id: nextID,
        ...objectparams
    }
    postslist.push(newPost);
    res.json(postslist)
}

//update
const update = (req, res) => {
    const postId = parseInt(req.params.id);
    const objectparams=req.body;

    const postIndexUpdate = postslist.findIndex((element) => element.id === postId);

    postslist[postIndexUpdate] = {
        id: postId,
        ...objectparams
    }
    console.log(postslist);
    
    res.sendStatus(204)
}

//show
const show = (req, res) => {
    let post = null;
    const postId = parseInt(req.params.id);
    for (let i = 0; i < postslist.length; i++) {
        const curpost = postslist[i];
        console.log(curpost);
        if (curpost.id === postId) {
            post = curpost;
            res.json(curpost)    
        }
    }
    if (post === null) {
        res.sendStatus(404);
    } else {
        res.json(post);
    }
}

//destroy
const destroy = (req, res) => {
    const postId = parseInt(req.params.id);
    const postDelete = postslist.findIndex((element) => element.id === postId);
    postslist.splice(postDelete, 1);
    res.json(postDelete);
}

module.exports = {
    index,
    create,
    update,
    show,
    destroy,
}