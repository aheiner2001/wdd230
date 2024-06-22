const baseUrl = "https://aheiner2001.github.io/wdd230/";
const linksURL = "https://aheiner2001.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  console.log(data);
}

getLinks();// Call the function to execute it
