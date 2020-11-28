const router = require("express").Router();
const db = require("../models")

// routes

// api GET /workouts
router.get("/api/workouts", (req, res) => {
  db.Workout.find()
  .then(function(results) {
    res.json(results)
  })
});

router.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body)
  .then(function(results) {
    res.json(results)
  })
})


// api/workouts (PUT request)
router.put("/api/workouts/:id", (req, res) => {
  db.Workout.update({
    _id: req.params.id
  }, {
    $push: {
      exercises: req.body
    }
  }
  )
  .then(function(results) {
    res.json(results);
  })
})

router.get("/api/workouts/range", (req, res) => {
  db.Workout.find()
  .then(function(results) {
    res.json(results)
  })
})


// api/workouts (POST request)

module.exports = router;