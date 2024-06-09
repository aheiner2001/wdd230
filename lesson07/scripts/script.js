// In your js file, declare three const variables that hold references to the input, button, and list elemen

const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");


function getChapterList() {
    return JSON.parse(localStorage.getItem("myFavBOMList"));
}
function setChapterList() {
    console.log(chaptersArray);
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));

    
  }

  function deleteChapter (chapter){

    chapter = chapter.slice(0-chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter)
     setChapterList()
  }

function displayList(item ){
       if (item !== ""){
        
        const li = document.createElement("li");
        const deleteButton = document.createElement("button");
        li.textContent = item;
        deleteButton.textContent = "❌"
        li.append(deleteButton);
        list.append(li);
        deleteButton.addEventListener("click", ()=> {
                list.removeChild(li);
                deleteChapter(item);
                input.focus();
        })
        input.focus();

        
        // send the focus to the input element
        
        // change the input value to nothing or the empty string to clean up the interface for the user
        input.value = "";
        button.textContent = "Add Chapter"
        // Testing
        
            }
        
        


}
// So if we look at this line of code we can see that it says let chapter array equals get chapter list parentheses then it says or if that doesn't happen and there's nothing to return it'll create a empty list
let chaptersArray = getChapterList() || [];
// Filter out empty strings from the array
chaptersArray = chaptersArray.filter(item => item.trim() !== '');


chaptersArray.forEach(chapter => {
    displayList(chapter)
    

button.addEventListener('click', () => {
   
    let inputValue = input.value.trim();
    
    if (inputValue !== '') {
        displayList(inputValue);
        chaptersArray.push(inputValue);
        setChapterList();
        input.value = '';
        input.focus();
    }
});











});