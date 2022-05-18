img="";
objects = [];
status1 = "";

function preload(){
    img = loadImage("dog_cat.jpg"); 
}

function setup(){
    canvas = createCanvas(640 , 420);
    canvas.center();
    objectDetected = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Objects Detecting";
}

function modelLoaded(){
    console.log("model loaded!");
    status1 = true;
    objectDetected.detect(img , gotResults);
}

function gotResults(error , result){
    if (error){
        console.log(error);
    }
    else{
        console.log(result);
        objects = result;
    }
}

function draw(){
    image(img , 0 , 0 , 640 , 420);

    if(status1 != "") {
        for (i = 0; i < objects.length; i++) { 
            document.getElementById("status").innerHTML = "Status : Object Detected";
            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height); 
        }

    }

}

