document.getElementById("menu").addEventListener("click", function() {
    var nav = document.querySelector("nav");
    var map = document.getElementById("map");
    nav.classList.toggle("open");
    this.classList.toggle("open");
    if (nav.classList.contains("open")) {
        map.style.display = "none";
    } else {
        map.style.display = "block";
    }
});


const visitsDisplay = document.querySelector(".visits");


let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;


if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `First Time ehh?? Welcome`;
}


numVisits++;

localStorage.setItem("numVisits-ls", numVisits);



