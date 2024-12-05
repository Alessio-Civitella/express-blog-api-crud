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
    console.log(objectparams);
    res.json(objectparams);

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
    res.json("Sono l'elemento modificato" + postId)
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
    res.json("sono delete" + postId)
}

module.exports = {
    index,
    create,
    update,
    show,
    destroy,
}