import '../tree/tree_page.css';
import data from '../../pages/toys/data';
import { ARRAY_ELECT_CARDS } from '../toys/cards';

const CONTAINER_ELECT_TOYS = <HTMLDivElement>document.querySelector('.container-elect_toys');
const defaultCountToys = 20;
const defaultArrToys: string[] = [];
for (let i = 1; i <= defaultCountToys; i++) {
  defaultArrToys.push((i).toString());
}

export function createElectCard(): void {
  let newArrayToys = ARRAY_ELECT_CARDS;
  CONTAINER_ELECT_TOYS.textContent = '';

  if (ARRAY_ELECT_CARDS.length == 0) {
    newArrayToys = defaultArrToys;
  }

  newArrayToys.forEach( (elem) => {
    const countToys: string = data[Number(elem) - 1].count;
    const electToys: HTMLDivElement = document.createElement('div');
    electToys.classList.add('toy_on_tree');
    electToys.setAttribute('data-num-toys', `${elem}`);

    for (let i = 0; i < Number(countToys); i++) {
      const image = <HTMLImageElement>document.createElement('img');
      image.classList.add('img-toy_on_tree');
      image.setAttribute('id', `${elem}-${i}`);
      image.setAttribute('draggable', 'true');
      image.setAttribute('src', `./assets/toys/${elem}.png`);
      electToys.appendChild(image);
    }

    const electToysCount: HTMLParagraphElement = document.createElement('p');
    electToysCount.classList.add('count-toy_on_tree');
    electToysCount.textContent = `${countToys}`;

    electToys.appendChild(electToysCount);
    
    CONTAINER_ELECT_TOYS.appendChild(electToys);
  });
}
