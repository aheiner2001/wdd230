
const lastModifiedElement = document.getElementById('lastModified');
const lastModifiedDate = new Date(document.lastModified);
lastModifiedElement.textContent = lastModifiedDate.toDateString();


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
	
	
});




const modeButton = document.querySelector("#switch");
const check = document.querySelector("checkbox");

const body = document.querySelector("body");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const cards = document.querySelectorAll(".card");
const nav = document.querySelectorAll("a");



modeButton.addEventListener('change', function() {
  
    body.classList.toggle('dark-mode', this.checked);
	main.classList.toggle('dark-mode',this.checked);
	footer.classList.toggle('dark-mode',this.checked);
	
    cards.forEach(card => {
        card.classList.toggle('dark-mode', this.Checked);
    });
    nav.forEach(a => {
        a.classList.toggle('dark-mode', this.Checked);
      
    });
   
    
	
  });
  

modeButton.addEventListener("click", () => {

});




const visitsDisplay = document.querySelector(".lasttime");


let lastVisit = Number(window.localStorage.getItem("numVisits-ls")) || 0;

let lastVisitDate = window.localStorage.getItem("lastVisitDate-ls");


if (lastVisit !== 0) {
    
    let today = new Date();
    let previousVisitDate = new Date(lastVisitDate);
    let timeDiff = today - previousVisitDate;
    console.log(timeDiff)
    let daysDiff = Math.round(timeDiff / (1000 * 60 * 60 * 24));
    

    if (daysDiff < 1) {
        visitsDisplay.textContent = "Back so soon! Awesome!";
    } else {
        let dayWord = daysDiff === 1 ? "day" : "days";
        visitsDisplay.textContent = `You last visited ${daysDiff} ${dayWord} ago.`;
    }
} else {
    visitsDisplay.textContent = "Welcome! Let us know if you have any questions.";
}


lastVisit++;


localStorage.setItem("numVisits-ls", lastVisit);
localStorage.setItem("lastVisitDate-ls", new Date().toISOString());

