let AimatedCircleApp = {
  
  // This is an abstract representation of the animated div
  circle: {
    x_pos: 0,
    y_pos: 0,
    x_velocity: 1,
    y_velocity: 0,
    element: document.getElementById("circle1")
  },

  // The setInterval id
  animation1: undefined,

  init: function() {
    this.startAnimation();
  },

  startAnimation: function() {
    this.animation1 = window.setInterval(this.animateCircle.bind(AimatedCircleApp), 10);
  },

  animateCircle: function() {
    this.circle.x_pos = this.circle.x_pos + this.circle.x_velocity;
    this.circle.y_pos = this.circle.y_pos + this.circle.y_velocity;
    this.renderCircle();
  },

  renderCircle: function() {
    this.circle.element.style.top = this.circle.y_pos + "px";
    this.circle.element.style.left = this.circle.x_pos + "px";
  }

}

AimatedCircleApp.init();