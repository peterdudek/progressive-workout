const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "workouts_db"
const collections = ["workouts"]

const db = mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/custommethoddb" + databaseUrl);

// db.on("error", error => {
//   console.log("Database Error:", error);
// });

app.get("/", (req, res) => {
  res.send(index.html)
});

// routes

// api GET /workouts


//api GET /exercise
app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "public/exercise.html"))
});


// api/workouts (PUT request)

// api/workouts (POST request)


app.listen(3000, () => {
  console.log("App running on port 3000!");
});
