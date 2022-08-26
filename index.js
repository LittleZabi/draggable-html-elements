let element = document.querySelectorAll("#mover");
element.forEach((element) => {
  DragTheElement(element);
});
function DragTheElement(element) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(element.childNodes[1])) {
    document.getElementById(element.childNodes[1]).onmousedown =
      MouseMotionObserver;
  } else {
    element.onmousedown = MouseMotionObserver;
  }
  function MouseMotionObserver(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = StopMoving;
    document.onmousemove = MoveElement;
  }

  function MoveElement(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    element.style.top = element.offsetTop - pos2 + "px";
    element.style.left = element.offsetLeft - pos1 + "px";
  }
  function StopMoving() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
