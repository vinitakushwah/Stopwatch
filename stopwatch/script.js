var sec = 00;
var addhours = 00;
var addminute = 00;

var minute = document.getElementById('minute');
var seconds = document.getElementById('seconds');
var hours = document.getElementById('hours');
var start = document.getElementById('start');
var stop_btn = document.getElementById('stop');
var reset = document.getElementById('reset');
var resume = document.getElementById('resume');
var pause = document.getElementById('pause');

var interval;

//   handler for start button 

start.addEventListener('click', () => {
    start.disabled = true;
    stop_btn.disabled = false;
    reset.disabled = false;
    resume.disabled = true;
    pause.disabled = false;

    clearInterval(interval);
    interval = setInterval(starTimer, 1000);


});

//  handler for stop button function

stop_btn.addEventListener('click', () => {
    clearInterval(interval);
    sec = 00;
    addhours = 00;
    addminute = 00;
    hours.innerHTML = 00;
    seconds.innerHTML = 00;
    minute.innerHTML = 00;
    start.disabled = false;
    stop_btn.disabled = true;
    reset.disabled = true;
    resume.disabled = true;
    pause.disabled = true;
});

// handler  for reset button

reset.addEventListener('click', () => {
    clearInterval(interval);
    sec = 00;
    addhours = 00;
    addminute = 00;
    hours.innerHTML = 00;
    minute.innerHTML = 00;
    seconds.innerHTML = 00;
    start.disabled = false;
    stop_btn.disabled = true;
    reset.disabled = true;
    resume.disabled = true;
    pause.disabled = true;

});

// handler for pause button

pause.addEventListener('click', () => {
    clearInterval(interval);
    resume.disabled = false;
    pause.disabled = true;
    reset.disabled = true;
    stop_btn.disabled = true;

});


// handler for resume

resume.addEventListener('click', () => {
    interval = setInterval(starTimer, 1000);
    resume.disabled = true;
    start.disabled = true;
    pause.disabled = false;
    stop_btn.disabled = false;
    reset.disabled = false;

});


function starTimer() {

    sec += 1;

    seconds.innerHTML = sec;
    if (sec == 60) {
        sec = 1;
        addminute += 1;
        // console.log("adminute", addminute);
        minute.innerHTML = addminute;

        if (addminute == 60) {
            addminute = 1;
            addhours += 1;
            hours.innerHTML = addhours;
        }

    }


};