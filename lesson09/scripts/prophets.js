const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData(){
    const response = await fetch(url);
    const data = await response.json()
    //console.table(data.prophets);
    displayProphets(data.prophets); 
}




getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2")
        let portrait = document.createElement("img")
        let birthdate = document.createElement("h4")
        let birthplace = document.createElement("h4")



        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthdate.textContent = prophet.birthdate;
        birthplace.textContent = prophet.birthplace;
  
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
            

        card.appendChild(fullName);
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        card.appendChild(portrait);
        
        cards.appendChild(card);
    });
    let card = document.createElement("section");
    cards.appendChild(card);

  }