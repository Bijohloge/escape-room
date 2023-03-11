let codeString = "";
document.addEventListener('DOMContentLoaded', function() {
    setupSound();
});

function checkInput() {
    var code = document.getElementById("code-input").textContent;
    if (code == "123") {
        window.localStorage.setItem("isDoorOpen", "True");
        window.location.href = "https://bijohloge.github.io/escape-room/escaperoom2.html";
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

function setupSound() {
    let hoverSound = new Audio("sound/click.wav");
    var elements = document.querySelectorAll('.code-button');
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('mouseover', (event) => {
            hoverSound.play();
        })
    }
}