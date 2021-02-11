const mongoose = require('mongoose');

const Admin = mongoose.Schema({
    question: {
        type: String,
    },
    option1: {
        type: String,
    },
    option2: {
        type: String,
    },
    option3: {
        type: String,
    },
    option4: {
        type: String,
    },
    answer: {
        type: String,
    },
    hint: {
        type: String,
    },
    username: {
        type: String,
    },
    password: {
        type: String,
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
    siteConsistency: {
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
    date: {
        type: Date,
    },
});

module.exports = mongoose.model('Admin', Admin);
