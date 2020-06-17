
var fs = require('fs');
const Skootride = require('./models');
const mongoose= require('mongoose');

//Get List of Details
exports.getList=('/',(req,res, next)=>{
    Skootride.find().exec().then(docs=>{
        if (docs.length>0){
            console.log(docs)
            res.status(200).json(docs);
        }
        else{
            res.status(404).json({
                message:'No data to display'
            });
        }
       
    }).catch(err=>{
        console.log(err)
        res.status(500).json({error:err})                                                                                                                                                                                                                                                                                                                                                                                                                        
    })
    
});

// Post to Details
exports.postOne=('/',(req,res, next)=>{
    const skootride=new Skootride({
        history:req.body.history,
        scooters:req.body.scooters,
        Stops:req.body.Stops,
        Users:req.body.Users,
        minDist:req.body.minDist
    });
   
    skootride.save().then(result=>{
        console.log(result)
        res.status(200).json(result);
    }).catch(err=>{
        console.log(err)
        res.status(500).json({error:err})
    });
    
});

//Get individual Details 
exports.getOne=('/:skootrideId',(req,res, next)=>{
    const id=req.params.skootrideId;
    Skootride.findById(id)
    .exec()
    .then(doc=>{
        console.log(doc)
        if(doc){
            res.status(200).json(doc)
        }
        else{
            res.status(404).json({message:'No valid data found'})
        }
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({error:err})
    })

    
});

// Change specific detail
exports.putOne=('/:skootrideId',(req,res, next)=>{
    const _id=req.params.skootrideId
    const skootride=req.body
    Skootride.findByIdAndUpdate(_id, skootride)
    .exec().then(result=>{
        res.status(200).json(result)
    }).catch(error=>{
        console.log(error)
        res.status(500).json({error})
    })
    
});

//Delete an individual Detail
exports.deleteOne=('/:skootrideId',(req,res, next)=>{
    const _id=req.params.skootrideId
    Skootride.remove({_id}).exec().then(result=>{
        res.status(200).json(result)
    }).catch(error=>{
        console.log(error)
        res.status(500).json({error})
    })
    
    
});

