const express = require("express");
const bodyParser = require("body-parser");
const app = express();


app.use(bodyParser.urlencoded({
  extended: true
}));
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/BMIcalculator.html");
});

app.post("/bmicalculator", function(req, res){
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = weight / (height * height);
  res.send("BMI is " + bmi);
});
app.post("/", function(req, res) {
  //  console.log(req.body);
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  res.send("The result of calculation is " + (num1 + num2));

});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
