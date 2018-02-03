$(document).ready(function()
  {

 var config = {
    apiKey: "AIzaSyBH5aSzh1BaieT92jcfY22p1sjlBeAMJ3o",
    authDomain: "yoga-a50df.firebaseapp.com",
    databaseURL: "https://yoga-a50df.firebaseio.com",
    projectId: "yoga-a50df",
    storageBucket: "",
    messagingSenderId: "380429573745"
  };
  
firebase.initializeApp(config);
var database = firebase.database();

$("#add-yogaClass-btn").on("click", function(event) {
  event.preventDefault();
 
  var yogaClassName = $("#yogaClass-input").val().trim();
  var yogaDescription = $("#yogaDescription-input").val().trim();
  var yogaLocation = $("#yogaLocation-input").val().trim();
  var yogaDate = $("#yogaDate-input").val().trim();
  var yogaTime = moment($("#yogaTime-input").val().trim(), "HH:MM").format("X");
  var yogaFrequency = $("#yogaFrequency-input").val().trim();
  var yogaDuration = $("#yogaDuration-input").val().trim(); 
  var yogaCost = $("#yogaCost-input").val().trim();
  

  var newYogaClass = {
    className: yogaClassName,
    description: yogaDescription,
    location: yogaLocation,
    date: yogaDate,
    Time: yogaTime,
    duration: yogaDuration,
    frequency: yogaFrequency,
    // countdown: yogaCountdown,
    cost: yogaCost,
    timeStamp: firebase.database.ServerValue.TIMESTAMP
    
  };
  //check to see if any variables are equal to empty quotes
  //or jquery each add class to inputs
  if (yogaLocation !== "" && yogaClassName !== "" && yogaDescription !== "" && yogaDate !== "" && yogaTime !== "" && yogaFrequency !== "" && yogaDuration !== "" && yogaCost !== ""){
  database.ref().push(newYogaClass);
  }
  else{
    alert("please fill out all fields");
    //maybe highlight text or border of which one not filled out
  }
  // else bootstrap modal 

  console.log(newYogaClass.yogaClassName);
  console.log(newYogaClass.yogaDescription);
  console.log(newYogaClass.yogaLocation);
  console.log(newYogaClass.yogaDate);
  console.log(newYogaClass.yogaTime);
  console.log(newYogaClass.yogaCountdown);
  console.log(newYogaClass.yogaFrequency);
  console.log(newYogaClass.yogaDuration);
  console.log(newYogaClass.yogaCost);


  $("#yogaClass-input").val("");
  $("#yogaDescription-input").val("");
  $("#yogaLocation-input").val("")
  $("#yogaFrequency-input").val("")
  // $("#yogaCountdown-input-input").val("")
  $("#yogaDate-input").val("");
  $("#yogaTime-input").val("");
  $("#yogaDuration-input").val("");
  $("#yogaCost-input").val("");


  
});

database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val());
  
  var yogaClassName = childSnapshot.val().className;
  var yogaDescription = childSnapshot.val().description;
  var yogaLocation = childSnapshot.val().location;
  var yogaDate = childSnapshot.val().date;
  var yogaTime = childSnapshot.val().yogaTime;
  var yogaDuration = childSnapshot.val().duration;
  var yogaCountdown = childSnapshot.val().countdown;
  var yogaFrequency = childSnapshot.val().frequency;
  var yogaCost = childSnapshot.val().cost;
  
  console.log(yogaClassName);
  console.log(yogaDescription);
  console.log(yogaLocation);
  console.log(yogaDate);
  console.log(yogaTime);
  console.log(yogaDuration);
  console.log(yogaCountdown);
  console.log(yogaFrequency);
  console.log(yogaCost);
  


  moment(yogaDate);
  console.log(yogaDate);

  // function yogaCountdown(){
  var now = moment();
  var yogaDatePretty = moment(yogaDate).format("MM/DD/YY");
  var nowPretty = moment(now).format("MM/DD/YY");

  console.log(nowPretty + "now format");

  var yogaDiffDays = (moment(yogaDatePretty).diff(nowPretty, "days"));
  console.log(yogaDiffDays + " diff date");

  yogaCountdown = (moment(yogaDatePretty).fromNow());
  console.log(moment(yogaDatePretty).fromNow() + " from now");

  // return yogaCountdown;
  // }
  
  $("#yogaClass-table > tbody").append("<tr><td>" + yogaClassName + "</td><td>" + yogaDescription + "</td><td>" + yogaLocation + "</td><td>" + yogaDatePretty + "</td><td>" +
  yogaTime + "</td><td>" +  yogaDuration + "</td><td>" + yogaCost + "</td><td>" + yogaFrequency + "</td><td>" + yogaCountdown + "</td><td>");
  }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
  });


});
