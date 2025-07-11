const btnBoard = document.querySelector('#open');

btnBoard.addEventListener( 'click', () => {
  document.querySelector('.black-bg').classList.add('show');
})

const btnclose = document.querySelector('#close');

btnclose.addEventListener('click', () => {
  document.querySelector('.black-bg').classList.remove('show');
})

// jQuery
// $(`#open`).on(`click`, ()=> {
//   // $(`.black-bg`).addClass(`show`);
//   $(`.black-bg`).fadeIn();
// })

//jQuery
// $(`#close`).on(`click`, ()=> {
//   // $(`.black-bg`).removeClass(`show`);
//   $(`.black-bg`).fadeOut();
// })
