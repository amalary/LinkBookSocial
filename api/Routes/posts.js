const router = require('express').Router(); 
const { userInfo } = require('os');
const Post = require("../Models/Post");
const Users = require('../Models/Users');



// Post Creation 

router.post("/", async (req,res) => {
    const newPost = new Post(req.body)

    try{

        const savedPost = await newPost.save(); 
        res.status(200).json(savedPost); 

    }
    catch(err){
        res.status(500).json(err)

    }
})

// Updating Posts 
router.put("/:id", async (req,res) =>{
    try{

        const post = await Post.findById(req.params.id); 
        if(post.userId === req.body.userId){
            await post.updateOne({$set: req.body})
            res.status(200).json('Your post has been published')
    
        }
        else{
            res.status(403).json("You can only update your posts")
        }
    }
    catch(err){
        res.status(500).json(err)

    }
});

// Deleting a Post 

router.delete("/:id", async (req,res) =>{
    try{

        const post = await Post.findById(req.params.id); 
        if(post.userId === req.body.userId){
            await post.deleteOne()
            res.status(200).json('Your post has been deleted')
    
        }
        else{
            res.status(403).json("You can only delete your own posts")
        }
    }
    catch(err){
        res.status(500).json(err)

    }
});



// Liking and Diliking a Post 

router.put("/:id/like", async (req,res) => {
    try{
        const post = await Post.findById(req.params.id)
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push:{likes: req.body.userId}})
            res.status(200).json("The post has been liked")

        }
        else{
            await post.updateOne({$pull: {likes: req.body.userId}})
            res.status(200).json("The post has been disliked")
        }
        

    }
    catch(err){
        res.status(500).json(err); 

    }
})

// Get a Post

router.get("/:id", async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id)
        res.status(200).json(post); 


    }catch(err) {
        res.status(500).json(err)

    }
})

// Getting Posts from the Timeline 

router.get("/timeline/:userId", async (req,res) => {
    try{
        const currentUser = await Users.findById(req.params.userId);
        const userPosts = await Post.find({userId: currentUser._id});
        const friendPosts = await Promise.all(
            currentUser.following.map(friendId => {
                return Post.find({userId: friendId})
            })
        )
        res.status(200).json(userPosts.concat(...friendPosts))

    }
    catch(err){
        res.status(500).json(err); 
    }
})

module.exports = router;