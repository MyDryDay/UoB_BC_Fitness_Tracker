const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Please add the type of exercise.",
        },
        name: {
            type: String,
            trim: true,
            required: "Please enter the name of the exercise.",
        },
        duration: {
            type: Number,
            required: "Please enter the duration of the exercise.",
        },
        weight: {
            type: Number,
            default: 0,
        },
        reps: {
            type: Number,
            default: 0,
        },
        sets: {
            type: Number,
            default: 0,
        },
        distance: {
            type: Number,
            default: 0,
        },
    }],
    totalDuration: {
        type: Number,
        default: 0,
    }
});

const Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;