let songCounter = 0;
let counter = 0;

addSoundOne(counter);

function nextSnippet(){
    resetAudio();
    counter++;
    console.log(counter);
    switch(counter){
        case 1:
            document.getElementById('skipButton').innerHTML = "Skip +2s";
            newSnippetAudio();
            break;
        case 2:
            document.getElementById('skipButton').innerHTML = "Skip +3s";
            newSnippetAudio();
            break;
        case 3:
            document.getElementById('skipButton').innerHTML = "Skip +4s";
            newSnippetAudio();
            break;
        case 4:
            document.getElementById('skipButton').innerHTML = "Skip +5s";
            newSnippetAudio();
            break;
        case 5:
            document.getElementById('skipButton').innerHTML = "Skip Song";
            newSnippetAudio();
            break;
        case 6:
            document.getElementById('skipButton').innerHTML = "Skip +1s";
            counter = 0;
            songCounter++;
            newSnippetAudio();
            break;
        default:
    }
}

function playAudio(){
    console.log(songCounter);
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
            if(counter == 0){
                resetAudioSongOne();
            }
            resetAudioSongTwo();
            break;
        default:
    }
}

function newSnippetAudio(){
    switch(songCounter){
        case 0:
            addSoundOne(counter);
            break;
        case 1:
            addSoundTwo(counter);
            break;
        default:
    }
}
