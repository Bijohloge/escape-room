function showLearningApp(url) {
    closeOverlay();
    var overlay = document.getElementById("overlay");
    var la = document.getElementById("learningapps");
    la.setAttribute("src", url);
    overlay.style.display = "block";
    la.style.display = "block";
}

function showCodeInput() {
    closeOverlay();
    var overlay = document.getElementById("overlay");
    var codepad = document.getElementById("code-pad");
    overlay.style.display = "block";
    codepad.style.display = "block";
    
}

function closeOverlay() {
    var overlay = document.getElementById("overlay");
    var codepad = document.getElementById("code-pad");
    var la = document.getElementById("learningapps");

    overlay.style.display = "none";
    codepad.style.display = "none";
    la.style.display = "none";
}

function checkInput() {
    var code = document.getElementById("code-input").value;
    if (code == "123") {
        window.localStorage.setItem("isDoorOpen", "True");
        window.location.href = "https://bijohloge.github.io/escape-room/escaperoom2.html";
    }
}

function onTür() {
    if (window.localStorage.getItem("isDoorOpen") == "True") {
        window.location.href = "https://bijohloge.github.io/escape-room/escaperoom2.html";
    } else {
        alert("Du musst erst den Code richtig eingeben bevor du Durch die Tür gehen darfst!!!");
    }
}