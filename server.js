//test
const express = require("express");
const mongoose = require("mongoose");

var PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({extended:true}));

app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/workout",{
  useNewUrlParser:true, 
  useFindAndModify:false
});

require("./routes/api.js")(app);
require("./routes/view.js")(app);


app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });