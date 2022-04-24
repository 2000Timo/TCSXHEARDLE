let songCounter = 0;
let counter = 0;

function nextSnippet(){
    resetAudio();
    counter++;
    switch(counter){
        case 1:
            document.getElementById('skipButton').innerHTML = "Skip +2s";
            break;
        case 2:
            document.getElementById('skipButton').innerHTML = "Skip +3s";
            break;
        case 3:
            document.getElementById('skipButton').innerHTML = "Skip +4s";
            break;
        case 4:
            document.getElementById('skipButton').innerHTML = "Skip +5s";
            break;
        case 5:
            document.getElementById('skipButton').innerHTML = "Skip Song";
            break;
        case 6:
            document.getElementById('skipButton').innerHTML = "Skip +1s";
            counter = 0;
            songCounter = 1;
            break;
        default:
    }
}

function playAudio(){
    resetAudio();
    switch(songCounter){
        case 0:
            playAudioSongOne(counter);
            break;
        case 1:
            playAudioSongTwo(counter);
            break;
        default:
    }
}

function resetAudio(){
    switch(songCounter){
        case 0:
            resetAudioSongOne();
            break;
        case 1:
            resetAudioSongTwo();
            break;
        default:
    }
}