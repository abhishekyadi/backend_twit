const express=require('express');
const app=express();
const port= process.env.PORT || 5000;
const mongoose=require('mongoose');
const {mongoUrl}=require('./keys')
const cors=require('cors')
const env = require("dotenv");
env.config();


require('./models/model')
app.use(express.json())
app.use(require('./routes/auth'))
mongoose.connect(mongoUrl)
app.use(cors())
require('./models/post')
app.use(require("./routes/createPost"))
app.use(require('./routes/user'))


mongoose.connection.on("connected",()=>{
    console.log("successfully connected to mongo")
})

mongoose.connection.on("error",()=>{
    console.log("not connected to mongodb")
})


app.listen(port,()=>{
    console.log("Server running on port "+port)
})