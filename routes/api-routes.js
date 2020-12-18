var router = require("express").Router();
var Workout = require("../models/Workout");

router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then(routine => {
        res.json(routine);
    })
    .catch(err => {
        res.status(400).json(err);
    });

});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).then((workouts) => {
      res.json(workouts);
    });
});

router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
    .then(routine => {
        res.json(routine);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
    const workoutID = req.params.id;
    Workout.findOneAndUpdate(
        { _id: workoutID },
        { $push: { exercises: req.body } }
    )
    .then(routine => {
        res.json(routine);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;

