lipsX= 0; 
lipsY=0;

function preload() {
    lips = loadImage('https://i.postimg.cc/Z5YN28hw/5b135831a2c9179fd8d44131a4dd7e28.png')
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO)
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is Initialized');
}
function draw() {
    image(video, 0, 0, 300, 300);
    image(lips, lipsX, lipsY, 50,30);
}
function take_snapshot(){
    save('myFilterImage.png')
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        lipsX = results[0].pose.nose.x - 17;
        lipsY = results[0].pose.nose.y + 13;
        console.log("lips x =" + lipsX);
        console.log("lips y =" + lipsY);
    }
}