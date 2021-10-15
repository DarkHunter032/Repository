
let video = document.getElementById("vid");
let playIMG = document.getElementsByClassName("cbtn")[4];
let isPlay = false;
let progBar;
let downBar = document.getElementById("bar");
let totalTime;
let updade;

function barC(){
    progBar = document.getElementById("progBar");
    totalTime = video.duration;
    
}

downBar.addEventListener("click", (e)=>{
    let progressTime = (e.offsetX/downBar.offsetWidth) * video.duration;
    video.currentTime = progressTime;
})

function updateBar(){
    if(video.pause){
        //607 largura
        let result = (607*video.currentTime)/totalTime;
        progBar.style.width = parseInt(result)+"px";
    }
}

function backSeg(){
    video.currentTime -= 10;
}

function nextSeg(){
    video.currentTime += 10;
}

function backVel(){
    video.playbackRate -= 0.5;
}

function nextVel(){
    video.playbackRate += 0.5;
}

function playVid(){
    if(isPlay == false){
        video.play()
        playIMG.src = "./assets/buttons/pause.png"
        isPlay = true;
        updade = setInterval(updateBar, 500);
    }else{
        video.pause()
        clearInterval(updateBar);
        playIMG.src = "./assets/buttons/play.png"
        isPlay = false;
    }
}

function stopVid(){
    video.pause();
    clearInterval(updateBar);
    playIMG.src = "./assets/buttons/play.png"
    isPlay = false;
    video.currentTime = 0;
}

function endVid(){
    playIMG.src = "./assets/buttons/play.png"
    isPlay = false;
}
