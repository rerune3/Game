//TODO: create an actual background image for the game.
// Also, in line 40, that image might not upload...so pick your own image
// for testing if nothing shows up on the browser
window.addEventListener("load", // listens for when the page has loaded
        function() {
            startWorking(); // starts the background implementation
        }
);
function startWorking() {
    canvas = defineCanvas();  // defines a canvas. RE-USE this canvas
    img1X = 0;  // starting position for first image
    img2X = canvas.width;  // starting position for second image
    canvasCtx = canvas.getContext("2d");  // the 2d context object for canvas
    backgroundArray = defineImages(); // an array that holds both images
    waitForImagesToLoad();  // waits for the images to finish loading
}
function animateBackground() {
    if (img1X + canvas.width <= 0)  // if the entire image is off the canvas
        img1X = canvas.width;  // set its position to the end of the canvas
    if (img2X + canvas.width <= 0)  // same condition for the second image
        img2X = canvas.width;  // same thing happens
    // decrement the x positions of each image
    img1X--;
    img2X--;
    // clears the entire canvas
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
    // draws the images with the size of the canvas
    canvasCtx.drawImage(backgroundArray[0], img1X, 0, 500, 300);
    canvasCtx.drawImage(backgroundArray[1], img2X, 0, 500, 300);
    // re-calls this function every 5 milliseconds
    setTimeout("animateBackground()", 5);
}
function waitForImagesToLoad() {
    backgroundArray[0].onload = function() { // waits for the 1st image to load
        animateBackground(); // calls for the animations to start
    };
}
function defineImages() {
    var image = new Image(); // create an instance of an image object
    image.id = "background"; // an id if it NEEDS to be referred to later
    image.src = "sharknado.png"; // an image in the same folder as the js file
    return [image, image]; // returns an array of the image and a copy of it
}
function defineCanvas() {
    // returns the <canvas> tag as an object
    return document.getElementById("canvas");
}