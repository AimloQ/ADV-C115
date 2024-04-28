//Variables\\
nose_x=0;
nose_y=0;


//Functions\\
function preload()
{
clown_nose=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}


function setup()
{
    canvas=createCanvas(300,300);
    canvas.center()
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    console.log("PoseNet On");
}


function modelLoaded()
{
console.log("PoseNet Intialized");
console.log(clown_nose);
console.log("Clown Nose Filter Loaded");
}


function gotPoses(results)
{
    if (results.length>0)
    {
        console.log(results);
        nose_x=results[0].pose.nose.x-15;
        nose_y=results[0].pose.nose.y-15;
    }
}


function draw()
{
    image(video,0,0,300,300);
    image(clown_nose,nose_x,nose_y,30,30);
}


function take_snapshot()
{
    save('WriteYourImageNameHere.png')
}