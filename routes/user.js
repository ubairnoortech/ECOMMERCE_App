const express =  require('express')

const router = express.Router()

router.get('/',(req,res) =>{
    res.send('hello  user');
    console.log("Ubair")
})

module.exports = router;
