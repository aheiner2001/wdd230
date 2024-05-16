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
