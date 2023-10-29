var base;
var playPause=0;
function playFunc(){
    playPause=playPause+1;

    if(playPause===1){
        play();
        document.getElementById("play").classList.add("pause");
        $("#animateCircle").addClass("addAnimation");
        $("#animateCircle.addAnimation").css("animation-play-state","running");
    } else if(playPause===2){
        document.getElementById("play").classList.remove("pause");
        $("#animateCircle").css("animation-play-state","paused");
        playPause=0;
        stop();
    }
}

function play(){
     base= setInterval(timer, 10);
}

function stop(){
     clearInterval(base);
}
//Default Values
var milisecond=0;
var second=0;
var minute=0;
var hour=0;

// Return Values

var milisecondVal=0;
var secondVal=0;
var minuteVal=0;
var hourVal=0;

function timer(){
    milisecondVal = updateTime(milisecond);
    secondVal=updateTime(second);
    minuteVal=updateTime(minute);
    hourVal=updateTime(hour);

    milisecond = ++milisecond;

    if(milisecond===100){
        milisecond=0;
        second= ++second;
    }

    if(second==60){
        minute= ++minute;
        second=0;
    }

    if(minute==60){
        minute= 0;
        hour= ++hour;
    }

    $("#milisecond").text(milisecondVal);
    $("#second").text(secondVal);
    $("#minute").text(minuteVal);
    $("#hour").text(hourVal);


}


function updateTime(i){
    if(i<10){
        i="0"+i;
    }
    return i;
}

function resetFunc(){

    milisecond=0;
    second=0;
    minute=0;
    hour=0;

    $("#milisecond").text("00");
    $("#second").text("00");
    $("#minute").text("00");
    $("#hour").text("00");

    if(!$("play").hasClass("pause")){
        $("#animateCircle").removeClass("addAnimation");
    } else{
        $("#animateCircle").removeClass("addAnimation");
        setTimeout(function(){
             $("#animateCircle").addClass("addAnimation");
        }, 10);
    }
}

function stopFunc(){
    clearInterval(base);
    resetFunc();

    if(!$("play").hasClass("pause")){
        $("#animateCircle").removeClass("addAnimation");
    } 
}
