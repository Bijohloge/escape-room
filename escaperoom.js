let codeString = "";

function checkInput() {
    var code = document.getElementById("code-input").textContent;
    if (code == "123") {
        window.localStorage.setItem("isDoorOpen", "True");
        window.location.href = "https://bijohloge.github.io/escape-room/escaperoom2.html";
        playSound("sound/mixkit-correct-answer-tone-2870.wav");
    } else {
        alert("Der Code ist Falsch!!");
    }
}

function buttonClick(input) {
    var code = document.getElementById("code-input");
    if (typeof input === "number") {
        codeString += input;
        code.textContent = codeString;
    } else if (input == "del") {
        codeString = "";
        code.textContent = "";
    } else if (input == "key") {
        checkInput();
    }
}

function onTür() {
    if (window.localStorage.getItem("isDoorOpen") == "True") {
        window.location.href = "https://bijohloge.github.io/escape-room/escaperoom2.html";
    } else {
        alert("Der Code ist Falsch!!");
    }
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