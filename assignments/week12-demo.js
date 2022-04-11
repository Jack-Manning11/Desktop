const quoteButton = document.getElementById('js-new-quote');
quoteButton.addEventListener('click', getQuote);
const endPoint = 'https://www.boredapi.com/api/activity';

async function getQuote(){
  try{
    const response = await fetch(endPoint);
    if(!response.ok) {
      throw Error(response.statusText);
    }
    const json = await response.json();
    console.log(json);
    displayQuote(json.activity);
    displayAuthor(json.type);
  }catch(err) {
    console.log(err);
    alert('failed');
  }
}

function displayQuote(quote) {
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}

function displayAuthor(author) {
  const quoteAuthor = document.querySelector('#js-quote-author');
  quoteAuthor.textContent = "- " + author;
}
