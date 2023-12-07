const express =  require('express')

const app = express();
require("dotenv").config()

app.get("/", (req,res) => {
    res.send("from nodemone updated")
});

const port = process.env.PORT || 8000


/*to run the app */

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
});

const mongoose = require('mongoose');

const dotenv =  require('dotenv')
dotenv.config()

// DB
mongoose.connect(
    process.env.DATABASE,{
        useNewUrlParser: true,
        useCreateIndex: true
    }
). then(() =>console.log('DB Connected'))