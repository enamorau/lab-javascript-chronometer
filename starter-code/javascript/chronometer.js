// Constructor

function Chronometer() {
this.currentTime = 0;
this.intervalId = 0 ;

this.startClick = function() {

this.currentTime = setInterval(function() {
  this.currentTime++;
  this.intervalId++;
}, 1000);
if (this.currentTime > 100) {
  ClearInterval()
}
}

this.setMinutes = function () {
  return parseInt(this.currentTime / 60);
}

this.setSeconds = function() {
  return parseInt(this.currentTime % 60)
}

this.twoDigitsNumber = function(number) {
if (number < 10) {
   number = "0" + number;
   return number.toString();
}
else {
  return number.toString();
}
}


}

// Chronometer.prototype.startClick = function () {

// };

// Chronometer.prototype.setMinutes = function () {
  
// };

// Chronometer.prototype.setSeconds = function () {
  
// };

// Chronometer.prototype.twoDigitsNumber = function () {
  
// };

// Chronometer.prototype.setTime = function () {

// };

// Chronometer.prototype.setMilliseconds = function () {

// };

// Chronometer.prototype.stopClick = function () {
  
// };

// Chronometer.prototype.resetClick = function () {

// };

// Chronometer.prototype.splitClick = function () {

// };
