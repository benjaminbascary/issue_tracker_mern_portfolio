const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Issue = require("./Models/issue.model");
const path = require("path");
require("dotenv").config({ path: "./config.env" });
require("dotenv").config

app.use(express.json());


// Cors
const cors = require("cors");

// DB
mongoose.connect(process.env.MONGO_URL);

app.use(cors());


// Endpoints
app.get("/api/issues", (req, res) => {
    Issue.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

app.post("/api/postIssue", async (req, res) => {
    const issue = req.body;
    const newIssue = new Issue(issue);
    await newIssue.save();
  
    res.json(issue);
});

app.delete("/api/delete/:id", async (req, res) => {
    const id = req.params.id
    await Issue.findByIdAndRemove(id).exec()
    res.send("Issue deleted")
});



// Server test:

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname,"..", "client", "build")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname,"..", "client", "build", "index.html"));
        
    })

} else {
    app.get("/", (req, res) => {
        res.send("api running")
    })
}


app.listen(process.env.PORT || 3001, () => {
    console.log("SERVER RUNNING");
});
