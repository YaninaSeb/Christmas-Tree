const garland = <HTMLDivElement>document.querySelector('.container-garland_on_tree');
const btnGarland = <HTMLDivElement>document.querySelector('.btn-on_garland');

function changeColorGarland(color: string): void {
  garland.textContent = '';

  let countDegTranslateY = 0;
  let numLights = 4;

  for (let i = 0; i < 6; i++){
    const newGarland = <HTMLElement>document.createElement('ul');
    newGarland.classList.add('lightrope');

    countDegTranslateY += 10;
    newGarland.style.transform = `translateY(${countDegTranslateY}vh)`;

    for (let x = - numLights; x <= numLights; x += 2) {
      const lightbulb = <HTMLLIElement>document.createElement('li');
      lightbulb.classList.add(`${color}`);
      lightbulb.style.transform = `translateX(${x}vh) translateY(${( - 0.02) * Math.abs(x * x)}vh)`;
    
      newGarland.appendChild(lightbulb);
    }
    numLights += 3;
    garland.appendChild(newGarland);
  }
}

const containerBtnColor = <HTMLDivElement>document.querySelector('.container-btn-garland');
containerBtnColor.addEventListener('click', (e: Event) => {
  const elem = e.target as HTMLElement;
  const color = elem.dataset.color;
  changeColorGarland(`${color}`);
  if (!btnGarland.classList.contains('active')) {
    btnGarland.classList.add('active');
  }
});

btnGarland.addEventListener('click', () => {
  if (!btnGarland.classList.contains('active')) {
    btnGarland.classList.add('active');
    changeColorGarland('multicolor');
  } else if (btnGarland.classList.contains('active')){
    btnGarland.classList.remove('active');
    garland.textContent = '';
  }
});
