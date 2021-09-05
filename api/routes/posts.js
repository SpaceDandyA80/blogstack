const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');

// create new post
router.post("/", async(req,res)=>{
   const newPost = new Post(req.body);
   try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
   }catch(err){
       res.status(500).json(err)
   }

});

//update post

router.put("/:id", async(req,res)=>{
   try{
const post = await Post.findById(req.params.id);
if(post.username === req.body.username){
        try{
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                    $set:req.body
                },{new:true});
                res.status(200).json(updatedPost);
        }catch(err){
            res.status(500).json(err)
    }
} else{
    res.status(401).json("you can try to update but you'll fail")
}

   }catch(err){
       res.status(500).json(err)
   }
});

// delete post

router.delete("/:id", async(req,res)=>{
    try{
 const post = await Post.findById(req.params.id);
 if(post.username === req.body.username){
         try{
                await post.delete()
                 res.status(200).json("post has been wiped from the face of the earth");
         }catch(err){
             res.status(500).json(err)
     }
 } else{
     res.status(401).json("you can try to delete but you'll fail")
 }
 
    }catch(err){
        res.status(500).json(err)
    }
 });
// get post
// obvi finds the req.params.id and assings it to post
router.get("/:id", async (req,res)=>{
    try{
const post = await Post.findById(req.params.id);
res.status(200).json(post);
    }catch(err){
        res.status(500).json(err)
    }
});

//get all posts
router.get("/", async (req,res)=>{
    const username = req.query.user;
    const catName = req.query.cat;

    try{
        // looks at the $in;[catName] searches for the categories definition before and assigns it to posts in the (let)
        let posts;
        if(username){
            posts = await Post.find({username})
        }else if(catName){
            posts = await Post.find({categories:{
                $in:[catName]
            }})
        } else {
            posts = await Post.find();
        }
        res.status(200).json(posts);
    }catch(err){
        res.status(500).json(err)
    }
});

module.exports = router
