let name = "name"; 

function setNames() {
    this.name = document.getElementById('name-input').value;
    document.getElementById("test").innerHTML = this.name;
}