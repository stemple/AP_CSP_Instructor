/**
 * Uses AJAX to query an internet data source
 */
function sendRequest() {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (this.readyState === 4) {
            // We got a response from the server!
            if(this.status === 200) {
                // The request was successful!
                displayResponseData(this.responseText);
            } else {
                // There was a problem with the request.
                // For example, the response may have a 404 (Not Found)
                // or 500 (Internal Server Error) response code.
            }
        } else {
            // Waiting for a response...
        }
    };
    httpRequest.open("GET", "http://www.omdbapi.com/?t=star+wars", true);
    httpRequest.send();
}


/**
 * Displays data on the page
 * @param {string} data The data to be displayed
 */
function displayResponseData(data) {
    document.getElementById("output1").innerHTML = data;
}
