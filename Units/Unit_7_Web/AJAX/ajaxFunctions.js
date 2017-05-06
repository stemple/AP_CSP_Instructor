function loadTextDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("output1").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
}

function getJSONData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("output2").innerHTML = this.responseText;
        }
    };
    // This get JSON data from a online database of movies!
    xhttp.open("GET", "http://www.omdbapi.com/?t=star+wars", true);
    xhttp.send();
}
