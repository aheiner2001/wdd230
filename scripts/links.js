const baseUrl = "https://aheiner2001.github.io/wdd230/";
const linksURL = "https://aheiner2001.github.io/wdd230/data/links.json";

async function getLinks() {
  
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons); // Assuming data structure has lessons array
 
}

getLinks(); // Call the function to execute it

function displayLinks(lessons) {
  const ul = document.querySelector("#learning-activities");

  lessons.forEach(lesson => {
    const li = document.createElement("li");
    const weekHeader = document.createElement("h5");
    const urlLink = document.createElement("a");
    const titleHeader = document.createElement("h5");

    weekHeader.textContent = `Week ${lesson.lesson}`;
    urlLink.href = lesson.url;
    urlLink.textContent = lesson.title;
    if (lesson.target) {
      urlLink.target = lesson.target;
    }
    titleHeader.textContent = lesson.title;

    li.appendChild(weekHeader);
    li.appendChild(urlLink);
    li.appendChild(titleHeader);

    ul.appendChild(li);
  });
}
