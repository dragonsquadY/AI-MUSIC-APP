song = "";
song = "";

function preload()
{
    song = loadSound("SIM-The-Rumbling-(HipHopKit.com).mp3");
    song = loadSound("anime-paradise_onepunch-man-opening.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play()
{
    song.play();
}