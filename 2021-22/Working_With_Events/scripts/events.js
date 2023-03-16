let btn = document.getElementById('colorBtn');

let ColorChangerApp = {
    
    bgChange: function () {
        let blue = Math.floor(Math.random()*255);
        let green = Math.floor(Math.random()*255);
        let red = Math.floor(Math.random()*255);
        let rndCol = 'rgb(' + red + ',' + green + ',' + blue + ')';
        document.body.style.backgroundColor = rndCol;
    },

}

// Register the element as an event listener and assign handler
btn.onclick = ColorChangerApp.bgChange;