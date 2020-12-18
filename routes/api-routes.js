
var db = require("../models");

module.exports = (app) => {

    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(routine => {
            res.json(routine);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    
    });
    
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}).then((workouts) => {
          res.json(workouts);
        });
    });
    
    app.post("/api/workouts", ({ body }, res) => {
        db.Workout.create(body)
        .then(routine => {
            res.json(routine);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });
    
    app.put("/api/workouts/:id", (req, res) => {
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



