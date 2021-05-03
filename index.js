const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 8787

//body parser - need to be used external middleware with older version
app.use(express.json());
//using the routes mentioned in the given path
app.use('/api', require('./routes/api'))
app.get('/', (req, res) => {
    res.send("Posts api")
})

//connecting to mongoose
mongoose.connect('mongodb+srv://nikhil:nikhil@cluster0.mftgu.mongodb.net/posts')
mongoose.Promise = global.Promise;

//listining on the port
app.listen(port, function(){
    console.log(`server started at port ${port}`)
})