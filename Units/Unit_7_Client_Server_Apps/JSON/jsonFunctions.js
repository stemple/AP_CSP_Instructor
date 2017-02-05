function loadMovieJSON() {
    var data_file = "https://www.ncdc.noaa.gov/cag/time-series/global/globe/land_ocean/ytd/12/1880-2016.json";
    var http_request = new XMLHttpRequest();
    try {
        // Opera 8.0+, Firefox, Chrome, Safari
        http_request = new XMLHttpRequest();
    }
    catch (e) {
        // IE only...
        try {
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e) {
            // Something went wrong
            alert("Your browser broke!");
            return false;
        }
    }

    http_request.onreadystatechange = function () {
        if (http_request.readyState == 4) {
            var result = http_request.responseText;
            document.getElementById("demo").innerHTML = result;
            console.log(http_request.result);
        }
    }
    http_request.open("GET", data_file, true);
    http_request.send();
}

