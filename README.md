# Draggable HTML Elements

drag and drop html elements. simple JavaScript code which can drag and drop the elements in the html document.
<hr/>
#HTML
```
<pre>
<link rel="stylesheet" href="style.css" />
<div class="wrapper">
  <div id="mover">
    <div id="mover-header">Grab from here</div>
    <span>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem qui
      nesciunt placeat rem exercitationem modi ipsa similique perspiciatis
      dolorum aperiam rerum, id amet quaerat quisquam hic. Animi esse neque
      nisi!
    </span>
  </div>
</div>
<div id="mover">
    <div id="mover-header">Grab from here</div>
    <span>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem qui
      nesciunt placeat rem exercitationem modi ipsa similique perspiciatis
      dolorum aperiam rerum, id amet quaerat quisquam hic. Animi esse neque
      nisi!
    </span>
  </div>
</div>
<script src="index.js"></script>
</pre>
```
div element with mover id you can place multiple mover elements in the documents.

#CSS

```
body {
  background: #230f47;
}
#mover {
  position: absolute;
  z-index: 9;
  background-color: #f1f1f1;
  border: 1px solid #d3d3d3;
  text-align: center;
  max-width: 270px;
  background: #8bc34a;
  border-radius: 22px;
  overflow: hidden;
}
#mover span {
  padding: 10px;
  display: block;
  color: white;
}
#mover-header {
  padding: 10px;
  cursor: move;
  z-index: 10;
  background-color: #ff4d00;
  color: #fff;
}
```
###simple style of the elements 

#JavaScript

#### the javascript is the main part of the draggable elements. 

```
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
```
first declaring a function to wrap all the code 
```
function DragTheElement(element) {}
```
#### JavaScript code explanation

```
// declaring global position variables
var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
   
// apply the onmousedown eventlistener of the mover element(#mover-header) 

if (document.getElementById(element.childNodes[1])) {
    document.getElementById(element.childNodes[1]).onmousedown =
      MouseMotionObserver;
  } else {
    element.onmousedown = MouseMotionObserver;
  }
  
  // element(#mover) childNode is #mover-header and the MouseMotionObserer function work from here.
  
   function MouseMotionObserver(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = StopMoving;
    document.onmousemove = MoveElement;
  }
// MosueMotionObserver function watch the mouse move and mouse up on the element(#mover-header)

function MoveElement(e) {
    // e is mouse movement on the object
    e = e || window.event;
    e.preventDefault();
    // e.clientX is mouse movement horizontally and e.clientY is Vertically
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // change the style of the element when client x and y is changed
    element.style.top = element.offsetTop - pos2 + "px";
    element.style.left = element.offsetLeft - pos1 + "px";
  }
 
 // this is the mouse move function. this function execute when client click on the element(#mover-header) and the function is set on MouseMotionObserver function
 
  function StopMoving() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
  
  // function StopMoving remove the eventlisteners on the document.
