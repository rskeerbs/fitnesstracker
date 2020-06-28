var path = require("path");
const Workout = require("../models/workout.js");

module.exports = function(app){
    
  app.get("/api/workouts", (req, res) =>{
    Workout.find({}).then(data=>{
      res.json(data);
    })
    .catch(error=>{
      console.log(error);
      res.json({status: 404});
    });
  });

  app.get("/api/workouts/range", (req, res) =>{
    Workout.find({}).limit(7).then(data=>{
      res.json(data);
    })
    .catch(error=>{
      console.log(error);
      res.json({status: 404});
    });
  });
}