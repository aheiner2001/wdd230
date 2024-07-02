document.addEventListener('DOMContentLoaded', (event) => {
    loadWeights();
});

function saveWeight() {
    const goalWeight = document.getElementById('goalWeight').value;
    const dailyWeight = document.getElementById('dailyWeight').value;

    if (goalWeight && dailyWeight) {
        const weightLog = JSON.parse(localStorage.getItem('weightLog')) || [];
        const now = new Date();
        const dateTime = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
        weightLog.push({ dateTime: dateTime, weight: dailyWeight });
        localStorage.setItem('goalWeight', goalWeight);
        localStorage.setItem('weightLog', JSON.stringify(weightLog));
        loadWeights();
    } else {
        alert('Please fill in all fields');
    }
}

function loadWeights() {
    const goalWeight = localStorage.getItem('goalWeight');
    const weightLog = JSON.parse(localStorage.getItem('weightLog')) || [];

    document.getElementById('goalWeight').value = goalWeight || '';

    const weightLogElement = document.getElementById('weightLog');
    weightLogElement.innerHTML = '';
    weightLog.forEach(entry => {
        const li = document.createElement('li');
        li.textContent = `${entry.dateTime}: ${entry.weight} lbs`;
        weightLogElement.appendChild(li);
    });

    if (weightLog.length > 0) {
        const latestWeight = weightLog[weightLog.length - 1].weight;
        updateGoalStatus(latestWeight, goalWeight);
    } else {
        updateGoalStatus(null, goalWeight);
    }
}

function updateGoalStatus(latestWeight, goalWeight) {
    const goalStatusElement = document.getElementById('goalStatus');
    if (latestWeight && goalWeight) {
        const difference = latestWeight - goalWeight;
        goalStatusElement.textContent = `Goal: ${difference} lbs to go`;
    } else {
        goalStatusElement.textContent = '';
    }
}

function resetData() {
    localStorage.removeItem('goalWeight');
    localStorage.removeItem('weightLog');
    document.getElementById('goalWeight').value = '';
    document.getElementById('dailyWeight').value = '';
    document.getElementById('weightLog').innerHTML = '';
    document.getElementById('goalStatus').textContent = '';
}
