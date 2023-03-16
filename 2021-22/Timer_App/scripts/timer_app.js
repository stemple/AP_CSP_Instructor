let TimerApp = {
  
  startBtn: document.getElementById("start"),
  cancelBtn: document.getElementById("cancel"),
  time: 0,
  isRunning: false,
  timerId: null,

  init: function() {
    this.startBtn.onclick = function() {
      TimerApp.start();
    }
    this.cancelBtn.onclick = function() {
      TimerApp.cancel();
    }
  },

  start: function() {
    if(this.isRunning == false) {
      this.time = parseInt(document.getElementById("time").value);
      document.getElementById("alarm_message").textContent = "Waiting..."
      this.isRunning = true;
      this.timerId = window.setTimeout(this.alarm.bind(TimerApp), this.time * 1000);
    } else {
      this.cancel();
    }
  },

  alarm: function() {
    document.getElementById("alarm_message").textContent = "Time is up!";
    this.isRunning = false;
  },

  cancel: function() {
    window.clearTimeout(this.timerId);
    this.running = false;
    document.getElementById("alarm_message").textContent = "Press 'Start' to start the timer.";
  },

}

TimerApp.init();