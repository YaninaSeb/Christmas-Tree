const tree = <HTMLImageElement>document.querySelector('.main-tree');
const bgTree = <HTMLDivElement>document.querySelector('.container-tree');

const allTrees = <HTMLDivElement>document.querySelector('.container-type_trees');
allTrees.addEventListener('click', (e: Event) => {
  const elem = e.target as HTMLElement;
  tree.src = `./assets/tree/${elem.dataset.num_tree}.png`;
} );

const ALL_BG = document.querySelector('.container-background') as HTMLElement;
ALL_BG.addEventListener('click', (e: Event) => {
  const elem = e.target as HTMLElement;
  bgTree.style.backgroundImage = `url(./assets/bg/${elem.dataset.num_background}.jpg)`;
} );
