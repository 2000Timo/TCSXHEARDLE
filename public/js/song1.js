var audio1s = new Audio("src/Song1/I Can't Make You Love Me 1s.mp3");
var audio2s = new Audio("src/Song1/I Can't Make You Love Me 2s.mp3");
var audio3s = new Audio("src/Song1/I Can't Make You Love Me 4s.mp3");
var audio4s = new Audio("src/Song1/I Can't Make You Love Me 7s.mp3");
var audio5s = new Audio("src/Song1/I Can't Make You Love Me 11s.mp3");
var audio6s = new Audio("src/Song1/I Can't Make You Love Me 16s.mp3");

var audios = [audio1s, audio2s, audio3s, audio4s, audio5s, audio6s];

function playAudioSongOne(counter){
    audios[counter].play();
}
