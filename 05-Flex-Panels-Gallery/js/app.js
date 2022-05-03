'use strict';

window.addEventListener(`DOMContentLoaded`, () => {

  function growPanel(parentContainer) {

    const panels = parentContainer.querySelectorAll(`.panel`);

    function clearActiveClass() {
      panels.forEach(panel => panel.classList.remove(`open`));
    }
    
    panels.forEach(panel => panel.addEventListener(`click`, () => {
      clearActiveClass();
      panel.classList.toggle(`open`);
    }));

    panels.forEach(panel => panel.addEventListener(`transitionend`, e => {
      if(e.propertyName === `flex-grow`) {
        panel.classList.toggle(`open-active`);
      }
    }));

  }

  growPanel(document.querySelector(`.panels`));

});