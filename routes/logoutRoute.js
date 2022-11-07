const express = require('express')
const app = express();
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../schemas/UserSchema');


router.get('/', (req, res, next) =>{
    if(req.session){
        req.session.destroy(()=>{
            res.redirect('/login')
        })
    }
})



module.exports = router;