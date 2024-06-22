const baseUrl = "https://aheiner2001.github.io/wdd230/";
const linksURL = "https://aheiner2001.github.io/wdd230/data/links.json";

async function getLinks() {
  
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data)
    displayLinks(data.lessons); // Assuming data structure has lessons array
    
 
}

getLinks(); // Call the function to execute it
function displayLinks(weeks) {
    const ul = document.querySelector("#learning-activities");
  
    // Create an empty object to hold the weeks and their lessons
    const weeksMap = {};
  
    // Loop through the weeks and organize them into the weeksMap
    weeks.forEach(week => {
      // If the week doesn't exist in the map, create an array for it
      if (!weeksMap[week.lesson]) {
        weeksMap[week.lesson] = [];
      }
      // Add the current week's lessons to the map
      weeksMap[week.lesson].push(...week.links);
    });
  
    // Now, create the list items for each week
    for (const [weekNumber, links] of Object.entries(weeksMap)) {
      const weekLi = document.createElement("li");
      const weekHeader = document.createElement("h5");
      weekHeader.textContent = `Week ${weekNumber}`;
      weekLi.appendChild(weekHeader);
  
      // Create a sublist for the lessons in this week
      const lessonUl = document.createElement("ul");
      links.forEach(link => {
        const lessonLi = document.createElement("li");
        const lessonA = document.createElement("a");
        lessonA.href = baseUrl + link.url;
        lessonA.textContent = link.title;
        if (link.target) {
          lessonA.target = link.target;
        }
        lessonLi.appendChild(lessonA);
        lessonUl.appendChild(lessonLi);
      });
  
      weekLi.appendChild(lessonUl);
      ul.appendChild(weekLi);
    }
  }
  