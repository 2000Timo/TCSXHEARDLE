var audios1 = [];

function playAudioSongOne(counter){
    audios1[counter].play();
}

function resetAudioSongOne(){
    for(var i=0; i<audios1.length; i++){
        audios1[i].pause();
    }
}
function addSoundOne(counter){
    var audioAdding;
    switch(counter){
        case 0:
            audioAdding = new Audio("src/Song1/I Can't Make You Love Me 1s.mp3");
            break;
        case 1:
            audioAdding = new Audio("src/Song1/I Can't Make You Love Me 2s.mp3");
            break;
        case 2: 
            audioAdding = new Audio("src/Song1/I Can't Make You Love Me 4s.mp3");
            break;
        case 3:
            audioAdding = new Audio("src/Song1/I Can't Make You Love Me 7s.mp3");
            break;
        case 4:
            audioAdding = new Audio("src/Song1/I Can't Make You Love Me 11s.mp3");
            break;
        case 5:
            audioAdding = new Audio("src/Song1/I Can't Make You Love Me 16s.mp3");
            break;
        default:

    }
    audios1.push(audioAdding)
}