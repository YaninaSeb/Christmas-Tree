import '../main/home_page.css';
import { AllPages } from '../../options';

const btnPlay = <HTMLElement>document.querySelector('.btn-play-game');
const btnHome = <HTMLElement>document.querySelector('.link-to_page-home');
const btnToys = <HTMLElement>document.querySelector('.link-to_page_toys');
const btnTree = <HTMLElement>document.querySelector('.link-to_page_trees');
const pageHome = <HTMLElement>document.querySelector('.home-page'); 
const pageToys = <HTMLElement>document.querySelector('.setting-page'); 
const pageTree = <HTMLElement>document.querySelector('.tree-page'); 

const pages: AllPages = {
  home: { 
    button: btnHome,
    page: pageHome,
  },
  toys: {
    button: btnToys,
    page: pageToys,
  },
  tree: {
    button: btnTree,
    page: pageTree,
  },
};

const arrPages: Array<keyof AllPages> = [];
Object.keys(pages).forEach((elem) => {
  arrPages.push(elem as keyof AllPages);
});

arrPages.forEach((activePage) => {
  pages[activePage].button.addEventListener('click', () => {
    pages[activePage].page.classList.remove('hide');

    arrPages.filter((item) => item != activePage).forEach((otherPage) => {
      pages[otherPage].page.classList.add('hide');
    });
  });
});

btnPlay.addEventListener('click', () => {
  pageHome.classList.add('hide');
  pageToys.classList.remove('hide');
});
