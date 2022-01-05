/* eslint-disable func-names */
// eslint-disable-next-line max-lines-per-function
window.onload = function () {
  const board = document.getElementById('pixel-board');
 //h de height
  const h = 5;

  function createDiv(className) {
    const div = document.createElement('div');
    div.className = className;
    return div;
  }

  function creatLines(block){
    for (let i = 0; i < h; i += 1) {
      block.appendChild(createDiv('pixel-line'))
    }
  }
  
  creatLines(board);

  const lines = document.querySelectorAll('.pixel-line');

  // eslint-disable-next-line no-use-before-define
  fillBlock(lines);

  // eslint-disable-next-line no-shadow
  function fillBlock(lines) {
    for (let index = 0; index < lines.length; index += 1) {
      // eslint-disable-next-line no-use-before-define
      fillLine(lines[index]);
    }
  }

  function fillLine(largura) {
    for (let i = 0; i < lines.length; i += 1) {
      largura.appendChild(createDiv('pixel'));
    }
  }
};