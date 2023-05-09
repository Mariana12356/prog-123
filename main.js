function setup(){
    canvas = createCanvas(500, 500)
    canvas.position(540, 100)
    video = createCapture(VIDEO) 
    video.size(500, 500)
    posenet = ml5.poseNet(video, modelLoaded)
    posenet.on("pose", gotPoses)
}

function preload(){

}

function draw(){
    background("#ffa9b8")
}

function modelLoaded(){
    console.log("modelo carregado")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results)
    }
}