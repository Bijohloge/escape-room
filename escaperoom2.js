var sicherungen = [false, false, false, false, false, false, false, false];

function openKasten() {
    var kasten = document.getElementById("Sicherungskasten");
    var overlay = document.getElementById("overlay");
    overlay.style.display = "block";
    kasten.style.display = "block";
}

function sicherungsSchalter(id) {

    var schalter = document.getElementById(id);
    var num = Number(id) - 1;
    sicherungen[num] = !sicherungen[num];
    console.log(sicherungen);
    var img;
    if (sicherungen[num]) {
        img = "images/Sicherung An.svg";
    } else {
        img = "images/Sicherung Aus.svg";
    }
    schalter.firstElementChild.src = img;

}

function showTresor() {
    var kasten = document.getElementById("tresor-div");
    var overlay = document.getElementById("overlay");
    overlay.style.display = "block";
    kasten.style.display = "flex";
}

function onPlate() {
    alert("Test");
}