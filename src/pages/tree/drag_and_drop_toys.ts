export function dragAndDropImg(): void {
  const ZONE_TREE = document.querySelector('area') as HTMLAreaElement;
  const ZONE_TOYS = document.querySelector('.container-elect_toys') as HTMLElement;
  const TOYS = document.querySelectorAll('.img-toy_on_tree') as NodeListOf<Element>;

  function overDrop(event: DragEvent): void { //элемент перетаскиваем над зоной-целью
    event.preventDefault();
  }
  ZONE_TREE.addEventListener('dragover', overDrop);
  ZONE_TOYS.addEventListener('dragover', overDrop);

  function dragStart(event: DragEvent): void { // начинаем перетаскивать элемент
    const ELEM = event.target as HTMLElement;
    (event.dataTransfer as DataTransfer).setData('id', ELEM.id);
  }

  TOYS.forEach((e) => {
    (e as HTMLElement).addEventListener('dragstart', dragStart);
  });

  function drop(event: DragEvent): void { //элемент брошен в зону елки
    const ZONE = event.target as HTMLElement;
    const ELEM_ID = (event.dataTransfer as DataTransfer).getData('id');
    const IMG_TOYS = document.getElementById(`${ELEM_ID}`) as HTMLElement;
    const IMG_TOYS_PARENT = IMG_TOYS.parentNode as HTMLElement;
    ZONE.appendChild(IMG_TOYS);

    (IMG_TOYS_PARENT.lastChild as HTMLElement).textContent = `${IMG_TOYS_PARENT.children.length - 1}`;

    IMG_TOYS.style.position = 'absolute';
    IMG_TOYS.style.top = `${event.clientY}px`;
    IMG_TOYS.style.left = `${event.clientX}px`;
  }
  ZONE_TREE.addEventListener('drop', drop);
  ZONE_TOYS.addEventListener('drop', drop);
}
