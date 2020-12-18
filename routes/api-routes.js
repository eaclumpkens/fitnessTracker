const router = require("express").Router();
var db = require("../models")

router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body).then(routine => {
        res.json(routine);
    }).catch(err => {
        res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    db.Workout.findByIdAndUpdate(params.id, {$push: { exercises: [body] }}, { new: true }).then(routine => {
        res.json(routine);
        }).catch(err => {
        res.status(400).json(err);
        });
});

router.post("/api/workouts/range", ({ body }, res) => {
    db.Workout.insertMany(body).then(routine => {
        res.json(routine);
    }).catch(err => {
        res.status(400).json(err);
    })
});

router.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(routine => {
        res.json(routine);
    })
    .catch(err => {
        res.status(400).json(err);
    });

});

module.exports = router;

