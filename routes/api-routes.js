var router = requrie("express").Router();
var db = require("../models");

module.exports = () => {

    router.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(routine => {
            res.json(routine);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    
    });
    
    router.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}).then((workouts) => {
          res.json(workouts);
        });
    });
    
    router.post("/api/workouts", ({ body }, res) => {
        db.Workout.create(body)
        .then(routine => {
            res.json(routine);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });
    
    router.put("/api/workouts/:id", (req, res) => {
        const workoutID = req.params.id;
        db.Workout.findOneAndUpdate(
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

}



