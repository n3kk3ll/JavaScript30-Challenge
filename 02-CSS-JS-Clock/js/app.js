'use strict';

window.addEventListener(`DOMContentLoaded`, () => {

  function getTime() {

    const hands = document.querySelectorAll(`.hand`),
      secondHand = document.querySelector(`.second-hand`),
      minuteHand = document.querySelector(`.min-hand`),
      hourHand = document.querySelector(`.hour-hand`);

    hands.forEach(hand => hand.style.transition = `transform 0.05s cubic-bezier(0, 1.76, 0.58, 1)`);

    function setClock() {
      const now = new Date(),
        seconds = now.getSeconds(),
        minutes = now.getMinutes(),
        hours = now.getHours();

      function rotateHand(hand, handOffset) {
        hand.style.transform = `rotate(${handOffset}deg)`;
      }

      const secondHandOffset = ((seconds / 60) * 360) + 90;
      secondHand.style.transform = rotateHand(secondHand, secondHandOffset);

      const minuteHandOffset = ((minutes / 60) * 360) + 90;
      minuteHand.style.transform = rotateHand(minuteHand, minuteHandOffset);

      const hourHandOffset = ((hours / 12) * 360) + 90;
      hourHand.style.transform = rotateHand(hourHand, hourHandOffset);

      if (secondHandOffset > 432) {
        hands.forEach(hand => hand.style.transition = ``);
      } else if (secondHandOffset >= 102){
        hands.forEach(hand => hand.style.transition = `transform 0.05s cubic-bezier(0, 1.76, 0.58, 1)`);
      }

    }

    setClock();
    setInterval(setClock, 1e3);

  }

  getTime();

});