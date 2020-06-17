const mongoose=require('mongoose')

const skootride=mongoose.Schema({
    history:[historySchema],
    scooters:[scooterSchema],
    Stops:[stopSchema],
    Users:[UserSchema],
    minDist:{type:Number, required: true}
});
const historySchema=mongoose.Schema({
   number:[numberSchema]
})

const numberSchema=mongoose.Schema({
        date : {type:Number, required: true},
        destStopId : {type:Number, required: true},
        distanceCost :{type:Number, required: true},
        duration :{type:Number, required: true},
        endTime : {type:Number, required: true},
        kmCovered : {type:Number, required: true},
        parkedDuration :{type:Number, required: true},
        paymentMode : {type:String, required: true},
        phno :{type:Number, required: true},
        rideType : {type:Number, required: true},
        scooterLat : {type:Number, required: true},
        scooterLon :{type:Number, required: true},
        scooterNo : {type:String, required: true},
        startStopId : {type:Number, required: true},
        startTime : {type:Number, required: true},
        timeCost : {type:Number, required: true},
        totalCost : {type:Number, required: true}
 })

 const scooterSchema=mongoose.Schema({
    id:[idSchema]
 })

 const idSchema=mongoose.Schema({
    id_stop : {type:Number, required: true},
      imei : {type:String, required: true},
      isBooked : {type:Boolean, required: true},
      isPetrol : {type:Boolean, required: true},
      lat : {type:Number, required: true},
      lon : {type:Number, required: true},
      scooterNo : {type:String, required: true},
 })

 const UserSchema=mongoose.Schema({
    number1:[number1Schema]
 })

 const number1Schema=mongoose.Schema({
    email : {type:String, required: true},
    isLicenceUploaded :{type:Boolean, required: true},
    licence : {type:String, required: true},
    name : {type:String, required: true},
    phno : {type:String, required: true},
    selfie : {type:String, required: true}
 })

module.exports= mongoose.model('Skootride',skootride)