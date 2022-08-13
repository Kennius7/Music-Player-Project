const audio = document.getElementById("audio");
const songTitle = document.getElementById("songTitle");
const songArtist = document.getElementById("songArtist");
const coverArt = document.getElementById("albumArt");
const playImg = document.getElementById("play-icon");
const border = document.getElementById("border");
const play = document.getElementById("play");
const recentVolume = document.querySelector("#volume");
const slider = document.querySelector("#songProgress");




const songs = [
    {
     songName: "Vibekiller",
     songArtist: "Naija Artist1",
     coverArt: "img/Vibekiller.jpg",
     audioFile: "mp3/Vibekiller.mp3"
    },
    {
    songName: "All_Eyes",
    songArtist: "Naija Artist2",
    coverArt: "img/All_Eyes.jpg",
    audioFile: "mp3/All_Eyes.mp3"
    },
    {
    songName: "Zambololo",
    songArtist: "Naija Artist3",
    coverArt: "img/Zambololo.jpg",
    audioFile: "mp3/Zambololo.mp3"
    }
];

let songIndex = 0;
let playCounter = 0;





function loadSong () {
    songTitle.innerHTML = `Song title: ${songs[songIndex].songName}`;
    songArtist.innerHTML = `Song Artist: ${songs[songIndex].songArtist}`;
    audio.src = songs[songIndex].audioFile;
    coverArt.src = songs[songIndex].coverArt;

    timer = setInterval(function rangeSlider () {
        let position = 0;

        if (!isNaN(audio.duration)) {
            position = audio.currentTime * (100 / audio.duration);
            slider.value = position;
        }
        }, 1000);
}
loadSong();


function volumeChange () {
    audio.volume = recentVolume.value / 100;
}

function songSlider () {
    sliderPosition = audio.duration * (slider.value / 100);
    audio.currentTime = sliderPosition;
}









playSong = () => {
    border.style.animationDuration = ".5s";
    playImg.src = "icons/pause.png";
    audio.play();
    playCounter = 1;
}

pauseSong = () => {
    border.style.animationDuration = "0s";
    playImg.src = "icons/play.png";
    audio.pause();
    playCounter = 0;
}

function player () {
    if (playCounter == 1) {
        pauseSong();
    }
    else {
        playSong();
    }
}

function prevSong () {
    if (songIndex >= 0) {
    songIndex -= 1;
    loadSong();
    playSong();
    }

    if (songIndex < 0) {
        songIndex = songs.length - 1;
        loadSong();
        playSong();
    }
}

function nextSong () {
    if (songIndex <= songs.length - 1) {
    songIndex += 1;
    loadSong();
    playSong();
    }

    if (songIndex > songs.length - 1) {
        songIndex = 0;
        loadSong();
        playSong();
    }
}












