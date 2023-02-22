let name = "name"; 
let isLearningApp = false;
let isCodeInput = false;

function showLearningApp() {
    var overlay = document.getElementById("overlay");
    var la = document.getElementById("learningappsdiv");
    isLearningApp = !isLearningApp;
    if (isLearningApp) {
        overlay.style.display = "block";
        la.style.display = "block";
    } else {
        overlay.style.display = "none";
        la.style.display = "none";
    }
}

function showCodeInput() {
    var overlay = document.getElementById("overlay");
    var codepad = document.getElementById("code-pad");
    isCodeInput = !isCodeInput;
    if (isCodeInput) {
        overlay.style.display = "block";
        codepad.style.display = "block";
    } else {
        overlay.style.display = "none";
        codepad.style.display = "none";
    }
}