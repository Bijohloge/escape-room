let codeString = "";
let sCounter = 1;
let pCounter = 1;

document.addEventListener('DOMContentLoaded', function() {
    showIntro();
    codeLight();
});

function checkInput() {
    var code = document.getElementById("code-input").textContent;
    if (code == "244998") {
        window.localStorage.setItem("isDoorOpen", "True");
        playSound("sound/mixkit-correct-answer-tone-2870.wav");
        codeLight();
        var tür = document.getElementById('tür').firstElementChild;
        tür.style.boxShadow = "0 0 20px #9ecaed";
        setTimeout(function() { closeOverlay() }, 1500);
    } else {

        playSound("sound/mixkit-game-show-buzz-in-3090.wav");

    }

}



function codeLight() {

    var light = document.getElementById('code-light');
    var schloss = document.getElementById('türschloss-img');
    var item = window.localStorage.getItem("isDoorOpen");
    if (item === null) {

    } else {
        light.style.backgroundColor = "green";
        schloss.src = "images/code-pad-an.png";
    }
}

function showIntro() {
    closeOverlay();
    var div = document.getElementById("einführung");
    var overlay = document.getElementById("overlay");
    overlay.style.display = "block";
    div.style.display = "block";
}

function buttonClick(input) {
    var code = document.getElementById("code-input");
    if (typeof input === "number") {
        if (codeString.length < 10) {
            codeString += input;
            code.textContent = codeString;
        }

    } else if (input == "del") {
        codeString = "";
        code.textContent = "";
    } else if (input == "key") {
        checkInput();
    }
    playSound("sound/mixkit-cool-interface-click-tone-2568.wav");
}

function onTür() {
    if (window.localStorage.getItem("isDoorOpen") == "True") {
        window.location.href = "https://bijohloge.github.io/escape-room/escaperoom2.html";
    } else {
        playSound("sound/mixkit-game-show-buzz-in-3090.wav");
    }
}

function toggleCodePad() {
    var x;
}

function showCodeInput() {
    closeOverlay();
    var overlay = document.getElementById("overlay");
    var codepad = document.getElementById("code-pad");
    overlay.style.display = "block";
    codepad.style.display = "flex";
}

function bubbleClick() {
    sCounter += 1;
    pCounter += 1;
    playSound('sound/mixkit-light-switch-sound-2579.wav');
    if (sCounter > 4) {
        playBackgroundMusic("sound/mixkit-fun-and-games-6.mp3");
        closeOverlay();
    }
    if (pCounter > 3) {
        pCounter = 1;
    }
    var profesor = document.getElementById("profesor");
    var bubble = document.getElementById("bubble");
    bubble.src = "images/SB " + sCounter + ".svg";
    profesor.src = "images/Professor " + pCounter + ".svg";
}