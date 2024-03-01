let currentAudio = 0;
let yesCount = 0;
const audios = document.querySelectorAll('audio');

function playAudio(index) {
    audios.forEach((audio, i) => {
        if (i === index) {
            audio.classList.remove('hidden');
            audio.play();
        } else {
            audio.classList.add('hidden');
        }
    });
}

function recordResponse(response) {
    if (response === 'yes') yesCount++;
    currentAudio++;
    
    if (currentAudio < audios.length) {
        playAudio(currentAudio);
    } else {
        displayGraph();
        document.getElementById('audioControls').style.display = 'none'; // Hide controls after responding to all audios
    }
}

function displayGraph() {
    const resultDiv = document.getElementById('result');
    let imgSrc = '';

    switch (yesCount) {
        case 3:
            imgSrc = "C:/Users/91944/OneDrive/Desktop/online audiometer app/normal.jpg";
            break;
        case 2:
            imgSrc = "C:/Users/91944/OneDrive/Desktop/online audiometer app/mild.jpg";
            break;
        case 1:
            imgSrc = "C:/Users/91944/OneDrive/Desktop/online audiometer app/severe.jpg";
            break;
        default:
            imgSrc = "C:/Users/91944/OneDrive/Desktop/online audiometer app/severe.jpg";
    }

    resultDiv.innerHTML = `<img src="${imgSrc}" alt="Result Graph">`;
}

// Initial call to play the first audio
playAudio(currentAudio);
