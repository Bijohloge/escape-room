let codeString = "";

document.addEventListener('DOMContentLoaded', function(event) {
    var element = document.querySelector('#background-image');
    var content = document.getElementById("content-div");
    var style = getComputedStyle(element);
    var height = element.clientHeight;
    var width = element.clientWidth;

    var x = 0;
    var y = 0;
    var i = 1;
    while (x == 0 && y == 0) {
        if (i * 16 > width) {
            x = i * 16;
            break;
        }
        if (i * 9 > height) {
            y = i * 9;
            break;
        }
        i++;
    }
    if (x == 0) {
        x = i * 16;
        setWidth(x);
        setHeight(y);
    } else {
        y = i * 9;
        setHeight(y);
        setWidth(x);
        console.log("y" + y);
    }
    var dTop = (height - y) / 2;
    var dLeft = (width - x) / 2;

    content.style.marginTop = dTop + "px";
    content.style.marginLeft = dLeft + "px";

})

function setHeight(h) {
    var content = document.getElementById("content-div");
    content.style.height = h + "px";
}

function setWidth(w) {
    var content = document.getElementById("content-div");
    content.style.width = w + "px";
}

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
    codepad.style.display = "flex";

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
        alert("Du musst erst den Code richtig eingeben bevor du Durch die Tür gehen darfst!!!");
    }
}