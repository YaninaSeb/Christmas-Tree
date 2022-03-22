import noUiSlider, { target } from 'nouislider';
import 'nouislider/dist/nouislider.css';

const slider = <target>document.getElementById('count_slider');
const outputMinus = <HTMLTemplateElement>document.querySelector('.count_minus'); 
const outputPlus = <HTMLTemplateElement>document.querySelector('.count_plus'); 
const sliderYear = <target>document.getElementById('count-year_slider');
const outputMinusYear = <HTMLTemplateElement>document.querySelector('.count-year_minus'); 
const outputPlusYear = <HTMLTemplateElement>document.querySelector('.count-year_plus'); 

noUiSlider.create(slider, {
  start: [0, 12],
  connect: true,
  range: {
    'min': 1,
    'max': 12
  },
  step: 1,
  orientation: 'horizontal'
});

slider.noUiSlider?.on('update', () => {
  const outputValueCount = <string[] | null>slider.noUiSlider?.get();
  if (outputValueCount === null) {
    outputMinus.textContent = '1';
    outputPlus.textContent = '12';
  } else if (outputValueCount) {
    outputMinus.textContent = parseInt(outputValueCount[0]).toString();
    outputPlus.textContent = parseInt(outputValueCount[1]).toString();
  }
});

noUiSlider.create(sliderYear, {
  start: [1940, 2020],
  connect: true,
  range: {
    'min': 1940,
    'max': 2020
  },
  step: 10,
  orientation: 'horizontal'
});

sliderYear.noUiSlider?.on('update', () => {
  const outputValueYear = <string[] | null>sliderYear.noUiSlider?.get();
  if (outputValueYear === null) {
    outputMinusYear.textContent = '1940';
    outputPlusYear.textContent = '2020';
  } else if (outputValueYear) {
    outputMinusYear.textContent = parseInt(outputValueYear[0]).toString();
    outputPlusYear.textContent = parseInt(outputValueYear[1]).toString();
  }
});
