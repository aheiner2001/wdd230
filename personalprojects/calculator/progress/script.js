const blocks = document.querySelectorAll(".block");
const reset = document.querySelector(".reset");
let daynum = parseInt(localStorage.getItem("daynum")) || 1;
let daynumChange;

function getBoxesChecked() {
    return JSON.parse(localStorage.getItem("checkedboxes")) || [];
}

function setBoxesChecked() {
    localStorage.setItem('checkedboxes', JSON.stringify(boxesChecked));
    localStorage.setItem('daynum', daynum);
}

let boxesChecked = getBoxesChecked();

blocks.forEach((block, index) => {
    if (boxesChecked.includes((index + 1).toString())) {
        block.style.backgroundColor = "lightblue";
        block.textContent = index + 1;
    }

    block.addEventListener("click", () => {
        if (block.textContent === "") {
            block.textContent = daynum;
            daynumChange = block.textContent;
            daynum += 1;
            boxesChecked.push(block.textContent);
            setBoxesChecked();
            block.style.backgroundColor = "lightblue";
        } else {
            block.textContent = "";
            daynumChange = block.textContent;
            daynum -= 1;
            const indexToRemove = boxesChecked.indexOf(block.textContent);
            if (indexToRemove > -1) {
                boxesChecked.splice(indexToRemove, 1);
            }
            setBoxesChecked();
            block.style.backgroundColor = "";
            
        }

        if (daynum === 31) {
            blocks.forEach(block => {
                block.style.backgroundColor = "green";
            });
        }
    });
});

reset.addEventListener("click", () => {
    blocks.forEach(block => {
        block.style.backgroundColor = "white";
        block.textContent = "";
    });
    daynum = 1;
    boxesChecked = [];
    setBoxesChecked();
});
