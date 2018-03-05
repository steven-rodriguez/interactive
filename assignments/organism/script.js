$(document).ready(function() {
var mousetimeout;
var screensaver_active = false;
var idletime = 4;

show_screensaver();

// detect whether the mouse is moving
$(document).mousemove(function(){
  clearTimeout(mousetimeout);
  if (screensaver_active) {
    stop_screensaver();
  }
  mousetimeout = setTimeout(show_screensaver, 1000 * idletime);
});

// show screensaver function
function show_screensaver(){
  $("#screensaver").fadeIn();
  $("#germ").addClass("wobble");
  screensaver_active = true;
  // screensaver_animation();
}

// // function start screensaver
// function screensaver_animation(){
//   if (screensaver_active) {
//     $("#screensaver").css("background-color", "rgba(0,0,0,.85)");
//   }
// }

// stop screensaver
function stop_screensaver(){
  $("#screensaver").fadeOut();
  console.log("Stop Screensaver!!!")
  screensaver_active = false;
}

});
