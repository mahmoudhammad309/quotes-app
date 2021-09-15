const author = document.querySelector('.author');
const quote = document.querySelector('.quotes');
const btn = document.querySelector('.btn');
const saveBtn = document.querySelector('.btn-save');
const savedQuotes = document.querySelector('.saved-quotes');
let count = 0;
const general = document.querySelector('.general');
const showFav = document.querySelector('.show');


saveBtn.addEventListener('click', saveFavorite);
btn.addEventListener('click',changeQuotes);
showFav.addEventListener('click', showFavorite)

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

};

function saveFavorite() {
  const savedQuotesDiv = document.createElement('div');
  const qouteDiv = document.createElement('div');
  const iconsDiv = document.createElement('div');

  savedQuotesDiv.append(qouteDiv, iconsDiv);
  qouteDiv.innerHTML +=`<p>${author.textContent}</p>`;
  qouteDiv.innerHTML +=`<p>${quote.textContent}</p>`;
  iconsDiv.innerHTML += `<i class="far fa-times-circle icon"></i>`;
  savedQuotesDiv.classList.add('saved-quotes');
  qouteDiv.classList.add('qoute');
  iconsDiv.classList.add('icons');
  general.append(savedQuotesDiv);
  
  // remove quotes
  const icons = document.querySelectorAll('.icon');
  icons.forEach((e) => {
    e.addEventListener('click', () => {
      e.parentElement.parentElement.remove()
    })
  })
};

function showFavorite() {
  general.classList.toggle('hide')
}