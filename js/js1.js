var date = new Date();
var curTime = date.getHours();
var greetings;
if(curTime > 20 || curTime < 4){
  greetings = "Good Evening!";
}
else if(curTime > 18){
  greetings = "Good Evening!";
}
else if(curTime > 12){
  greetings = "Good Noon!";
}
else if(curTime > 6){
  greetings = "Good Morning!";
}
else{
  greetings = "Good Fajr!";
}
document.write("Hey, " + greetings);
