var sicherungen = [false, false, false, false, false, false, false, false];
var sicherungenAntwort = [true, true, false, true, false, false, true, true];
var colors = ["green", "blue", "red", "black", "white", "aqua", "yellow", "orange"];
var cols = [0, 0, 0, 0];
var answer = [3, 4, 2, 6];

document.addEventListener('DOMContentLoaded', function() {
    onPower();
});

function openKasten() {
    var kasten = document.getElementById("Sicherungskasten");
    var overlay = document.getElementById("overlay");
    overlay.style.display = "block";
    kasten.style.display = "block";
}

function sicherungsSchalter(id) {

    var schalter = document.getElementById(id);
    var num = Number(id) - 1;
    sicherungen[num] = !sicherungen[num];
    console.log(sicherungen);
    var img;
    if (sicherungen[num]) {
        img = "images/Sicherung An.svg";
    } else {
        img = "images/Sicherung Aus.svg";
    }
    schalter.firstElementChild.src = img;
    if (JSON.stringify(sicherungen) == JSON.stringify(sicherungenAntwort)) {
        window.localStorage.setItem("Power", "True");
        onPower();
    }

    playSound("sound/mixkit-gear-metallic-lock-sound-2858.wav");
}

function onPower() {
    var item = window.localStorage.getItem("Power");
    if (item === null) {

    } else {
        var automat = document.getElementById("spielautomat").firstElementChild;
        automat.src = "images/Spielautomat formatiert.svg";
    }
}

function showTresor() {
    var kasten = document.getElementById("tresor-div");
    var overlay = document.getElementById("overlay");
    overlay.style.display = "block";
    kasten.style.display = "block";
    codeLight();
}

function codeLight() {
    var light = document.getElementById('code-light');
    //var schloss = document.getElementById('türschloss-img');
    var item = window.localStorage.getItem("isTresorOpen");
    if (item === null) {

    } else {
        light.style.backgroundColor = "green";
    }
}

function onPlate(id) {
    var element = document.getElementById("p" + id);
    var num = Number(id) - 1;
    if (cols[num] + 1 < colors.length) {
        cols[num] = cols[num] + 1;
        element.style.backgroundColor = colors[cols[num]];
    } else {
        cols[num] = 0;
        element.style.backgroundColor = colors[0];
    }
    playSound("sound/mixkit-basketball-ball-hard-hit-2093 (1).wav");
    if (JSON.stringify(cols) == JSON.stringify(answer)) {
        window.localStorage.setItem("isTresorOpen", "True");
        playSound("sound/mixkit-correct-answer-tone-2870.wav");
        codeLight();
    }
}

function onTür() {
    var item = window.localStorage.getItem("isTresorOpen");
    if (item === null) {

    } else {
        window.location.href = "https://bijohloge.github.io/escape-room/end.html";
    }
}