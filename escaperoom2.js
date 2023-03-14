var sicherungen = [false, false, false, false, false, false, false, false];
var sicherungenAntwort = [true, true, false, true, false, false, true, true];
var colors = ["green", "blue", "red", "black", "white", "aqua", "yellow", "orange"];
var cols = [0, 0, 0, 0];
var answer = [3, 4, 2, 6];
let sCounter = 1;
let pCounter = 1;
var millis = 0;

document.addEventListener('DOMContentLoaded', function() {
    showIntro();
    onPower();
    if (localStorage.hasOwnProperty("hasCard")) {
        var tres = document.getElementById("tresor").firstElementChild;
        tres.src = "images/Tresor 2.svg";
        localStorage.setItem("hasCard", "True");
        var card = document.getElementById("card");
        card.style.display = "block";
    }
});

function openKasten() {
    var kasten = document.getElementById("Sicherungskasten");
    var overlay = document.getElementById("overlay");
    overlay.style.display = "block";
    kasten.style.display = "block";
    playSound("sound/mixkit-electricity-buzz-910(1).wav");
    playSound("sound/mixkit-gear-metallic-lock-sound-2858.wav");
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

function showIntro() {
    closeOverlay();
    var div = document.getElementById("einführung");
    var overlay = document.getElementById("overlay");
    overlay.style.display = "block";
    div.style.display = "block";
}

function bubbleClick() {
    sCounter += 1;
    pCounter += 1;
    playSound('sound/mixkit-light-switch-sound-2579.wav');
    if (sCounter > 2) {
        playBackgroundMusic("sound/mixkit-infected-vibes-157.mp3");
        closeOverlay();
    }
    if (pCounter > 3) {
        pCounter = 1;
    }
    var profesor = document.getElementById("profesor");
    var bubble = document.getElementById("bubble");
    bubble.src = "images/Raum 2 SB " + sCounter + ".svg";
    profesor.src = "images/Professor " + pCounter + ".svg";
}

function showTresor() {
    var item = window.localStorage.getItem("isTresorOpen");
    try {
        var sound = playSound('sound/mixkit-factory-metal-hard-hit-2980.wav');
        sound.volume = 0.2;
    } catch (error) {
        console.log(error);
    }

    if (item === null) {
        var kasten = document.getElementById("tresor-div");
        var overlay = document.getElementById("overlay");
        overlay.style.display = "block";
        kasten.style.display = "block";
        codeLight();
    } else {
        if (!localStorage.hasOwnProperty("hasCard")) {
            var tres = document.getElementById("tresor").firstElementChild;
            tres.src = "images/Tresor 2.svg";
            localStorage.setItem("hasCard", "True");
            var card = document.getElementById("card");
            card.style.display = "block";
        }
    }

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
    var currentMillis = new Date().getTime();
    if (currentMillis - millis > 1000) {
        millis = currentMillis;
    } else {
        return;
    }
    if (JSON.stringify(cols) == JSON.stringify(answer)) {
        window.localStorage.setItem("isTresorOpen", "True");
        playSound("sound/mixkit-correct-answer-tone-2870.wav");
        var tres = document.getElementById("tresor").firstElementChild;
        tres.src = "images/Tresor 1.svg";
        codeLight();
    }
}

function onTür() {
    var item = window.localStorage.getItem("hasCard");
    console.log(item);
    if (item === null) {
        playSound("sound/mixkit-game-show-buzz-in-3090.wav");

    } else {
        window.location.href = "https://bijohloge.github.io/escape-room/end.html";
    }

}