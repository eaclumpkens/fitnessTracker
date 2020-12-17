const router = require("express").Router();
const Exercise = require("../models/Exercise.js");



router.get("/api/exercise", (req, res) => {
    Exercise.find({}).then(exercise => {
        res.json(exercise);
    })
    .catch(err => {
        res.status(400).json(err);
    });

});

module.exports = router;

