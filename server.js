const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "workout"
 

 mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/" + databaseUrl);

// db.on("error", error => {
//   console.log("Database Error:", error);
// });
app.use(require("./routes/api-routes.js"))
app.use(require("./routes/html-routes.js"))




app.listen(3000, () => {
  console.log("App running on port 3000!");
});
