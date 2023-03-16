function getStorage() {
    var output = window.localStorage.getItem("blah");
    elem = document.getElementById("output");
    elem.textContent = output;
}