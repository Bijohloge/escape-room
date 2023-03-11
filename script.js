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

setInterval(tick, 1000);

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

function closeOverlay() {
    var overlay = document.getElementById("overlay");
    var la = document.getElementById("learningapps");
    var codepad = document.getElementById("code-pad");

    if (document.contains(codepad)) {
        codepad.style.display = "none";
    }

    overlay.style.display = "none";
    la.style.display = "none";
}

function tick() {
    var item = window.localStorage.getItem('seconds');
    if (item === null) {
        console.log("is null")
        window.localStorage.setItem('seconds', '3550');
        displayTimer(3600);
    } else {
        item = Number(item);
        item--;
        window.localStorage.setItem('seconds', item);
        displayTimer(item);
    }
}

function displayTimer(seconds) {
    var time = Math.floor(seconds / 60) + ":" + ((seconds % 60)).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
    var element = document.getElementById('timer');
    element.innerHTML = time;
}