const btnSnow = <HTMLDivElement>document.querySelector('.snow');
const containerTree = <HTMLDivElement>document.querySelector('.container-tree');

btnSnow.addEventListener('click', () => {
  btnSnow.classList.toggle('active-snow');
  
  const timerId = setInterval(() => {
    if (btnSnow.classList.contains('active-snow')) {
      const snowFlake = <HTMLElement>document.createElement('i');
      snowFlake.classList.add('fas');
      snowFlake.classList.add('fa-snowflake');
      snowFlake.style.left = window.innerWidth / 4 + Math.random() * (containerTree.offsetWidth) + 50 + 'px';
      snowFlake.style.animationDuration = Math.random() * 3 + 2 + 's';
      snowFlake.style.opacity = (Math.random()).toString();
      snowFlake.style.fontSize = Math.random() * 10 + 10 + 'px';
      containerTree.appendChild(snowFlake);

      setTimeout(() => {
        snowFlake.remove();
      }, 5000);
    } else {
      clearInterval(timerId);
    }
  }, 50);
});

const btnAudio = <HTMLDivElement>document.querySelector('.audio');
const audio2 = new Audio();
audio2.src = './assets/audio/audio.mp3';

btnAudio.addEventListener('click', () => {
  if (btnAudio.classList.contains('audio-active')) {
    audio2.pause();
    btnAudio.classList.remove('audio-active');
  } else {
    audio2.play();
    btnAudio.classList.add('audio-active');
  }
});
