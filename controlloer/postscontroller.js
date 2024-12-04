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
    res.json("sono il nuovo elemento");
}

//update
const update = (req, res) => {
    const postId = req.params.id;
    res.json("Sono l'elemento modificato" + postId)
}

//show
const show = (req, res) => {
    const postId = req.params.id;
    for (let i = 0; i < postslist.length; i++) {
        const curpost = postslist[i];
        console.log(curpost);
        if (curpost.id === postId) {
           res.json(curpost) 
        }
    }
}

//destroy
const destroy = (req, res) => {
    const postId = req.params.id;
    res.json("sono delete" + postId)
}

module.exports = {
    index,
    create,
    update,
    show,
    destroy,
}