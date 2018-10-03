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
