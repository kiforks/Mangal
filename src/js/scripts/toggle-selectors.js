'use strict';

function selectorToggle(selector, button, accessibility = false, focus = false) {
  const acc = () => accessibility ? visuallyHidden : closedSelector;

  let toggleSelector = document.querySelectorAll('.' + selector),
      toggleButton = document.querySelectorAll('.' + button),
      closedSelector = selector + '--closed',
      visuallyHidden = 'visually-hidden',
      hidingClass = acc(),
      focusOpenClass = selector + '--opened';

  if(focus) {
    toggleButton.forEach((amount, index) => {
      toggleButton[index].onfocus = () => {
        toggleSelector.forEach((element, number) => {
          let classList = toggleSelector[number].classList;
          if(!(classList.contains(focusOpenClass))){
            classList.add(focusOpenClass);
          }
        })
      }

      toggleButton[index].onblur = () => {
        toggleSelector.forEach((element, number) => {
          toggleSelector[number].classList.remove(focusOpenClass);
        })
      }
    })
  } else {
    toggleButton.forEach((amount, index) => {
      toggleButton[index].addEventListener('click', event => {
        // event.preventDefault();
        toggleSelector.forEach((element, number) => {
          let classList = toggleSelector[number].classList;
          classList.contains(hidingClass) ? classList.remove(hidingClass) : classList.add(hidingClass);
        })
      })
    })
  }
}

selectorToggle('header__wrapper', 'header__button');
selectorToggle('header__button', 'header__button');
selectorToggle('header__container', 'header__button');
selectorToggle('modal', 'catalog__order-button');
selectorToggle('modal', 'modal__close-button');
selectorToggle('projects__low-description', 'projects__upload-text');
selectorToggle('header__container', 'nav__link');
selectorToggle('header__wrapper', 'nav__link');
selectorToggle('header__button', 'nav__link');

//
// function preventDefaultfNone(selector, button) {
//   let toggleSelector = document.querySelectorAll('.' + selector),
//       toggleButton = document.querySelectorAll('.' + button),
//       closedSelector = selector + '--closed';
//
//   toggleButton.forEach((buttonItem) => {
//     buttonItem.addEventListener('click', () => {
//       toggleSelector.forEach((selectorItem => {
//         selectorItem.classList.add(closedSelector)
//       }))
//     })
//   })
// }
//
// preventDefaultfNone('header__container', 'nav__item');
// preventDefaultfNone('header__wrapper', 'nav__item');
// preventDefaultfNone('header__button', 'nav__item');
