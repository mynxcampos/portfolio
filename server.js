const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
require('dotenv').config()
const userRouter = require('./routes/userRouter');
const loginRouter = require('./routes/loginRouter');
const portRouter = require('./routes/portRouter');
const projectRouter = require('./routes/projectRouter');


const db = process.env.BDD_URL //path bdd a mettre ici
const app = express()

app.use(session({secret: "Kiyo",saveUninitialized: true,resave: true}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('./asset'));
app.use(userRouter)
app.use(loginRouter)
app.use(portRouter)
app.use(projectRouter)



app.listen(3000,(err)=>{
    if (err) {
       console.log(err); 
    }else{
        console.log('Je suis connecté');
    }
})

mongoose.set('strictQuery', false);
mongoose.connect(db,(err)=>{
    if (err) {
        console.log(err);
    }else{
        console.log("connecter a la bdd");
    }
})

