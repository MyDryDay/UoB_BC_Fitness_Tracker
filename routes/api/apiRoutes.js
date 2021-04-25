// Declare requirements
const db = require('../../models');
const mongojs = require('mongojs');
const router = require('express').Router();

// POST route
// Creates a new workout
router.post('/api/workouts', ({body}, res) => {
    db.Workout.create(body).then(
        (dbWorkout) => {
            res.json(dbWorkout);
        }
    ).catch(
        (err) => {
            res.json(err);
        }
    );
});

// GET routes
// Get all workouts
router.get('/api/workouts', (req, res) => {
    db.Workout.find({}).then(
        (dbWorkout) => {
            dbWorkout.forEach(workout => {
                let total = 0;
                workout.exercises.forEach(ex => {
                    // total += ex.duration;
                    total = total + ex.duration;
                    console.log(total);
                });
                workout.totalDuration = total;
            });
            res.json(dbWorkout);
        }
    ).catch(
        (err) => {
            res.json(err);
        }
    );
});

// Get latest 7 workouts
router.get('/api/workouts/range', (req, res) => {
    db.Workout.find({}).limit(7).then(
        (dbWorkout) => {
            res.json(dbWorkout);
        }
    ).catch(
        (err) => {
            res.json(err);
        }
    );
});

// PUT route
// Adds an exercise to a workout
router.put('/api/workouts/:id', (req, res) => {
    db.Workout.findOneAndUpdate(
        // Filters records by id
        {_id: req.params.id},
        // Updates records with the totalDuration & exercises
        {
            $inc: {totalDuration: req.body.duration},
            $push: {exercises: req.body}
        },
        {new: true}
    ).then(
        (dbWorkout) => {
            res.json(dbWorkout);
        }
    ).catch(
        (err) => {
            res.json(err);
        }
    );
});

module.exports = router;