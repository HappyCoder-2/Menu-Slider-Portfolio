/**
* This is a responsive menu
*/
const mobileMenu = () => { // 1. креирање на функција за оспособување на копчето, т.е. за ставање во функција
  let menu = document.querySelector('.header ul'); // 2. прво треба да се преземи <ul> од HTML
  let btn = document.querySelector('.header button'); // 4. прво го преземаме копчето MENU од HTML
  
if(btn.innerText === 'MENU') {
  menu.style.display = 'block';
  btn.innerText = 'CLOSE';
} else {
  menu.style.display = 'none';
  btn.innerText = 'MENU';
}

  
  // 5. потоа декларираме што да пишува кога ќе кликнеме на MENU (во случајот ќе пишува CLOSE)
}

// горната функција испишана на традиционален начин
/*function mobileMenu() {
  console.log(mobileMenu);
}*/

/**
* This is a gallery
*/

let rightBtn = document.querySelector('#right-btn');
let leftBtn = document.querySelector('#left-btn');
let pictures =document.querySelectorAll('.slider-images img');
let imgNum  = 0;


rightBtn.addEventListener('click', () => {
  displayNone();
  imgNum++;

  if(imgNum === pictures.length) {
    imgNum = 0;
  }

    pictures[imgNum].style.display = 'block';

  });

leftBtn.addEventListener('click', () => {
  displayNone();
  imgNum--;

  if(imgNum === -1) {
    imgNum = pictures.length - 1;
  }
  pictures[imgNum].style.display = 'block';

});

/**
* Оваа функција ќе ги сокрие сите слики
*/
const displayNone = () => {
pictures.forEach((img) => {
  img.style.display = 'none';
});
}

// Portfolio

const portfolioSort = (button) => {
  let category = button.getAttribute('data-category');
  let portfolioItems = document.querySelectorAll('.portfolio-single-item')

  portfolioItems.forEach((item) => {
    item.style.display = 'none';
  });

  if(category ==='all') {
      portfolioItems.forEach((item) => {
      item.style.display = 'block';
    });
  }

  portfolioItems.forEach((item) =>{
   if(item.getAttribute('data-category').includes(category)) {
    item.style.display = 'block';
   }
  });
}

/**
* Open Modal Popup Window
*/

const openModal = () => {
  let modalWindow = document.querySelector('.popup-modal');
  let overlay = document.querySelector('.overlay');
  modalWindow.style.display = 'block';
  overlay.style.display = 'block';
}

/**
* Close Modal Popup Window
*/

const closeModal = () => {
  let modalWindow = document.querySelector('.popup-modal');
  let overlay = document.querySelector('.overlay');
  modalWindow.style.display = 'none';
  overlay.style.display = 'none';
}