document.addEventListener('DOMContentLoaded', () => {
    createCalendar();
    loadCalendar();
    loadToDoList();
});

function createCalendar() {
    const calendar = document.getElementById('calendar');
    const today = new Date();
    for (let i = 0; i < 30; i++) {
        const day = new Date(today);
        day.setDate(today.getDate() + i);
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('day');
        dayDiv.dataset.date = day.toISOString().split('T')[0];
        dayDiv.innerHTML = `<span>${day.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</span>`;
        calendar.appendChild(dayDiv);
    }
}

function addActivity() {
    const activityInput = document.getElementById('new-activity');
    const activity = activityInput.value.trim();
    if (activity) {
        const list = document.getElementById('things-to-do-list');
        const listItem = document.createElement('li');
        listItem.textContent = activity;
        listItem.onclick = () => moveToCalendar(listItem);
        list.appendChild(listItem);
        activityInput.value = '';
        saveToDoList();
    }
}

function moveToCalendar(listItem) {
    const calendarDays = document.querySelectorAll('#calendar .day');
    for (let day of calendarDays) {
        if (!day.querySelector('.activity')) {
            const activityDiv = document.createElement('div');
            activityDiv.classList.add('activity');
            activityDiv.textContent = listItem.textContent;
            day.appendChild(activityDiv);
            listItem.remove();
            saveCalendar();
            saveToDoList();
            break;
        }
    }
}

function saveCalendar() {
    const calendarDays = document.querySelectorAll('#calendar .day');
    const calendarData = Array.from(calendarDays).map(day => ({
        date: day.dataset.date,
        activity: day.querySelector('.activity') ? day.querySelector('.activity').textContent : null
    }));
    localStorage.setItem('calendarData', JSON.stringify(calendarData));
}

function loadCalendar() {
    const calendarData = JSON.parse(localStorage.getItem('calendarData')) || [];
    const calendarDays = document.querySelectorAll('#calendar .day');
    calendarData.forEach(data => {
        const day = Array.from(calendarDays).find(day => day.dataset.date === data.date);
        if (day && data.activity) {
            const activityDiv = document.createElement('div');
            activityDiv.classList.add('activity');
            activityDiv.textContent = data.activity;
            day.appendChild(activityDiv);
        }
    });
}

function saveToDoList() {
    const toDoListItems = document.querySelectorAll('#things-to-do-list li');
    const toDoListData = Array.from(toDoListItems).map(item => item.textContent);
    localStorage.setItem('toDoListData', JSON.stringify(toDoListData));
}

function loadToDoList() {
    const toDoListData = JSON.parse(localStorage.getItem('toDoListData')) || [];
    const list = document.getElementById('things-to-do-list');
    toDoListData.forEach(activity => {
        const listItem = document.createElement('li');
        listItem.textContent = activity;
        listItem.onclick = () => moveToCalendar(listItem);
        list.appendChild(listItem);
    });
}

function resetCalendar() {
    localStorage.removeItem('calendarData');
    localStorage.removeItem('toDoListData');
    const calendar = document.getElementById('calendar');
    const list = document.getElementById('things-to-do-list');
    calendar.innerHTML = '';
    list.innerHTML = '';
    createCalendar();
}
