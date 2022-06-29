$(document).ready(function () {
  $(".open-button").click(function () {
    if (!$(".open-button").hasClass("open-done")) {
      $(".open-button").addClass("open-done");
      $("nav").css("left", "0px");
    } else {
      $(".open-button").removeClass("open-done");
      $("nav").css("left", "-999px");
    }
  });
});

let _DRAGGING_STARTED = 0,
  _LAST_MOUSEMOVE_POSITION = null;

$("nav, .menu").on("pointerdown", function (e) {
  _DRAGGING_STARTED = 1;
  _LAST_MOUSEMOVE_POSITION = e.clientX;
});

$("nav, .menu").on("pointerup", function (e) {
  _DRAGGING_STARTED = 0;
});

$("nav, .menu").on("pointerout", function (e) {
  _DRAGGING_STARTED = 0;
});

$("nav, .menu").on("pointermove", function (e) {
  if (_DRAGGING_STARTED === 1) {
    var current_mouse_position = e.clientX;
    if (_LAST_MOUSEMOVE_POSITION - current_mouse_position > 0) {
      document
        .querySelectorAll(".open-button")
        .forEach((elem) => elem.classList.remove("open-done"));
      document.querySelector("nav").style.left = "-999px";
    }
    if (_LAST_MOUSEMOVE_POSITION - current_mouse_position < 0) {
      document
        .querySelectorAll(".open-button")
        .forEach((elem) => elem.classList.add("open-done"));
      document.querySelector("nav").style.left = "0px";
    }

    // _LAST_MOUSEMOVE_POSITION = current_mouse_position;
  }
});

// let x1 = null;
// let y1 = null;

// const handleTouchStart = (e) => {
//   const firstTouch = e.touches[0];
//   x1 = firstTouch.clientX;
//   y1 = firstTouch.clientY;
// };
// const handleTouchMove = (e) => {
//   if (!x1 || !y1) {
//     return false;
//   }
//   let x2 = e.touches[0].clientX;
//   let y2 = e.touches[0].clientY;
//   let xDiff = x2 - x1;
//   let yDiff = y2 - y1;
//   if (xDiff < -30) {
//     document
//       .querySelectorAll(".open-button")
//       .forEach((elem) => elem.classList.remove("open-done"));
//     document.querySelector("nav").style.left = "-999px";
//   }
// };
// document
//   .querySelector("nav")
//   .addEventListener("touchstart", handleTouchStart, false);
// document
//   .querySelector("nav")
//   .addEventListener("touchmove", handleTouchMove, false);
