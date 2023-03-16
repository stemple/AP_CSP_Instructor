var drawingCanvas = document.getElementById("canvas");

drawingCanvas.onmousedown = function(event) {
  handleMouseClick(event);
}

drawingCanvas.onmousemove = function(event) {
  updateLine(event);
}

drawingCanvas.ondblclick = function(event) {
  endLine();
}

var currentLine = null;

function startLine(x, y) {
  var newLine = document.createElementNS("http://www.w3.org/2000/svg", "line")
  newLine.setAttribute("x1", x);
  newLine.setAttribute("y1", y);
  newLine.setAttribute("x2", x);
  newLine.setAttribute("y2", y);
  drawingCanvas.appendChild(newLine);
  currentLine = newLine;
}

function handleMouseClick(event) {
  var x = event.clientX;
  var y = event.clientY;
  if (currentLine == null) {
    startLine(x,y);
  } else {
    endLine();
    startLine(x,y);
  }
}

function updateLine(event) {
  var x = event.clientX;
  var y = event.clientY; 
  if (currentLine != null) {
    currentLine.setAttribute("x2", x);
    currentLine.setAttribute("y2", y);
  }
}

function endLine() {
  if(currentLine != null) {
    currentLine = null;
  }
}

