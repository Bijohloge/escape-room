let start = 0;
let rotation = 0;
let automatCounter = 0;
let automatCounter2 = 0;

function spinWheel(elapsed) {


    var glücksrad = document.getElementById('animation-glücksrad');
    if (!document.contains(glücksrad)) return;


    rotation += 140 * elapsed;
    if (rotation > 360) {
        var x = rotation - 360;
        rotation = x;
    }
    glücksrad.style.transform = "rotate(" + Math.round(rotation) + "deg)";


}

requestAnimationFrame(animate);

function spinAutomat() {
    var automat = document.getElementById('symbole-img');
    if (!document.contains(automat)) return;

    if (automatCounter > 20) {
        automatCounter = 0;
        automatCounter2 += 1;
        if (automatCounter2 > 10) {
            automatCounter2 = 1;
        }
        automat.src = "images/symbole/Symbole " + automatCounter2 + ".svg";
    } else {
        automatCounter += 1;
    }
}

function animate(time) {
    const elapsed = (time - start) / 1000;
    var item = localStorage.getItem("Power");
    if (item === null) {

    } else {
        spinWheel(elapsed);
        spinAutomat(elapsed);
    }

    start = time;
    requestAnimationFrame(animate);
}

function animateDoor() {

}