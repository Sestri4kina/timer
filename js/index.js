var timer = (function() {
  var second = 0;
  var minute = 0;
  var time;
  var timerOn = 0;

  return {
    count: function() {
      document.getElementById("second").value = second;
      document.getElementById("minute").value = minute;
      if (second < 59) {
        second += 1;
        time = setTimeout(function(){timer.count();}, 1000);
      } else {
        second = -1; 
        second += 1;
        time = setTimeout(function(){timer.count();}, 1000);
        minute += 1;
      }
    },

    start: function () {
      if (!timerOn) {
        timerOn = 1;
        timer.count();
      }
    },

    stop: function () {
      clearTimeout(time);
      timerOn = 0;
    },

    clearTimer: function() { 
      document.getElementById("second").value = "00";
      document.getElementById("minute").value = "00";
       
    }
  };  
})();