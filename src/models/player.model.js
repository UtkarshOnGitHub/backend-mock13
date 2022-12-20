const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name:{type:String},
    level:{type:String},
}
)
const playerModel = mongoose.model('player',playerSchema);
module.exports  = playerModel;