const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const carousel = document.querySelector('.carousel');
const pre = document.querySelector('.pre');
const next = document.querySelector('.next');

let slideNo = 1;

btn1.addEventListener('click', () => {
  carousel.style.transform = 'translateX(0)';
  slideNo = 1;
});

btn2.addEventListener('click', () => {
  carousel.style.transform = 'translateX(-100vw)';
  slideNo = 2;
});

btn3.addEventListener('click', () => {
  carousel.style.transform = 'translateX(-200vw)';
  slideNo = 3;
});

pre.addEventListener('click', () => {
  if (slideNo === 2) {
    carousel.style.transform = 'translateX(0)';
    slideNo = 1;
  } else if (slideNo === 3) {
    carousel.style.transform = 'translateX(-100vw)';
    slideNo = 2;
  }
});
next.addEventListener('click', () => {
  if (slideNo === 1) {
    carousel.style.transform = 'translateX(-100vw)';
    slideNo = 2;
  } else if (slideNo === 2) {
    carousel.style.transform = 'translateX(-200vw)';
    slideNo = 3;
  }
});
