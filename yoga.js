

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
  // var yogaDate = ("#yogaDate-input").val().trim();
  // var yogaDate = moment($("#yogaDate-input").val().trim(), "DD/MM/YYYY").format("X");
  // var yogaTime = moment($("#yogaTime-input").val().trim(), "HH:MM").format("X");
  var yogaDuration = $("#yogaDuration-input").val().trim(); 
  var yogaCost = $("#yogaCost-input").val().trim();

  var newYogaClass = {
    className: yogaClassName,
    description: yogaDescription,
    location: yogaLocation,
    // Date: yogaDate,
    // Time: yogaTime,
    duration: yogaDuration,
    cost: yogaCost,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
    
  };

  database.ref().push(newYogaClass);

  console.log(newYogaClass.yogaClassName);
  console.log(newYogaClass.yogaDescription);
  console.log(newYogaClass.yogaLocation);
  // console.log(newYogaClass.yogaDate);
  // console.log(newYogaClass.yogaTime);
  console.log(newYogaClass.yogaDuration);
  console.log(newYogaClass.yogaCost);


  $("#yogaClass-input").val("");
  $("#yogaDescription-input").val("");
  $("#yogaLocation-input").val("")
  $("#yogaDate-input").val("");
  // $("#yogaTime-input").val("");
  $("#yogaDuration-input").val("");
  $("#yogaCost-input").val("");




  
});

database.ref().on("child_added", function(childSnapshot, prevChildKey) {
  console.log(childSnapshot.val());
  
  var yogaClassName = childSnapshot.val().yogaClassName;
  var yogaDescription = childSnapshot.val().yogaDescription;
  var yogaLocation = childSnapshot.val().yogaLocation;
  // var yogaDate = childSnapshot.val().yogaDate;
  // var yogaTime = childSnapshot.val().yogaTime;
  var yogaDuration = childSnapshot.val().yogaDuration;
  var yogaCost = childSnapshot.val().yogaCost;
  
  console.log(yogaClassName);
  console.log(yogaDescription);
  console.log(yogaLocation);
  // console.log(yogaDate);
  // // console.log(yogaTime);
  console.log(yogaDuration);
  console.log(yogaCost);
  

  // MOVE DOWN ONCE YOU FIX DATE
    // var yogaTimePretty = moment.unix(yogaTime).format("HH:SS");
  // var yogaDatePretty = moment.unix(yogaDate).format("MM/DD/YY");
  // var yogaDatePretty = "07/20/2017"
  // var yogaNextClass = moment().diff(moment.unix(yogaDate, "X"), "");
  // console.log(yogaNextClass);


  $("#yogaClass-table > tbody").append("<tr><td>" + yogaClassName + "</td><td>" + yogaDescription + "</td><td>" + yogaLocation + "</td><td>" +
  "07/20/2017" + "</td><td>" + yogaDuration + "</td><td>" + yogaCost + "</td></tr>");
  }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
  });
