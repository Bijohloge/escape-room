document.addEventListener('DOMContentLoaded', function() {

    var item = window.localStorage.getItem("seconds");
    if (item === null) { document.getElementById("zeit").innerHTML = "00:00"; } else {
        var seconds = 3600 - Number(item);
        var time = (Math.floor(seconds / 60)).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }) +
            ":" +
            ((seconds % 60)).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
        document.getElementById("zeit").innerHTML = time;

    }
});