const express = require ('express');
const bodyParser = require('body-parser');

const app = express ();
const morgan = require('morgan');

const cors = require('cors'); // ! IMPORTANT
const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/scooter_api', { useNewUrlParser: true });


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