const guessInput = document.getElementById('guessInput');
const submitBtn = document.getElementById('submitBtn');
const restartBtn = document.getElementById('Restart-game');
const AttemptBoxes = document.getElementsByClassName("attempt-box");
const songBtn = document.getElementById("pp-morph");
let comment = "";
let attempt = 0;

const songs = [
    {
        title: "Ek Dhun",
        file: "songs/song1.mp3"
    },
    {
        title: "Tum Bin Jaoon Kahan",
        file: "songs/song2.mp3"
    },
    {
        title: "Aaj Bhi",
        file: "songs/song3.mp3"
    },
    {
        title: "Samjhawan",
        file: "songs/song4.mp3"
    },
    {
        title: "Lutt Putt Gaya",
        file: "songs/song5.mp3"
    },
    {
        title: "O Maahi",
        file: "songs/song6.mp3"
    },
    {
        title: "Guli Mata",
        file: "songs/song7.mp3"
    },
    {
        title: "Hawayein",
        file: "songs/song8.mp3"
    },
    {
        title: "Jag Me Tera Naam Ho",
        file: "songs/song9.mp3"
    },
    {
        title: "Not Ramaiya Vastavaiya",
        file: "songs/song10.mp3"
    },
    {
        title: "Tu Aake Dekhle",
        file: "songs/song11.mp3"
    },
    {
        title: "Tera Ban Jaunga",
        file: "songs/song12.mp3"
    },
    {
        title: "Tum Ho Toh",
        file: "songs/song13.mp3"
    },
    {
        title: "Mahiye Jinna Sohna",
        file: "songs/song14.mp3"
    },
    {
        title: "Mehrama",
        file: "songs/song15.mp3"
    },
    {
        title: "Mera Jee Nahi Bhara",
        file: "songs/song16.mp3"
    },
    {
        title: "Mere Aas Paas",
        file: "songs/song17.mp3"
    },
    {
        title: "Om Namo Bhagavate Vasudevaya",
        file: "songs/song18.mp3"
    },
    {
        title: "O Sanam",
        file: "songs/song19.mp3"
    },
    {
        title: "Pahadon Mein",
        file: "songs/song20.mp3"
    },
    {
        title: "Qaafirana",
        file: "songs/song21.mp3"
    },
    {
        title: "Ranjha",
        file: "songs/song22.mp3"
    },
    {
        title: "Saiyaara Reprise (Female)",
        file: "songs/song23.mp3"
    },
    {
        title: "Sang Rahiyo",
        file: "songs/song24.mp3"
    },
    {
        title: "Bardali",
        file: "songs/song25.mp3"
    },
    {
        title: "Jhyal Bata",
        file: "songs/song26.mp3"
    },
    {
        title: "Sarangi",
        file: "songs/song27.mp3"
    },
    {
        title: "Tere Naal",
        file: "songs/song28.mp3"
    },
    {
        title: "Teri Aankhon Mein",
        file: "songs/song29.mp3"
    },
    {
        title: "Teri Hogaiyaan",
        file: "songs/song30.mp3"
    }

];

const date = new Date()
const dayNumber = (date.getDate() - 1) % songs.length;
const getSong = songs[dayNumber].file;
let answer = songs[dayNumber].title;
const audio = new Audio(getSong);

let gameOver = false;
let snippetTimer = null;

function clearSnippetTimer() {
    if (snippetTimer) {
        clearTimeout(snippetTimer);
        snippetTimer = null;
    }
}

function stopSong() {
    audio.pause();
    audio.currentTime = 0;
    songBtn.setAttribute("aria-pressed", "false");
    songBtn.setAttribute("aria-label", "Play");
}

function handleGuess() {
    if (gameOver) {
        return;
    }

    const guess = guessInput.value;
    // Add your guessing logic here
    guessInput.value = "";

    if (guess.toLowerCase() === answer.toLowerCase()) {
        comment = "You win!";
        audio.play();
    } else {
        comment = "Wrong Answer!";
    }

    handleAttemptBox(comment);
    // songBtn.disabled = false;
}

function handleAttemptBox(comment) {
    if (comment === "You win!") {
        AttemptBoxes[attempt].style.background = "linear-gradient(135deg, #d4ff98 0%, #459e40 100%)";
        AttemptBoxes[attempt].textContent = "Win";
        AttemptBoxes[attempt].style.color = "white";
        alert(comment);
        gameOver = true;
        guessInput.disabled = true;
        submitBtn.disabled = true;
        stopSong();
        return;
    } else {
        AttemptBoxes[attempt].style.background = "linear-gradient(135deg, #ff2525 0%, #96051b 100%)";
        AttemptBoxes[attempt].textContent = "Fail";
        AttemptBoxes[attempt].style.color = "white";
        if (attempt === AttemptBoxes.length - 1) {
            gameOver = true;
            alert("Game Over!");
            guessInput.disabled = true;
            submitBtn.disabled = true;
            stopSong();
            return;
        }

        attempt += 1;

        // Redirecting to next attempt box
        AttemptBoxes[attempt].style.setProperty("border-color", "#667eea");
    }
}

submitBtn.addEventListener('click', handleGuess);
guessInput.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        handleGuess();
    }
});

restartBtn.addEventListener("click", () => {
    attempt = 0;
    gameOver = false;
    clearSnippetTimer();
    stopSong();

    for (let i = 0; i < AttemptBoxes.length; i++) {
        AttemptBoxes[i].style.background = "linear-gradient(135deg, #f5f7fa 0%, #eef1f8 100%)";
        AttemptBoxes[i].textContent = `Attempt ${i + 1}`;
        AttemptBoxes[i].style.color = "#cbd5e0";
        AttemptBoxes[i].style.setProperty("border-color", "#e0e7ff");
    }

    guessInput.disabled = false;
    submitBtn.disabled = false;
});

songBtn.addEventListener("click", () => {
    if (gameOver) {
        if (audio.paused) {
            audio.play();
            songBtn.setAttribute("aria-pressed", "true");
            songBtn.setAttribute("aria-label", "Pause");
        } else {
            audio.pause();
            songBtn.setAttribute("aria-pressed", "false");
            songBtn.setAttribute("aria-label", "Play");
        }
        return;
    }

    const durations = [2, 4, 6, 8, 16, 30];
    const seconds = durations[Math.min(attempt, durations.length - 1)];

    clearSnippetTimer();
    audio.currentTime = 0;
    audio.play();
    songBtn.setAttribute("aria-pressed", "true");
    songBtn.setAttribute("aria-label", "Pause");

    snippetTimer = setTimeout(() => {
        stopSong();
    }, seconds * 1000);
});

