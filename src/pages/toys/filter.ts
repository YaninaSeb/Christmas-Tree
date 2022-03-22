import data from './data';
import { target } from 'nouislider';
import { createCards } from './cards';
import { DataCards } from '../../options';
import { DataFilters } from '../../options';

const allFilters: DataFilters = {
  ball: false,
  bell: false,
  pinecone: false,
  snowflake: false,
  figure: false,
  white: false,
  yellow: false,
  red: false,
  blue: false,
  green: false,
  big: false,
  medium: false,
  small: false,
  favorite: false,
  countStart: 1,
  countEnd: 12,
  yearStart: 1940,
  yearEnd: 2020,
};

function checkItemShapes(elem: DataCards): boolean {
  if (!allFilters.ball && !allFilters.bell && !allFilters.pinecone && !allFilters.snowflake && !allFilters.figure)
    return true;

  return ((elem.shape == 'шар' && allFilters.ball) || (elem.shape == 'колокольчик' && allFilters.bell) ||
  (elem.shape == 'шишка' && allFilters.pinecone) || (elem.shape == 'снежинка' && allFilters.snowflake) ||
  (elem.shape == 'фигурка' && allFilters.figure));
}

function checkItemSize(elem: DataCards): boolean {
  if (!allFilters.big && !allFilters.medium && !allFilters.small)
    return true;

  return ((elem.size == 'большой' && allFilters.big) || (elem.size == 'средний' && allFilters.medium) ||
  (elem.size == 'малый' && allFilters.small));
}

function checkItemColors(elem: DataCards): boolean {
  if (!allFilters.white && !allFilters.yellow && !allFilters.red && !allFilters.blue && !allFilters.green)
    return true;

  return ((elem.color == 'белый' && allFilters.white) || (elem.color == 'желтый' && allFilters.yellow) ||
  (elem.color == 'красный' && allFilters.red) || (elem.color == 'синий' && allFilters.blue) ||
  (elem.color == 'зелёный' && allFilters.green));
}

function checkItemFavorite(elem: DataCards): boolean {
  if (!allFilters.favorite)
    return true;

  return (elem.favorite && allFilters.favorite);
}

function checkItemCount(elem: DataCards): boolean {
  return ( Number(elem.count) >= allFilters.countStart && Number(elem.count) <= allFilters.countEnd);
}

function checkItemYear(elem: DataCards): boolean {
  return ( Number(elem.year) >= allFilters.yearStart && Number(elem.year) <= allFilters.yearEnd);
}

const sortCard: NodeListOf<HTMLOptionElement> = document.querySelectorAll('option');
function checkItemSorting() {
  let functionSort;
  sortCard.forEach((item) => {
    if (item.selected) {
      const itemSelected: string = item.value;

      switch (itemSelected) {
        case 'sorting-name-to_max' :
          functionSort = function (a: DataCards, b: DataCards) {
            return a.name > b.name ? 1 : -1;
          };
          break;
        case 'sorting-name-to_min' :
          functionSort = function (a: DataCards, b: DataCards) {
            return a.name < b.name ? 1 : -1;
          };
          break;
        case 'sorting-count-to_max' :
          functionSort = function (a: DataCards, b: DataCards) {
            return Number(a.count) - Number(b.count);
          };
          break;
        case 'sorting-count-to_min' :
          functionSort = function (a: DataCards, b: DataCards) {
            return Number(b.count) - Number(a.count);
          };
          break;
      }
    }
  });
  return functionSort;
}

const inputSearch = <HTMLInputElement>document.querySelector('.search');
const alertElectToys = <HTMLDivElement>document.querySelector('.alert-elect_toys');
const alertText = <HTMLDivElement>document.querySelector('.alert-text');

function checkItemSearch(elem: DataCards) {
  const valueSearch: string = inputSearch.value;
  const regExp = new RegExp(`${valueSearch}`, 'gi');

  if (regExp.test(elem.name)) {
    return true;
  }
}

function checkAllFilters(): void {
  const filterData = data.filter(checkItemShapes).
                        filter(checkItemColors).
                          filter(checkItemSize).
                            filter(checkItemFavorite).
                              filter(checkItemCount).
                                filter(checkItemYear).
                                  filter(checkItemSearch).
                                    sort(checkItemSorting());
  
  createCards(filterData);

  if (filterData.length === 0 ) {
    alertText.innerText = 'Извините, \n совпадений не обнаружено';
    alertElectToys.style.display = 'block';
  } else {
    alertElectToys.style.display = 'none';
  }
}

inputSearch.addEventListener('input', () => {
  checkAllFilters();
});


const allButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('button');
allButtons.forEach((elem) => {
  elem.addEventListener('click', ()=> {
    elem.classList.toggle('active');
        const attributeBtn = elem.getAttribute('data-filter') as keyof DataFilters;

        if (elem.classList.contains('active')) {
            allFilters[attributeBtn] = true;
        } else {
          allFilters[attributeBtn] = false;
        }

    checkAllFilters();
  });
});

const sliderCount = <target>document.getElementById('count_slider') ;
sliderCount.noUiSlider?.on('update', () => {
  const countStart = <HTMLDivElement>document.querySelector('.count_minus');
  const countEnd = <HTMLDivElement>document.querySelector('.count_plus');

  allFilters.countStart = Number(countStart.textContent);
  allFilters.countEnd = Number(countEnd.textContent);

  checkAllFilters();
});

const sliderYear = <target>document.getElementById('count-year_slider') ;
sliderYear.noUiSlider?.on('update', () => {
  const countYearStart = <HTMLDivElement>document.querySelector('.count-year_minus');
  const countYearEnd = <HTMLDivElement>document.querySelector('.count-year_plus');

  allFilters.yearStart = Number(countYearStart.textContent);
  allFilters.yearEnd = Number(countYearEnd.textContent);

  checkAllFilters();
});

const sorting = <HTMLSelectElement>document.querySelector('.container-sorting');
sorting.addEventListener('change', () => {
  checkAllFilters();
});


const reset = <HTMLDivElement>document.querySelector('.reset-filters');
reset.addEventListener('click', () => {
  allButtons.forEach((elem) => {
    if (elem.classList.contains('active')) {
      elem.click();
    }
  });
  sliderCount.noUiSlider?.reset();
  sliderYear.noUiSlider?.reset();
});
