let name = "name"; 

function setNames() {
    this.name = document.getElementById('name-input').value;
    document.getElementById("test").innerHTML = this.name;
}

function showLearningApp() {
    var element = document.getElementById("learningapps");
    element.style.display = "block";
}

function closeLearningApp() {
    var element = document.getElementById("learningapps");
    element.style.display = "none";
}