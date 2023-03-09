let start = 0;
let rotation = 0;

function spinWheel(time) {
    const elapsed = (time - start) / 1000;

    var glücksrad = document.getElementById('animation-glücksrad');
    if (!document.contains(glücksrad)) return;


    rotation += 140 * elapsed;
    if (rotation > 360) {
        var x = rotation - 360;
        rotation = x;
    }
    glücksrad.style.transform = "rotate(" + Math.round(rotation) + "deg)";
    start = time;
    requestAnimationFrame(spinWheel);
}

requestAnimationFrame(spinWheel);

function animate() {

}

function animateDoor() {

}