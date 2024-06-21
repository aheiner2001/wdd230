

const kp1 = document.querySelector("#password");
const kp2 = document.querySelector("#passwordtwo");
const message = document.querySelector("#formmessage");

kp2.addEventListener("focusout", checkSame);

function checkSame() {
    if (kp1.value !== kp2.value) {
        message.textContent = "❗Key Phrases DO NOT MATCH!";
        kp2.value = "";
        kp2.focus();
        kp2.style.backgroundColor = "#fff0f3";
    } else {
        message.textContent = "Epic stuff, nice pass";

    }
}


const rangevalue = document.querySelector("#rangevalue");
const range = document.querySelector("#range");

range.addEventListener("change", displayRating);
range.addEventListener("input", displayRating);

function displayRating(){
    rangevalue.innerHTML = range.value;
}