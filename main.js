status = ""

function preload(){
    video = createVideo("video.mp4")
}

function setup(){
    canvas = createCanvas(480,350)
    canvas.position(450,180);
    video.hide();
}

function start(){
objectdetector = ml5.objectDetector("cocossd",modalloaded)
document.getElementById("status").innerHTML = "Detecting objects";
}


function draw(){
    image(video,0,0,450,180);
}


function modalloaded(){
    console.log("modal has been loaded");
    status = true;
video.loop();
video.speed(1);
video.volume(0);
}