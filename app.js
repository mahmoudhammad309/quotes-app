const author = document.querySelector('.author');
const quote = document.querySelector('.quotes');
const btn = document.querySelector('.btn');
const saveBtn = document.querySelector('.btn-save');
const savedQuotes = document.querySelector('.saved-quotes');
let count = 0;


saveBtn.addEventListener('click', () => {
  const savedQuotesDiv = document.createElement('div');

  const qouteDiv = document.createElement('div');
  const iconsDiv = document.createElement('div');
  const author = document.querySelector('.author').textContent;
  const quote = document.querySelector('.quotes').textContent;
  const general = document.querySelector('.general')
  savedQuotesDiv.append(qouteDiv, iconsDiv);
  qouteDiv.innerHTML +=`<p>${author}</p>`;
  qouteDiv.innerHTML +=`<p>${quote}</p>`;
  iconsDiv.innerHTML += `<i class="far fa-times-circle"></i>`;
  savedQuotesDiv.classList.add('saved-quotes');
  qouteDiv.classList.add('qoute')
  iconsDiv.classList.add('icons');
  general.append(savedQuotesDiv)
  
})











btn.addEventListener('click',changeQuotes)

function changeQuotes() {
  fetch('quotes.json')
  .then((response) => {
  return response.json();
  })
  .then(data => {
  const randomNum = Math.floor(Math.random() * data.length);
  author.textContent = `\u201C ${data[randomNum].author}`;
  quote.textContent = data[randomNum].text;
  })
  .catch((err) => {
  console.log('rejected', err)
  });

}

