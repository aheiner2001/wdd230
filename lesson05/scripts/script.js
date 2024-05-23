// In your js file, declare three const variables that hold references to the input, button, and list elemen

const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click",() => 
{
    if (input.value.trim() !== ""){




//         create a li element

const li = document.createElement("li");

// create a delete butt
const deleteButton = document.createElement("button");

// populate the li elements textContent or innerHTML with the input value
li.textContent = input.value;

// populate the button textContent with a ❌
deleteButton.textContent = "❌"

// append the li element with the delete button
li.append(deleteButton);

// append the li element to the unordered list in your HTML
list.append(li);

// add evenb listener to the delete button that removes the li element when clicked
deleteButton.addEventListener("click", ()=> {
        list.removeChild(li);
        input.focus();
})
input.focus();

// send the focus to the input element

// change the input value to nothing or the empty string to clean up the interface for the user
input.value = "";
button.textContent = "Add Chapter"
// Testing

    }
    else{
        button.textContent = "eat a bag, it didn't work,"
    }
})