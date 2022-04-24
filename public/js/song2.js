var audio1s = new Audio("src/Song2/Meet Me At Our Spot 1s.mp3");
var audio2s = new Audio("src/Song2/Meet Me At Our Spot 2s.mp3");
var audio3s = new Audio("src/Song2/Meet Me At Our Spot 4s.mp3");
var audio4s = new Audio("src/Song2/Meet Me At Our Spot 7s.mp3");
var audio5s = new Audio("src/Song2/Meet Me At Our Spot 11s.mp3");
var audio6s = new Audio("src/Song2/Meet Me At Our Spot 16s.mp3");

var audios = [audio1s, audio2s, audio3s, audio4s, audio5s, audio6s];

function playAudioSongTwo(counter){
    audios[counter].play();
}

function resetAudioSongTwo(){
    for(var i=0; i<audios.length; i++){
        audios[i].pause();
    }
}
