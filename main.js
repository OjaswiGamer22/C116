var nose_x=0;
var nose_y=0;
var left_eye_x=0;
var left_eye_y=0;
var right_eye_x=0;
var right_eye_y=0;
var mid_point_x=0;
var mid_point_y=0;

function preload(){
clown_nose=loadImage("https://i.postimg.cc/JzZ08T8g/clown-removebg-preview.png");
devil=loadImage("https://i.postimg.cc/WpxJPqrd/devil-removebg-preview.png");
left_wing=loadImage("https://i.postimg.cc/L5kS7WLB/lefft-removebg-preview.png");
right_wing=loadImage("https://i.postimg.cc/d0ZzpXKk/rright-removebg-preview.png");
sunglasses=loadImage("https://i.postimg.cc/MTdbD6ry/sunglasses-removebg-preview.png");
moustache=loadImage("https://i.postimg.cc/qR5QrBXp/moustache-removebg-preview.png");
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
posenet=ml5.poseNet(video,ModelLoaded);
posenet.on("pose",gotResults);
}




function ModelLoaded(){
   console.log("PoseNet is initialized");
}

function gotResults(results){
if(results.length > 0){
   console.log(results);
   console.log("Nose x is ="+results[0].pose.nose.x);
   console.log("Nose y is ="+results[0].pose.nose.y);
nose_x=results[0].pose.nose.x;
nose_y=results[0].pose.nose.y;
left_eye_x=results[0].pose.leftEye.x;
left_eye_y=results[0].pose.leftEye.y;
right_eye_x=results[0].pose.rightEye.x;
right_eye_y=results[0].pose.rightEye.y;
mid_point_x=(left_eye_x+right_eye_x)/2;
mid_point_y=(left_eye_y+right_eye_y)/2;

}
}

function draw(){
   image(video,0,0,300,300);
   image(clown_nose,nose_x-30,nose_y-20,70,50);
   image(moustache,nose_x-30,nose_y+10,70,50);
   image(sunglasses,mid_point_x-100,mid_point_y-120,200,250);
   }
 
   function snap(){
      save("filter_image.png");
   }