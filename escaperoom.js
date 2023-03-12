let codeString = "";
let sCounter = 1;
let pCounter = 1;

document.addEventListener('DOMContentLoaded', function() {
    showIntro();
    codeLight();
});

function checkInput() {
    var code = document.getElementById("code-input").textContent;
    if (code == "123") {
        window.localStorage.setItem("isDoorOpen", "True");
        playSound("sound/mixkit-correct-answer-tone-2870.wav");
        codeLight();
    } else if (code == "456") {
        playBackgroundMusic();
    } else {
        playSound("sound/mixkit-game-show-buzz-in-3090.wav");
    }
}

function codeLight() {
    var light = document.getElementById('code-light');
    var item = window.localStorage.getItem("isDoorOpen");
    if (item === null) {

    } else {
        light.style.backgroundColor = "green";
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

function playSound(string) {
    let sound = new Audio(string);
    sound.play();
}

function playBackgroundMusic() {
    console.log("Test");
    let audio = new Audio("sound/mixkit-fun-and-games-6.mp3");
    audio.loop = true;
    audio.volume = 0.1;
    audio.play();
}

function bubbleClick() {
    sCounter += 1;
    pCounter += 1;
    if (sCounter > 3) {
        playBackgroundMusic();
        closeOverlay();
    }
    var profesor = document.getElementById("profesor");
    var bubble = document.getElementById("bubble");
    bubble.src = "images/SB " + sCounter + ".svg";
    profesor.src = "images/Professor " + pCounter + ".svg";
}