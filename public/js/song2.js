const audios2 = [audio1s, audio2s, audio3s, audio4s, audio5s, audio6s];

function playAudioSongTwo(counter){
    audios2[counter].play();
}

function resetAudioSongTwo(){
    for(var i=0; i<audios2.length; i++){
        audios2[i].pause();
    }
}

function addSoundTwo(counter){
    var audioAdding;
    switch(counter){
        case 0:
            audioAdding = new Audio("src/Song2/Meet Me At Our Spot 1s.mp3");
            break;
        case 1:
            audioAdding = new Audio("src/Song2/Meet Me At Our Spot 2s.mp3");
            break;
        case 2: 
            audioAdding = new Audio("src/Song2/Meet Me At Our Spot 4s.mp3");
            break;
        case 3:
            audioAdding = new Audio("src/Song2/Meet Me At Our Spot 7s.mp3");
            break;
        case 4:
            audioAdding = new Audio("src/Song2/Meet Me At Our Spot 11s.mp3");
            break;
        case 5:
            audioAdding = new Audio("src/Song2/Meet Me At Our Spot 16s.mp3");
            break;
        default:

    }
    audios2.push(audioAdding)
}
