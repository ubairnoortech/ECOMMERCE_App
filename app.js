const express =  require('express')

const app = express();

require("dotenv").config()
//import routes

const userRoutes =  require('./routes/user')


const port = process.env.PORT || 7000


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
        
    }
). then(() =>console.log('DB Connected'))

//routes

app.use("/",userRoutes)