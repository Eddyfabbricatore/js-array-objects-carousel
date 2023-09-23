/* 
1. Prendiamo tutti gli elementi che ci servono dall'html
2. Stampiamo le immagini contenute dentro l'array creato attribuendo la classe hide ad ogni img
3. Togliamo la classe hide dalla prima immagine
4. Al click di btnNext aumentiamo il contatore creato e cambiamo immagine con quella segente
5. Al click di btnPrev effettuiamo il contrario
6. btnPrev di defaul ha classe hide che viene tolta al click di btnNext
7. Se ci troviamo alla fine del nostro array aggiungiamo la classe hide al btnNext, mentre se torniamo all'inizio dell'array btnPrev tornerà ad avere la classe hide
*/

const imgs = [
  {
    image: 'img/01.webp',
    title: 'Marvel\'s Spiderman Miles Morale',
    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  }, 
  {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  }, 
  {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  }, 
  {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  }, 
  {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }
];

let counterImg = 0;

// elements
const itemsWrapper = document.querySelector('.items-wrapper');
const itemsWrapperText = document.querySelector('.items-wrapper-text');
const thumbsWrapper = document.querySelector('.thumbs-wrapper');

// buttons
const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');

// reset
itemsWrapper.innerHTML = '';
thumbsWrapper.innerHTML = '';

// stampo le immagini e le thumb
imgs.forEach((img) => {
  // console.log(img);

  itemsWrapper.innerHTML += `<img class="item hide" src="${img.image}" alt="">`;

  // creo un nuovo elemento img
  thumb = new Image();
  thumb.src = img.image;
  thumb.classList.add('thumb');

  thumbsWrapper.append(thumb);

  itemsWrapper.innerHTML += `
  <h1 class="title m-0 hide">${img.title}</h1>
  
  <p class="text m-0 hide">${img.text}</p>`;
})

// prendo tutte le immagini
const itemsCollection = document.getElementsByClassName('item');
// mostro la prima immagine
itemsCollection[counterImg].classList.remove('hide');

// prendo tutte le thumb
const thumbsCollection = document.getElementsByClassName('thumb');
// mostro la prima thumb
thumbsCollection[counterImg].classList.add('active');

// prendo tutti i titoli
const titleCollection = document.getElementsByClassName('title');
// mostro il primo titolo
titleCollection[counterImg].classList.remove('hide');

// prendo tutti i testi
const textCollection = document.getElementsByClassName('text');
// mostro il primo testo
textCollection[counterImg].classList.remove('hide');

// click next
btnNext.addEventListener('click', function(){
  itemsCollection[counterImg].classList.add('hide');

  thumbsCollection[counterImg].classList.remove('active');

  titleCollection[counterImg].classList.add('hide');

  textCollection[counterImg].classList.add('hide');

  counterImg++;

  if(counterImg === imgs.length)  counterImg = 0;

  itemsCollection[counterImg].classList.remove('hide');

  thumbsCollection[counterImg].classList.add('active');

  titleCollection[counterImg].classList.remove('hide');

  textCollection[counterImg].classList.remove('hide');
});

// click prev
btnPrev.addEventListener('click', function(){
  itemsCollection[counterImg].classList.add('hide');

  thumbsCollection[counterImg].classList.remove('active');

  titleCollection[counterImg].classList.add('hide');

  textCollection[counterImg].classList.add('hide');

  counterImg--;

  if(counterImg < 0)  counterImg = imgs.length - 1;

  itemsCollection[counterImg].classList.remove('hide');

  thumbsCollection[counterImg].classList.add('active');

  titleCollection[counterImg].classList.remove('hide');

  textCollection[counterImg].classList.remove('hide');
});