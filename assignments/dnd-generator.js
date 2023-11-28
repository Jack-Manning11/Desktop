const classes = ['barbarian', 'bard', 'cleric','druid', 'fighter', 'monk', 'paladin', 'ranger', 'rogue', 'sorcerer', 'warlock', 'wizard'];
const cls = classes[Math.floor(Math.random()*3)];
const endPoint = `https://www.dnd5eapi.co/api/classes/fighter`;

async function getQuote(){

  try{
    const response = await fetch(endPoint);
    if(!response.ok) {
      throw Error(response.statusText);
    }
    const json = await response.json();
    console.log(json);
  
  }catch(err) {
    console.log(err);
    alert('failed');
  }
}

getQuote();