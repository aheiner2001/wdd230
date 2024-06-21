const blocks = document.querySelectorAll(".block");
const reset = document.querySelector(".reset");
const list = document.querySelector(".list");

let daynum = parseInt(localStorage.getItem("daynum")) || 1;
let numCoin = parseInt(localStorage.getItem("coins")) || 0;
let boxesChecked = JSON.parse(localStorage.getItem("checkedboxes")) || [];

function setBoxesChecked() {
    localStorage.setItem('checkedboxes', JSON.stringify(boxesChecked));
    localStorage.setItem('daynum', daynum.toString());
    localStorage.setItem("coins", numCoin.toString());
}

function displayCoins() {
    list.innerHTML = ''; // Clear the list before adding coins
    for (let i = 0; i < numCoin; i++) {
        const li = document.createElement("li");
        li.textContent = "💰";
        list.appendChild(li);
    }
}

// Initialize the display of coins and blocks
displayCoins();
blocks.forEach((block, index) => {
    if (boxesChecked.includes(index + 1)) {
        block.style.backgroundColor = "lightblue";
        block.textContent = index + 1;
    }
});

blocks.forEach((block, index) => {
    block.addEventListener("click", () => {
        let indexInChecked = boxesChecked.indexOf(index + 1);
        if (indexInChecked === -1) {
            block.style.backgroundColor = "lightblue";
            block.textContent = index + 1;
            boxesChecked.push(index + 1);
            daynum = Math.max(daynum, index + 2);
            if ((index + 1) % 3 === 0) {
                numCoin++;
            }
        } else {
            block.style.backgroundColor = "";
            block.textContent = "";
            boxesChecked.splice(indexInChecked, 1);
            daynum = boxesChecked.length > 0 ? Math.max(...boxesChecked) + 1 : 1;
            if ((index + 1) % 3 === 0) {
                numCoin = Math.max(numCoin - 1, 0);
            }
        }
        setBoxesChecked();
        displayCoins();
    });
});

reset.addEventListener("click", () => {
    blocks.forEach(block => {
        block.style.backgroundColor = "";
        block.textContent = "";
    });
    daynum = 1;
    boxesChecked = [];
    numCoin = 0;
    setBoxesChecked();
    displayCoins();
});

var currentMusic = null;

function playMusic() {
    // If there's no music currently, create a new Audio object
    if (!currentMusic) {
        currentMusic = new Audio("jonny.mp3");
        currentMusic.play();
    } else {
        // If music is already playing, pause it
        if (!currentMusic.paused) {
            currentMusic.pause();
        } else {
            // If music is paused, play it
            currentMusic.play();
        }
    }
}

const checkbox = document.getElementById('logCheckbox');
const streakDisplay = document.getElementById('streak');
let lastLoggedDate = localStorage.getItem('lastLoggedDate');
let streak = parseInt(localStorage.getItem('streak'), 10) || 0;

function updateStreak(today) {
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  if (lastLoggedDate === yesterday.toISOString().split('T')[0]) {
    streak++;
  } else if (lastLoggedDate !== today.toISOString().split('T')[0]) {
    streak = 1; // Reset streak if not consecutive
  }
  localStorage.setItem('streak', streak);
  localStorage.setItem('lastLoggedDate', today.toISOString().split('T')[0]);
  streakDisplay.textContent = 'Consecutive days: ' + streak;
}

checkbox.addEventListener('change', function() {
  if (checkbox.checked) {
    const today = new Date();
    updateStreak(today);
  }
});

// Display the current streak on load
window.onload = function() {
  streakDisplay.textContent = 'Consecutive days: ' + streak;
};