# Heardle Game

A browser-based song guessing game inspired by Heardle. Listen to a short audio clip and try to identify the song within six attempts.

## Features

- Daily song selection based on the current date
- Audio snippets that increase in length with each attempt
- Six guesses per game
- Instant win and wrong-answer feedback
- Play/pause audio controls
- Restart game functionality
- Responsive interface for desktop and mobile screens

## Built With

- HTML5
- CSS3
- JavaScript
- MP3 audio files

## How to Play

1. Open `index.html` in a web browser.
2. Click the play button to listen to the song snippet.
3. Enter your guess in the input field.
4. Click **Guess** or press **Enter** to submit your answer.
5. Keep guessing until you identify the song or use all six attempts.
6. Click **Restart Game** to start over.

## Screenshots

![Initial game state with controls and empty feedback panel](<img>)
*Initial state: the player can play the opening snippet, enter a guess, and track attempts from the feedback panel.*

![Gameplay state showing failed guesses followed by a correct answer](<img>)
*Feedback state: wrong attempts are shown in order, and a correct guess ends the round with a win message.*

## Interface and Gameplay States

The interface centers on three actions: play the current snippet, submit a song guess, and restart the round. As guesses are submitted, the feedback panel logs each attempt, highlights incorrect entries, and displays a win message when the correct title is guessed within the six-attempt limit.

## Project Structure

```text
Heardle-Game/
├── index.html   # Game layout and controls
├── style.css    # Styling and responsive design
├── script.js    # Game logic, audio playback, and scoring
└── songs/       # Song audio files
```

## Running Locally

No build tools or dependencies are required. Clone or download the repository, then open `index.html` directly in your browser.

## License

No license has been specified for this project yet.
