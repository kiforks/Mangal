if(document.querySelector('.reviews__button')) {
  zIndexHide();
}

function zIndexHide() {
  const buttons = document.querySelectorAll('.reviews__button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => {
        btn.style = 'opacity: 0;';

        setTimeout(() => {
          btn.style = 'opacity: 1;';
        }, 700)
      })
    })
  })
}
