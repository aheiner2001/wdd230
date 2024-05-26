
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

