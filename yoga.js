

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
  var yogaLocation = $(#yogaLocation-input").val().trim();
  var yogaTime = moment($("#yogaTime-input").val().trim(), "HH:MM").format("X");
  var yogaDuration = $("#yogaDuration-input").val().trim(); 
  var yogaCost = $("#yogaCost-input").val().trim();

  var newYogaClass = {
    ClassName: yogaClassName,
    Description: yogaDescription,
    Location: yogaLocation,
    Time: yogaTime,
    Duration: yogaDuration,
    Cost: yogaCost,
    
  };

  database.ref().push(newyogaClass);

  console.log(newYogaClass.yogaClassName);
  console.log(newYogaClass.yogaDescription);
  console.log(newYogaClass.yogaLocation);
  console.log(newYogaClass.yogaTime);
  console.log(newYogaClass.yogaDuration);
  console.log(newYogaClass.yogaCost);

  alert("New Yoga Class successfully added");

  $("#yogaClass-input").val("");
  $("#yogaDescription-input").val("");
  $("#yogaTime-input").val("");
  $("#yogaDuration-input").val("");
  $("#yogaCost-input").val("");
  
  
});

database.ref().on("child_added", function(childSnapshot, prevChildKey) {
  console.log(childSnapshot.val());
  
  var yogaClassName = childSnapshot.val().yogaClassName;
  var yogaDescription = childSnapshot.val().yogaDescription;
  var yogaLocation = childSnapshot.val().yogaLocation;
  var yogaTime = childSnapshot.val().yogaTime;
  var yogaDuration = childSnapshot.val().yogaDuration;
  var yogaCost = childSnapshot.val().yogaCost;
  
  console.log(yogaClassName);
  console.log(yogaDescription);
  console.log(yogaLocation);
  console.log(yogaTime);
  console.log(yogaDuration);
  console.log(yogaCost);
  

  var yogaTimePretty = moment.unix(yogaTime).format("HH:SS");

  var yogaNextClass = moment().diff(moment.unix(yogaTime, "X"), "");
  console.log(yogaNextClass);

  $("#yogaClass-table > tbody").append("<tr><td>" + yogaClassName + "</td><td>" + yogaDescription + "</td><td>" +
  yogaTimePretty + "</td><td>" + yogaLocation + "</td><td>" + yogaDuration + "</td><td>" + yogaCost + "</td></tr>");
});
