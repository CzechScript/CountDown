const daysHTML = document.getElementById("days");
const hoursHTML = document.getElementById("hours");
const minsHTML = document.getElementById("mins");
const secondsHTML = document.getElementById("seconds");
const currentHTML = document.getElementById("current");

const dayD = "10 Oct 2020";

function countdown() {
    const dayDDate = new Date(dayD);
    const currentDate = new Date();

    const totalSeconds = (dayDDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysHTML.innerHTML = days;
    hoursHTML.innerHTML = formateTime(hours);
    minsHTML.innerHTML = formateTime(minutes);
    secondsHTML.innerHTML = formateTime(seconds);
    currentHTML.innerHTML = dayD;
}

function formateTime(time) {
    if (time < 10) {
        return `0${time}`;
    } else {
        return time;
    }
}

countdown();

setInterval(countdown, 1000);