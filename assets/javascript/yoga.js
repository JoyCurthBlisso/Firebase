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
  var yogaTime = $("#yogaTime-input").val();
  var yogaFrequency = $("#yogaFrequency-input").val().trim();
  var yogaDuration = $("#yogaDuration-input").val().trim(); 
  var yogaCost = $("#yogaCost-input").val().trim();

  var newYogaClass = {
    className: yogaClassName,
    description: yogaDescription,
    location: yogaLocation,
    date: yogaDate,
    time: yogaTime,
    duration: yogaDuration,
    frequency: yogaFrequency,
    cost: yogaCost,
    timeStamp: firebase.database.ServerValue.TIMESTAMP
  };

  database.ref().push(newYogaClass);
 

  $("#yogaClass-input").val("");
  $("#yogaDescription-input").val("");
  $("#yogaLocation-input").val("")
  $("#yogaFrequency-input").val("")
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
  var yogaTime = childSnapshot.val().time;
  var yogaDuration = childSnapshot.val().duration;
  var yogaCountdown = childSnapshot.val().countdown;
  var yogaFrequency = childSnapshot.val().frequency;
  var yogaCost = childSnapshot.val().cost;
 
  var now = moment();
  var yogaDatePretty = moment(yogaDate).format("MM/DD/YY");
  var nowPretty = moment(now).format("MM/DD/YY");
 
  var compareDateTime = yogaDatePretty + " " + yogaTime;
  var compareDateTimeMoment = moment(compareDateTime, 'MM/DD/YY hh:mm');

  yogaCountdown = (moment(compareDateTimeMoment).fromNow());
 
  var yogaTimeHours = (moment(compareDateTime).format("hh:mm a"));

  $("#yogaClass-table > tbody").append("<tr><td>" + yogaClassName + "</td><td>" + yogaDescription + "</td><td>" + yogaLocation + "</td><td>" + yogaDatePretty + "</td><td>" +
   yogaTimeHours + "</td><td>" +  yogaDuration + "</td><td>" + yogaCost + "</td><td>" + yogaFrequency + "</td><td>" + yogaCountdown + "</td><td>");

  }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
  });

});
