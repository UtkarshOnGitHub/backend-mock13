const mongoose = require('mongoose');

const ScoreSchema = new mongoose.Schema({
    score:{type:String},
    playerId:{ type: mongoose.Schema.Types.ObjectId, ref: "player" }
}
)
const scoreModel = mongoose.model('score',ScoreSchema);
module.exports  = scoreModel;