const audio = document.getElementById("audio");
const songTitle = document.getElementById("songTitle");
const songArtist = document.getElementById("songArtist");
const trackIndex = document.getElementById("trackIndex");
const trackDuration = document.getElementById("trackDuration");
const coverArt = document.getElementById("albumArt");
const playImg = document.getElementById("play-icon");
const border = document.getElementById("border");
const play = document.getElementById("play");
const recentVolume = document.querySelector("#volume");
const slider = document.querySelector("#songProgress");
const loopButtonText = document.getElementById("loopControls");




const songs = [
    {
    songName: "Adiemus",
    songArtist: "Enya",
    coverArt: "img/adiemus.jpg",
    audioFile: "mp3/Adiemus.mp3"
    },
    {
    songName: "Adonai",
    songArtist: "Nathaniel Bassey",
    coverArt: "img/Vibekiller.jpg",
    audioFile: "mp3/Adonai.mp3"
    },
    {
    songName: "Another Day In Paradise",
    songArtist: "Phil Collins",
    coverArt: "img/phil collins.jpg",
    audioFile: "mp3/Another_Day_In_Paradise.mp3"
    },
    {
    songName: "Cinematic Trailer",
    songArtist: "Unknown",
    coverArt: "img/album_art1.jpg",
    audioFile: "mp3/Cinematic Trailer.mp3"
    },
    {
    songName: "Climb Together",
    songArtist: "Audiomachine",
    coverArt: "img/album_art2.jpg",
    audioFile: "mp3/Climb Together_Audiomachine.mp3"
    },
    {
    songName: "Clocks",
    songArtist: "Coldplay",
    coverArt: "img/clock.jpg",
    audioFile: "mp3/Clocks.mp3"
    },
    {
    songName: "Motion Array Soundtrack",
    songArtist: "Renderforest",
    coverArt: "img/album_art3.jpeg",
    audioFile: "mp3/Motion_Array_Soundtrack.mp3"
    },
    {
    songName: "Optical Flare Soundtrack",
    songArtist: "Renderforest",
    coverArt: "img/album_art4.jpg",
    audioFile: "mp3/Optical_Flare_Soundtrack.mp3"
    },
    {
    songName: "Safe",
    songArtist: "M.I. Abaga",
    coverArt: "img/safe.jpg",
    audioFile: "mp3/Safe.mp3"
    },
    {
    songName: "The Good In Me",
    songArtist: "Jon Bellion",
    coverArt: "img/jon_bellion.jpg",
    audioFile: "mp3/The_Good_In_Me.mp3"
    }
];

let songIndex = 0;
let playCounter = 0;
let loopCounter = 0;
let sec = 0;
let mins = 0;
let hrs = 0;
let sec1 = 0;
let mins1 = 0;
let hrs1 = 0;
let setInt;


songTimer = () => {
       setInt = setInterval(() => {
        sec = Math.floor(audio.currentTime % 3600 % 60 );
        mins = Math.floor(audio.currentTime % 3600 / 60);
        hrs = Math.floor(audio.currentTime / 3600);

        sec1 = Math.floor(audio.duration % 3600 % 60 );
        mins1 = Math.floor(audio.duration % 3600 / 60);
        hrs1 = Math.floor(audio.duration / 3600);
    
        let displayTimer1 = `0${hrs} : 0${mins} : 0${sec} /<span style="color: white">0${hrs1} : 0${mins1} : 0${sec1}</span>`
        let displayTimer2 = `0${hrs} : ${mins} : 0${sec} /<span style="color: white">0${hrs1} : 0${mins1} : 0${sec1}</span>`
        let displayTimer3 = `0${hrs} : ${mins} : ${sec} /<span style="color: white">0${hrs1} : 0${mins1} : 0${sec1}</span>`
        let displayTimer4 = `0${hrs} : 0${mins} : ${sec} /<span style="color: white">0${hrs1} : 0${mins1} : 0${sec1}</span>`

        let displayTimer5 = `0${hrs} : 0${mins} : 0${sec} /<span style="color: white">0${hrs1} : ${mins1} : 0${sec1}</span>`
        let displayTimer6 = `0${hrs} : ${mins} : 0${sec} /<span style="color: white">0${hrs1} : ${mins1} : 0${sec1}</span>`
        let displayTimer7 = `0${hrs} : ${mins} : ${sec} /<span style="color: white">0${hrs1} : ${mins1} : 0${sec1}</span>`
        let displayTimer8 = `0${hrs} : 0${mins} : ${sec} /<span style="color: white">0${hrs1} : ${mins1} : 0${sec1}</span>`
        
        let displayTimer9 = `0${hrs} : 0${mins} : 0${sec} /<span style="color: white">0${hrs1} : 0${mins1} : ${sec1}</span>`
        let displayTimer10 = `0${hrs} : ${mins} : 0${sec} /<span style="color: white">0${hrs1} : 0${mins1} : ${sec1}</span>`
        let displayTimer11 = `0${hrs} : ${mins} : ${sec} /<span style="color: white">0${hrs1} : 0${mins1} : ${sec1}</span>`
        let displayTimer12 = `0${hrs} : 0${mins} : ${sec} /<span style="color: white">0${hrs1} : 0${mins1} : ${sec1}</span>`

        let displayTimer13 = `0${hrs} : 0${mins} : 0${sec} /<span style="color: white">0${hrs1} : ${mins1} : ${sec1}</span>`
        let displayTimer14 = `0${hrs} : ${mins} : 0${sec} /<span style="color: white">0${hrs1} : ${mins1} : ${sec1}</span>`
        let displayTimer15 = `0${hrs} : ${mins} : ${sec} /<span style="color: white">0${hrs1} : ${mins1} : ${sec1}</span>`
        let displayTimer16 = `0${hrs} : 0${mins} : ${sec} /<span style="color: white">0${hrs1} : ${mins1} : ${sec1}</span>`
       
    
        if (mins < 10 && sec < 10 && mins1 < 10 && sec1 < 10) {
            trackDuration.innerHTML = displayTimer1;    
        }
        else if (mins > 9 && sec < 10 && mins1 < 10 && sec1 < 10) {
            trackDuration.innerHTML = displayTimer2;
        }
        else if (mins > 9 && sec > 9 && mins1 < 10 && sec1 < 10) {
            trackDuration.innerHTML = displayTimer3;
        }
        else if (mins < 10 && sec > 9 && mins1 < 10 && sec1 < 10) {
            trackDuration.innerHTML = displayTimer4;
        }
        else if (mins < 10 && sec < 10 && mins1 > 9 && sec1 < 10) {
            trackDuration.innerHTML = displayTimer5;    
        }
        else if (mins > 9 && sec < 10 && mins1 > 9 && sec1 < 10) {
            trackDuration.innerHTML = displayTimer6;
        }
        else if (mins > 9 && sec > 9 && mins1 > 9 && sec1 < 10) {
            trackDuration.innerHTML = displayTimer7;
        }
        else if (mins < 10 && sec > 9 && mins1 > 9 && sec1 < 10) {
            trackDuration.innerHTML = displayTimer8;
        }
        else if (mins < 10 && sec < 10 && mins1 < 10 && sec1 > 9) {
            trackDuration.innerHTML = displayTimer9;    
        }
        else if (mins > 9 && sec < 10 && mins1 < 10 && sec1 > 9) {
            trackDuration.innerHTML = displayTimer10;
        }
        else if (mins > 9 && sec > 9 && mins1 < 10 && sec1 > 9) {
            trackDuration.innerHTML = displayTimer11;
        }
        else if (mins < 10 && sec > 9 && mins1 < 10 && sec1 > 9) {
            trackDuration.innerHTML = displayTimer12;
        }
        else if (mins < 10 && sec < 10 && mins1 > 9 && sec1 > 9) {
            trackDuration.innerHTML = displayTimer13;    
        }
        else if (mins > 9 && sec < 10 && mins1 > 9 && sec1 > 9) {
            trackDuration.innerHTML = displayTimer14;
        }
        else if (mins > 9 && sec > 9 && mins1 > 9 && sec1 > 9) {
            trackDuration.innerHTML = displayTimer15;
        }
        else if (mins < 10 && sec > 9 && mins1 > 9 && sec1 > 9) {
            trackDuration.innerHTML = displayTimer16;
        }
       }, 1000);
    }
songTimer();





function loadSong () {
    songTitle.innerHTML = `Song title: ${songs[songIndex].songName}`;
    songArtist.innerHTML = `Song Artist: ${songs[songIndex].songArtist}`;
    trackIndex.innerHTML = `${songIndex + 1} /<span style="color: white">${songs.length}</span>`;
    
    audio.src = songs[songIndex].audioFile;
    coverArt.src = songs[songIndex].coverArt;

    timer = setInterval(function rangeSlider () {
        let position = 0;

        if (!isNaN(audio.duration)) {
            position = audio.currentTime * (100 / audio.duration);
            slider.value = position;
        }
        console.log(audio.currentTime, audio.duration);
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

function fastForward () {
    if (audio.currentTime == audio.duration) {
        audio.currentTime += 0;
    }

    if (audio.currentTime < audio.duration) {
        audio.currentTime += 2.0;
    }
}

function rewind () {
    if (audio.currentTime == 0) {
        audio.currentTime -= 0;
    }

    if (audio.currentTime <= audio.duration) {
        audio.currentTime -= 2.0;
    }
}

function stop () {
    border.style.animationDuration = "0s";
    playImg.src = "icons/play.png";
    audio.pause();
    playCounter = 0;
    audio.currentTime = 0;
}

function playThrough () {
    timer = setInterval(function () {
        if (audio.currentTime == audio.duration && loopCounter == 0) {
            audio.currentTime = 0;
            loadSong()
            audio.pause();
            border.style.animationDuration = "0s";
            playImg.src = "icons/play.png";
            playCounter = 0;
            console.log(audio.currentTime);
        }
        else if (audio.currentTime == audio.duration && loopCounter == 1) {
            audio.currentTime = 0;
            loadSong();
            audio.play();
            border.style.animationDuration = ".5s";
            playImg.src = "icons/pause.png";
            playCounter = 1;
        }
        else if (audio.currentTime == audio.duration && loopCounter == 2 && songIndex < songs.length - 1) {
            songIndex += 1;
            loadSong();
            audio.currentTime = 0;
            audio.play();
            border.style.animationDuration = ".5s";
            playImg.src = "icons/pause.png";
            playCounter = 1;
        }
        else if (audio.currentTime == audio.duration && loopCounter == 2 && songIndex == songs.length - 1) {
            songIndex = 0;
            loadSong();
            audio.currentTime = 0;
            audio.play();
            border.style.animationDuration = ".5s";
            playImg.src = "icons/pause.png";
            playCounter = 1;
        }
        }, 200);
}
playThrough();

function loopControls () {
    if (loopCounter == 0) {
        loopButtonText.innerHTML = "Loop One";
        loopCounter = 1
    }
    else if (loopCounter == 1) {
        loopButtonText.innerHTML = "Loop All";
        loopCounter = 2;
    }
    else if (loopCounter == 2) {
        loopButtonText.innerHTML = "No Loop";
        loopCounter = 0;
    }
}






