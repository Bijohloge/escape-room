setInterval(tick, 1000);

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
    var childs = document.querySelectorAll('.overlay-child');

    for (let i = 0; i < childs.length; i++) {
        childs[i].style.display = "none";
    }
    overlay.style.display = "none";
}

function tick() {
    var item = window.localStorage.getItem('seconds');
    if (item === null) {
        console.log("is null")
        window.localStorage.setItem('seconds', '3600');
        displayTimer(3600);
    } else {
        item = Number(item);
        if (item > 0) {
            item--;
        }
        window.localStorage.setItem('seconds', item);
        displayTimer(item);
    }
}

function displayTimer(seconds) {
    var time = (Math.floor(seconds / 60)).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }) +
        ":" +
        ((seconds % 60)).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
    var element = document.getElementById('timer');
    element.innerHTML = time;
}