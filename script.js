function showLearningApp() {
    closeOverlay();
    var overlay = document.getElementById("overlay");
    var la = document.getElementById("learningappsdiv");
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
    var la = document.getElementById("learningappsdiv");

    overlay.style.display = "none";
    codepad.style.display = "none";
    la.style.display = "none";
}

function checkInput() {
    var code = document.getElementById("code-input").value;
    if (code == "123") {
        window.localStorage.setItem("Test", "True");
    }
}

function onTürSchloss() {
    showCodeInput();
}

function onTür() {
    
}