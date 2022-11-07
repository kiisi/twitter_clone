const mongoose = require('mongoose');

class Database{
    constructor(){
        this.connect();
    }
    connect(){
        mongoose.connect("mongodb+srv://kiisifelix:kiisifelix2006@twitterc.v1bwk.mongodb.net/twitterCloneDB?retryWrites=true&w=majority").then(()=>console.log("connected")).catch(err=>console.log("database connection err", err));
    }
}

module.exports= new Database();