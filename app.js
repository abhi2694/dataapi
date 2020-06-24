const express = require ('express');
const bodyParser = require('body-parser');

const app = express ();
const morgan = require('morgan');

const cors = require('cors'); // ! IMPORTANT
const mongoose=require('mongoose');

mongodb+srv://wheelboxautomotive:wheelboxautomotive12@cluster0-ivq3r.mongodb.net/wheelboxautomotive?retryWrites=true&w=majority


app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

app.use(cors());
const routes = require('./api');

for (let label in routes) {
    app.use(app.router);
    routes.initialize(app);
	app.use(`/${label}`, routes [label]);
}

app.use((req,res,next)=>{
    const error = new Error('Not found');
    error.status=404;
    next(error);
})

app.use((error,req,res,next)=>{
    res.status(error.status||500)
    res.json({
        error:{
            message:error.message
        }
    })
})
module.exports=app
