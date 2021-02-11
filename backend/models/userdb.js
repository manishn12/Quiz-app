const mongoose = require('mongoose');

const User = mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
    gameplayed: {
        type: Number,
    },
    score: {
        type: Number,
    },
    consistency: {
        type: Number,
    },
    deviance: {
        type: Number,
    },
    siteDeviance: {
        type: Number,
    },
    rank: {
        type: Number,
    },
});

module.exports = User;
