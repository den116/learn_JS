function DomElement (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;

  DomElement.prototype.newElem = function () {
    let selectorValue = this.selector.value,
        elem;

    if (selectorValue.startsWith('.', 0)) {
      elem = document.createElement('div');
      elem.setAttriblute('class', selectorValue.slice(1));
      document.body.appendChild(elem);
    } else if (selectorValue.startsWith('#', 0)) {
      elem = document.createElement('p');
      elem.setAttriblute('id', selectorValue.slice(1));
      document.body.appendChild(elem);
    }

    elem.style.cssText =`color: red !important;
    background-color: yellow;
    width: 100px;
    text-align: center;
`;
    
  };
}

