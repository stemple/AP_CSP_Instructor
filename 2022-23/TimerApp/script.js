var startBtn = document.getElementById("start");
var cancelBtn = document.getElementById("cancel");
    
var time =0;
var isRunning = false;
var timerId = null;
  
    
startBtn.onclick = function() {
    start();
}

cancelBtn.onclick = function() {
    cancel();
}
    
function start() {
    if(isRunning == false) {
        time = parseInt(document.getElementById("time").value);
        document.getElementById("alarm_message").textContent = "Waiting...";
        isRunning = true;
        timerId = window.setTimeout(alarm, time * 1000);
    }
}
  
function alarm() {
      document.getElementById("alarm_message").textContent = "Time is up!";
      isRunning = false;
}
  
function cancel() {
    window.clearTimeout(this.timerId);
    isRunning = false;
    document.getElementById("alarm_message").textContent = "Press 'Start' to start the timer.";
}