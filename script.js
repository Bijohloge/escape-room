setInterval(tick, 1000);

let music;

document.addEventListener('DOMContentLoaded', function() {

});

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
    console.log("Test");
    music = new Audio(musicString);
    music.loop = true;
    music.volume = 0.05;
    music.play();
}
//♫🔊