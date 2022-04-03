nosey=0;
nosex=0;

function preload(){
nose=loadImage("https://i.postimg.cc/cHQFwrQs/cnose-removebg-preview.png")
}

function setup(){
   canvas = createCanvas(400, 400);
   canvas.center();
   video= createCapture(VIDEO);
   video.size(400, 400);
   video.hide();
   poseNet=ml5.poseNet(video, modelLoaded)
   poseNet.on('pose', gotPoses)
}

function draw(){
    image(video, 0, 0, 400, 400);
    image(nose, nosex, nosey, 40, 40)
}

function snap(){
    save("myfilteredimg.png")
}

function modelLoaded(){
    console.log("The model has been loaded")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        console.log("The nose x value = "+results[0].pose.nose.x+" the nose y value = " + results[0].pose.nose.y);
        nosex=results[0].pose.nose.x-20;
        nosey=results[0].pose.nose.y-13;
    }

}

