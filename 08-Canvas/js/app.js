'use strict';

window.addEventListener(`DOMContentLoaded`, () => {

  function useCanvas() {
    const canvas = document.getElementById(`canvas`),
      context = canvas.getContext(`2d`);

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      context.strokeStyle = '#178254';
      context.lineJoin = 'round';
      context.lineCap = 'round';
      context.lineWidth = 25;
      // context.globalCompositeOperation = `multiply`;

    let isDrawing = false,
      lastX = 0,
      lastY = 0,
      hue = 0,
      direction = true;

    function draw(e) {
      if (!isDrawing) return;
      console.log(e);
      context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
      context.beginPath();
      context.moveTo(lastX, lastY);
      context.lineTo(e.offsetX, e.offsetY);
      context.stroke();
      [lastX, lastY] = [e.offsetX, e.offsetY];
      if(hue >= 360) {
        hue = 0;
      } else {
        hue++;
      }
      if(context.lineWidth >= 50 || context.lineWidth <= 1) {
        direction = !direction;
      }
      if(direction) {
        context.lineWidth++;
      } else {
        context.lineWidth--;
      }
    }

    canvas.addEventListener(`mousedown`, e => {
      isDrawing = true;
      [lastX, lastY] = [e.offsetX, e.offsetY];
    });

    canvas.addEventListener(`mousemove`, draw);
    canvas.addEventListener(`mouseup`, () => isDrawing = false);
    canvas.addEventListener(`mouseout`, () => isDrawing = false);
  }

  useCanvas();

});