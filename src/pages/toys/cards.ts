import '../toys/toys_page.css';
import { DataCards } from '../../options';
import { createElectCard } from '../tree/elect_toys';
import { dragAndDropImg } from '../tree/drag_and_drop_toys';

export const ARRAY_ELECT_CARDS: string[] = [];
const countElectCard = <HTMLSpanElement>document.querySelector('.count-elect_card');
const alertElectToys = <HTMLDivElement>document.querySelector('.alert-elect_toys');
const alertText = <HTMLDivElement>document.querySelector('.alert-text');
const treeArea = <HTMLAreaElement>document.querySelector('area');
const maxCountToys = 20;
const containerBalls = <HTMLDivElement>document.querySelector('.container-balls');

export function createCards(data: DataCards[]): void {
  containerBalls.textContent = '';
  for (let i = 0; i < data.length; i++) {
    containerBalls.innerHTML +=
      `<div class="card" data-num="${data[i].num}">
      <div class="title-card">${data[i].name}</div>
      <div class="img-card">
        <img class="img-toys" src="assets/toys/${data[i].num}.png" alt="toys">
        <div class="marker"></div>
      </div>
      <div class="description-card">
        <p class="description-card_count">Количество: <span>${data[i].count}</span></p>
        <p class="description-card_year">Год покупки: <span>${data[i].year}</span></p>
        <p class="description-card_form">Форма: <span>${data[i].shape}</span></p>
        <p class="description-card_color">Цвет: <span>${data[i].color}</span></p>
        <p class="description-card_size">Размер: <span>${data[i].size}</span></p>
        <p class="description-card_favorite">Любимая: <span>${data[i].favorite ? 'да' : 'нет'}</span></p>
      </div>
      </div>`;
  }
  createElectCard();
  dragAndDropImg();

  const allCard: NodeListOf<Element> = document.querySelectorAll('.card');
  allCard.forEach((elem) => {
    if (ARRAY_ELECT_CARDS.includes(elem.getAttribute('data-num') as string)) {
      elem.classList.add('active');
    }
  });
}

containerBalls.addEventListener('click', (e: Event) => {
  const elem = e.target as HTMLElement;
  const target = elem.closest('.card') as HTMLElement;
  
  if (target.classList.contains('active')) {
    target.classList.remove('active');
    const indexElem = ARRAY_ELECT_CARDS.indexOf(target.getAttribute('data-num') as string);
    ARRAY_ELECT_CARDS.splice(indexElem, 1);
    countElectCard.textContent = (ARRAY_ELECT_CARDS.length).toString();
  } else if (ARRAY_ELECT_CARDS.length == maxCountToys) {
    alertText.innerText = 'Извините, \n все слоты заполнены';
    alertElectToys.style.display = 'block';
    } else {
      target.classList.add('active');
      ARRAY_ELECT_CARDS.push(target.getAttribute('data-num') as string);
      countElectCard.textContent = (ARRAY_ELECT_CARDS.length).toString();
      }
  createElectCard();
  treeArea.textContent = '';
  dragAndDropImg();
});

alertElectToys.addEventListener('click', () => {
  alertElectToys.style.display = 'none';
});
