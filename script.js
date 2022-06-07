function mod(n,m) {
  return ((n % m) +m) % m;
}

const slideManager = (id) => {
  const slideshow = document.getElementById(id);
  const leftButton = slideshow.querySelector('#left');
  const rightButton = slideshow.querySelector('#right');
  const slides = slideshow.querySelectorAll('.screenshot');
  let currentScreenshot = 0;

  const hideAndShow = () => {
    slides.forEach ((element, index) => {
      if(index == currentScreenshot) {
        element.classList.remove('hidden');
      } else {
        element.classList.add('hidden');
      };
    });
  };

  const nextScreenshot = () => {
    currentScreenshot = mod((currentScreenshot + 1), slides.length);
    hideAndShow();
  }
  const previousScreenshot = () => {
    currentScreenshot = mod((currentScreenshot - 1), slides.length);
    hideAndShow();
  }

  leftButton.addEventListener('click', previousScreenshot);
  rightButton.addEventListener('click', nextScreenshot);
  hideAndShow();

  return {

  }
}
const screenshots = document.querySelectorAll('.screenshots')

screenshots.forEach ((element) => {
  slideManager(element.id);
});

const navToggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('nav');

const toggleMenu = () => {
  navMenu.classList.toggle('off-screen');
  navToggle.classList.toggle('off-screen');
}

navToggle.addEventListener('click', toggleMenu);
navMenu.addEventListener('click', toggleMenu)