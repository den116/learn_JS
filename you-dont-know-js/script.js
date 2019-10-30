'Use strict';

let collect = document.querySelectorAll('.books'),
    elem = document.querySelectorAll('.book');

console.log(collect);
console.log(elem);

// восстанавливаем порядок книг:

collect[0].insertBefore(elem[1], elem[0]);
collect[0].insertBefore(elem[4], elem[3]);
collect[0].appendChild(elem[2]);

//Заменяем картинку:

document.querySelector('body').style.backgroundImage = 'url(./image/adv.jpg)';

// меняем заголовок 3 книги:

document.querySelectorAll('a')[2].textContent = 'Книга 3. this и Прототипы Объектов';

// удаляем рекламу:

document.querySelector('.adv').style.display = 'none';

// восстанавливаем порядок глав во второй книге:

let ulBook2 = document.querySelectorAll('ul')[1],
    liBook2 = ulBook2.querySelectorAll('li');

ulBook2.insertBefore(liBook2[6], liBook2[4]);
ulBook2.insertBefore(liBook2[8], liBook2[4]);
ulBook2.insertBefore(liBook2[2], liBook2[10]);

// восстанавливаем порядок глав во пятой книге:

let ulBook5 = document.querySelectorAll('ul')[4],
    liBook5 = ulBook5.querySelectorAll('li');


ulBook5.insertBefore(liBook5[9], liBook5[3]);
ulBook5.insertBefore(liBook5[2], liBook5[6]);
ulBook5.insertBefore(liBook5[5], liBook5[8]);

// добавляем 8 главу в 6 книгу:

let ulBook6 = document.querySelectorAll('ul')[5],
    newElem = document.createElement('li');
newElem.textContent = 'Глава 8: За пределами ES6';
ulBook6.appendChild(newElem);

let liBook6 = ulBook6.querySelectorAll('li');
ulBook6.insertBefore(liBook6[10], liBook6[9]);


