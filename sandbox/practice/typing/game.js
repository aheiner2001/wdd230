const gameContainer = document.getElementById('game-container');
const fallingLetters = document.getElementById('falling-letters');
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const fallDuration = 5000; // duration of falling animation in ms

// Function to create a random letter element
function createLetter() {
    const letter = document.createElement('div');
    letter.classList.add('letter');
    letter.textContent = letters[Math.floor(Math.random() * letters.length)];
    letter.style.left = `${Math.random() * 100}%`;
    letter.style.animationDuration = `${fallDuration / 1000}s`;
    fallingLetters.appendChild(letter);

    setTimeout(() => {
        if (fallingLetters.contains(letter)) {
            fallingLetters.removeChild(letter);
        }
    }, fallDuration);
}

// Function to handle keypress event
function handleKeyPress(event) {
    const key = event.key.toUpperCase();
    const letterElements = document.querySelectorAll('.letter');

    letterElements.forEach(letterElement => {
        if (letterElement.textContent === key) {
            fallingLetters.removeChild(letterElement);
        }
    });
}

// Create a new letter at regular intervals
setInterval(createLetter, 1000);

// Listen for keypress events
window.addEventListener('keydown', handleKeyPress);
