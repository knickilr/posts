const express = require('express');
const router = express.Router();
const posts = require('../schema/posts')



router.get('/posts', function(req, res){
    posts.find().then(function(postList){
        res.send(postList)
    })
})

router.post('/posts', function(req, res){
    posts.create(req.body).then(function(postList){
        res.send(postList)
    })
    // res.send('this is from post')
})

router.put('/posts/:id', function(req, res){
    posts.findByIdAndUpdate({_id:req.params.id}, req.body).then(function(){
        posts.findOne({_id:req.params.id}).then(function(postList){
            res.send(postList)
        })
    })
    // res.send('this is from put')
})

router.delete('/posts/:id', function(req, res){
    posts.findByIdAndDelete({_id:req.params.id}).then(function(postList){
        res.send(postList)
    })
    // res.send('this is from delete')
})


module.exports = router;