let hours = 0;
let minutes = 0;
let seconds = 0;
let isRuning = false;
let timerclear;

function updateTime() {
    if (seconds === 59) {
        seconds = 0;
        minutes++;

        if (minutes < 10) {
            minutes = `0${minutes}`;
        }

        if (minutes === 59) {
            minutes = 0;
            hours++;
            if(hours < 10){
                hours = `0${hours}`;
            }
        }


    } else {
        seconds++;
        if (seconds < 10) {
            seconds = `0${seconds}`;
        }
    }
    if (minutes == 0) {
        minutes = `00`;
    }
    if (seconds == 0) {
        seconds = `00`;
    }
    if (hours == 0) {
        hours = `00`;
    }
    display();

}



function display() {
    document.querySelector('#hours').innerHTML = hours;
    document.querySelector('#minutes').innerHTML = minutes;
    document.querySelector('#seconds').innerHTML = seconds;
}


// let hours = 0;
// let minutes = 0;
// let seconds = 0;
// let isRuning = false;
// let timerclear;


// function updateTime() {

//     if (seconds === 59) {

//         seconds = 0;
//         if (minutes === 59) {
//             minutes = 0;
//             hours++;
//         }
//         minutes++;

//     } else {
//         seconds++;
//     }
//     display();

// }


function start() {
    if (isRuning === false) {
        timerclear = setInterval(updateTime, 1000);
        isRuning = true;
    }
}
function stop() {
    clearInterval(timerclear);
    isRuning = false;
}
function reset() {
    hours = 00;
    minutes = 00;
    seconds = 00;
    if (minutes == 0) {
        minutes = `00`;
    }
    if (seconds == 0) {
        seconds = `00`;
    }
    if (hours == 0) {
        hours = `00`;
    }
    stop();
    display();
    isRuning = false;

}


