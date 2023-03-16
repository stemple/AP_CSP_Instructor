let ColoredBoxesApp = {
  box1: document.getElementsByClassName("box")[0],
  box2: document.getElementsByClassName("box")[1],

  init: function() {
    this.box1.onclick = function(event) {
        ColoredBoxesApp.changeColor(event);
    }

    this.box2.onclick = function(event) {
        ColoredBoxesApp.changeColor(event);
    }
  },

  changeColor: function(event) {
    event.target.style.backgroundColor = 'red';
  }

}

ColoredBoxesApp.init();