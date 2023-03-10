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

});

function setHeight(h) {
    var content = document.getElementById("content-div");
    content.style.height = h + "px";
}

function setWidth(w) {
    var content = document.getElementById("content-div");
    content.style.width = w + "px";
}