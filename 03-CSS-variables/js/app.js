'use strict';

window.addEventListener(`DOMContentLoaded`, () => {

  function changeVariables() {

    const inputs = document.querySelectorAll(`input`);


    function changeValue() {
      const suffix = this.dataset.sizing || ``;
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener(`input`, changeValue));

  }

  changeVariables();

});