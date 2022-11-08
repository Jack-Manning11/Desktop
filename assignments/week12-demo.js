console.log("starting");
const quoteButton = document.getElementById('js-new-quote');
quoteButton.addEventListener('click', getQuote);
const endPoint = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

async function getQuote(){
  console.log("fetching take 2");
  try{
    const response = await fetch(endPoint);
    if(!response.ok) {
      throw Error(response.statusText);
    }
    const json = await response.json();
    console.log(json);
    //displayQuote(json.activity);
  }catch(err) {
    console.log(err);
    alert('failed');
  }
}

function displayQuote(quote) {
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}

getQuote();