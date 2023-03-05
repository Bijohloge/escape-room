var wheel = setInterval(spinWheel, 10);
var rotation = 0;


function spinWheel() {
    var glücksrad = document.getElementById('glücksrad');
    glücksrad.style.transform = "rotate(" + rotation + "deg)",
        rotation += 1.5;
}