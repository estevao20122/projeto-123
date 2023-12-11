noseX=0;
noseY=0;

function preload(){
bigode = loadImage('https://i.postimg.cc/T133w9ZD/46cc6a7c8417c80194b920b7fcf21f31-o-icone-de-bigode-hungaro-desenhado-a-mao.png')
}

function setup() {
    
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded); 
    poseNet.on('pose', gotPoses);
  }
  

  function modelLoaded() {
    console.log('PoseNet foi inicializado');

  }

  function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-14;
    noseY = results[0].pose.nose.y;
  }
} 

  function draw(){
    image(video, 0, 0, 300, 300);
    image(bigode, noseX, noseY, 30, 30);
  }

  function takeSnapshot(){    
    save('myFilterImage.png');
  }