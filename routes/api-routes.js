const router = require("express").Router();
const Workout = require("../models/Workout.js");

router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body).then(routine => {
        res.json(routine);
    }).catch(err => {
        res.status(400).json(err);
    });
});

router.post("/api/workouts/range", ({ body }, res) => {
    Workout.insertMany(body).then(routine => {
        res.json(routine);
    }).catch(err => {
        res.status(400).json(err);
    })
})

router.get("/api/workouts", (req, res) => {
    Workout.find({}).then(routine => {
        res.json(routine);
    })
    .catch(err => {
        res.status(400).json(err);
    });

});

module.exports = router;

