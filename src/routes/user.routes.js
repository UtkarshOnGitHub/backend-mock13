const express = require('express');
const playerModel = require('../models/player.model');
const scoreModel = require('../models/score.model');
const user = express.Router();


user.get("/", async(req,res)=>{
    try{
        let data = await scoreModel.find().populate('playerId');
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})

user.post("/" , async (req,res)=>{
    let {name,level} = req.body
    try {
        let data = new playerModel({name,level})
        await data.save()
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})


user.post("/score" , async(req,res)=>{
    let {score,playerId} = req.body
    try {
        let data = new scoreModel({score,playerId})
        await data.save()
        res.send("Score Added")
    } catch (error) {
        console.log(error)
    }
})

module.exports = user