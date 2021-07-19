function slidesPlugin(activeSlide) {
  const slides = document.querySelectorAll('.slide');
  const CLASS_NAME = 'active';
  if (typeof activeSlide !== 'number' || activeSlide < 0 || activeSlide >= slides.length) {
    activeSlide = Math.round(Math.random() * (slides.length - 1));
  }
  slides[activeSlide].classList.add(CLASS_NAME);

  for (let slide of slides) {
    slide.addEventListener('click', slideClick);
  }

  function clearActiveClasses() {
    slides.forEach(slide => slide.classList.remove(CLASS_NAME));
  }

  function slideClick(event) {
    clearActiveClasses();
    let slide;
    for (let node of event.path) {
      if (node.classList.contains('slide')) {
        slide = node;
        break;
      }
    }
    slide.classList.add(CLASS_NAME);
  }
}

slidesPlugin();
