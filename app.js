const express = require('express')
const app = express();
const middleware = require('./middleware')
const bodyParser = require("body-parser");
const mongoose = require('./database');
const session = require('express-session')
const path = require('path');
const port = 3001;
const server = app.listen(port, ()=> console.log("Server is running on " + port));

app.set("view engine", "pug");
app.set("views", "views")
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")))

app.use(session({
    secret:"barbecue",
    resave:true,
    saveUninitialized:false
}))


//Routes
const loginRoute = require('./routes/loginRoutes');
const registerRoute = require('./routes/registerRoute');
const logoutRoute = require('./routes/logoutRoute');

//Api
const postsApiRoute = require('./routes/api/posts');


app.use('/login', loginRoute)
app.use('/register', registerRoute)
app.use('/logout', logoutRoute)

app.use('/api/posts', postsApiRoute)


app.get('/', middleware.requireLogin, (req,res,next) =>{
    var payload = {
        pageTitle: 'Home',
        userLoggedIn: req.session.user
    }
    res.status(200).render("home", payload)
})