const mongoose = require("mongoose");

const IssueSchema = new mongoose.Schema({
    developer: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const Issue = mongoose.model("issues", IssueSchema)

module.exports = Issue;