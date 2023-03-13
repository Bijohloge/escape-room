setInterval(tick, 1000);

let music;

const links = new Map([
    ["zettel", "https://learningapps.org/watch?v=pqrhjpv3t23"],
    ["tisch", "https://learningapps.org/watch?v=pabq9i6t523"],
    ["regal", "https://learningapps.org/watch?v=pv9zc900t23"],
    ["spielautomat", "https://learningapps.org/watch?v=pujvpzfca23"],
    ["glücksrad", "https://learningapps.org/watch?v=pf8n7hqy523"],
    ["würfel", "https://learningapps.org/watch?v=pdn4w36x323"],
    ["beutel", "https://learningapps.org/watch?v=pojb8bajc23"]
]);

document.addEventListener('DOMContentLoaded', function() {

});

function showLearningApp(url) {
    closeOverlay();
    if (url == "spielautomat" || url == "glücksrad") {
        var item = window.localStorage.getItem("Power");
        if (item === null) {
            return;

        } else {
            if (url == "glücksrad") { playSound('sound/wheel_fortune_1.mp3') } else { playSound('sound/mixkit-slot-machine-random-wheel-1930.wav') }
        }
    }

    var string = links.get(url);
    var overlay = document.getElementById("overlay");
    var la = document.getElementById("la-" + url);
    if (la.getAttribute("src") === null) {
        la.setAttribute("src", string);
    }

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

function playSound(string) {
    var item = window.localStorage.getItem('Sound');
    if (item === null) {
        let sound = new Audio(string);
        sound.play();
    } else {
        if (item == "True") {
            let sound = new Audio(string);
            sound.play();
        }
    }

}

function toggleMusic() {
    var item = window.localStorage.getItem("Music");
    var button = document.getElementById("music");
    if (item === null) {
        localStorage.setItem("Music", "False");
        music.pause();
        button.style.textDecoration = "line-through";
    } else {
        if (item == "True") {
            localStorage.setItem("Music", "False");
            button.style.textDecoration = "line-through";
            music.pause();
        } else {
            localStorage.setItem("Music", "True");
            button.style.textDecoration = "none";
            music.play();
        }
    }
}

function toggleSound() {
    var item = window.localStorage.getItem("Sound");
    var button = document.getElementById("sound");
    if (item === null) {
        localStorage.setItem("Sound", "False");
        button.style.textDecoration = "line-through";
    } else {
        if (item == "True") {
            localStorage.setItem("Sound", "False");
            button.style.textDecoration = "line-through";
        } else {
            localStorage.setItem("Sound", "True");
            button.style.textDecoration = "none";
        }
    }
}

function playBackgroundMusic(musicString) {
    music = new Audio(musicString);
    music.loop = true;
    music.volume = 0.05;
    music.play();
}