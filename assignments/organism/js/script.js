$(document).ready(function(){
console.log("Hello World");
var mousetimeout;
var screensaver_active = false;
var idletime = 5;

// detect whether the mouse is moving
$(document).mousemove(function(){
  clearTimeout(mousetimeout);
  if (screensaver_active) {
    stop_screensaver();
  }
  mousetimeout = setTimeout(show_screensaver, 1000 * idletime);
})

// show screensaver function
function show_screensaver(){
  $("#screensaver").fadeIn();
  screensaver_active = true;
  screensaver_animation();
}

// function start screensaver
function screensaver_animation(){
  if (screensaver_active) {
    $("#screensaver").animate({
      backgroundColor: changeColor()}, screensaver_animation);
  }


// change colr fuction
function changeColor(){
  myColor = "rgb("+ randomNumber() + ", " + randomNumber() + ", " + randomNumber() + ")";
  return myColor;
}
function randomNumber() {
  return Math.floor(Math.random() * 256);
}

// stop screensaver
function stop_screensaver(){
  $("#screensaver").fadeOut();
  screensaver_active = false;
}

});
