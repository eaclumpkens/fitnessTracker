const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema ({

    date: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: String,
        name: String,
        distance: Number,
        duration: Number,
        weight: Number,
        sets: Number,
        reps: Number
    }]

});

const Exercise = mongoose.model("Exercises", exerciseSchema);
module.exports = Exercise;