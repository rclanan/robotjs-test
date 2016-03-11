//Move the mouse across the screen
var robot = require("robotjs");

//Speed up the mouse.
robot.setMouseDelay(2);

var distance_x_px = 1;
var check_interval_secs = 60;

var movement_x = distance_x_px;
var check_interval_millis = check_interval_secs * 1000;

while(true) {
  sleep(check_interval_millis);
  movement_x = -1 * movement_x;
  robot.moveMouse(movement_x, 0);
}

function sleep(delay) {
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}
