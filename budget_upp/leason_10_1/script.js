function DomElement (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;

  DomElement.prototype.newElem = function () {
    let selectorValue = this.selector,
        elem;
    if (selectorValue.startsWith('.', 0)) {
      elem = document.createElement('div');
      elem.setAttribute('class', selectorValue.slice(1));
    } else if (selectorValue.startsWith('#', 0)) {
      elem = document.createElement('p');
      elem.setAttribute('id', selectorValue.slice(1));
      elem.textContent="Текст";
    }
    console.log(elem);
    elem.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize};`;

    document.body.appendChild(elem);
  };
}

let el = new DomElement('#hello', '100px', '100px', 'red', '20px');

el.newElem();
