const btn = document.querySelector('.btn');
const body = document.body;

// btn.addEventListener('click', () => {
//   body.style.background = 'black';
//   body.style.color = 'white';
// })

let Dark = false; 

btn.addEventListener('click', () => {
  if (Dark) {
    // 밝을때
    body.style.background = 'white';
    body.style.color = 'black';
    btn.style.background = 'white';
    btn.style.color = 'black';
  } else {
    // 어두울떄
    body.style.background = 'black';
    body.style.color = 'white';
    btn.style.background = 'black';
    btn.style.color = 'white';
  }

  Dark = !Dark; 
});