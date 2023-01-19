var time;
var milsec = 00;
var sec = 00;
var minutes = 00;
function start(){
  //setInterval() repeats a given function at every given time-interval
  time = setInterval(startTime,10);
}
function stop(){
  //stop the executions of the function specified in the setInterval() method
  clearInterval(time);
}

function reset(){
  clearInterval(time)
  milsec = "00";
  sec = "00";
  minutes = "00";
  document.getElementById("milliSeconds").innerHTML = milsec;
  document.getElementById("seconds").innerHTML = sec;
  document.getElementById("minutes").innerHTML = minutes;
}

function startTime() {
  milsec++
  
  if(milsec<=9){
    document.getElementById("milliSeconds").innerHTML = "0" + milsec;
  }
  
  if(milsec>9){
    document.getElementById("milliSeconds").innerHTML = milsec
  }
  
  if(milsec > 99){
    sec++;
    document.getElementById("seconds").innerHTML = "0" + sec;
    milsec = 0;
    document.getElementById("milliSeconds").innerHTML = "0" + milsec;
  }

  if(sec>9){
    document.getElementById("seconds").innerHTML = sec;
  }

  if(sec>59){
    minutes++;
    document.getElementById("minutes").innerHTML = "0" + minutes;
    sec = 0;
    document.getElementById("seconds").innerHTML = "0" + sec;
  }

  if(minutes>9){
    document.getElementById("minutes").innerHTML = minutes;
  }
}