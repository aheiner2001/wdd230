const url = "https://aheiner2001.github.io/wdd230/chamber/data/members.json";

async function getLinks() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayLinks(data.members); // Assuming data structure has members array
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getLinks();

function displayLinks(members) {
    const cards = document.querySelector('#memcardcontainer'); // Assuming there is a container with class 'cards'

    members.forEach(member => {
        let card = document.createElement("div");
        card.classList.add("memcard");

        let name = document.createElement("p");
        let address = document.createElement("p");
        let phoneNum = document.createElement("p");
        let URL = document.createElement("a");
        let img = document.createElement("img");
        let memLevel = document.createElement("p");

        name.textContent = member.name;
        address.textContent = member.address;
        phoneNum.textContent = member.phoneNum;
        URL.textContent = member.url;
        URL.href = member.url;
        img.setAttribute("src", member.imagefile);
        img.setAttribute("alt", `${member.name}'s image`);
        memLevel.textContent = member.memLevel;

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phoneNum);
        card.appendChild(URL);
        card.appendChild(img);
        card.appendChild(memLevel);

        cards.appendChild(card);
    });
}
