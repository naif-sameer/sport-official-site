const log = (...param) => console.log(...param);

/**
 * @param {String} element
 * @return {HTMLElement}
 */
const el = (element) => document.querySelector(element);

/**
 * @param {String} elements
 * @return {HTMLElement}
 */
const els = (elements) => document.querySelectorAll(elements);

function superSlider({ slider, sliderItems, sliderBtns }) {
  let slideWidth = 0;
  let slideItemWidth = sliderItems[0].clientWidth;

  sliderBtns[0].addEventListener('click', () => {
    addActiveClassToBtn(0);
    slideWidth = 0;
    slider.style.transform = `translateX(${slideWidth}px)`;
  });

  sliderBtns[1].addEventListener('click', () => {
    addActiveClassToBtn(1);

    slideWidth = slideItemWidth + 5;
    slider.style.transform = `translateX(-${slideWidth}px)`;
  });

  sliderBtns[2].addEventListener('click', () => {
    addActiveClassToBtn(2);

    slideWidth = slideItemWidth * 2 + 10;
    slider.style.transform = `translateX(-${slideWidth}px)`;
  });

  const addActiveClassToBtn = (index) => {
    sliderBtns.forEach((item) => item.classList.remove('active'));

    sliderBtns[index].classList.add('active');
  };
}

// hero slider
superSlider({
  slider: el('.hero .c-slider'),
  sliderItems: els('.hero .c-slider-item'),
  sliderBtns: els('.hero-slider-btns div'),
});

// last news slider
superSlider({
  slider: el('.last-news .c-slider'),
  sliderItems: els('.last-news .c-slider-item'),
  sliderBtns: els('.last-news .slider-btns div'),
});

// -------------------------------------------
// -------------------------------------------
// -------------------------------------------
// -------------------------------------------
// -------------------------------------------
// -------------------------------------------
// -------------------------------------------
// -------------------------------------------
// -------------------------------------------
// -------------------------------------------
// -------------------------------------------
// -------------------------------------------
// -------------------------------------------
// -------------------------------------------
// const slider = document.querySelector('.c-slider'),
//   slides = Array.from(document.querySelectorAll('.c-slider-item'));

// let isDragging = false,
//   startPos = 0,
//   currentTranslate = 0,
//   prevTranslate = 0,
//   animationID,
//   currentIndex = 0;

// slides.forEach((slide, index) => {
//   const slideImage = slide.querySelector('img');
//   // disable default image drag
//   slideImage.addEventListener('dragstart', (e) => e.preventDefault());
//   // touch events
//   slide.addEventListener('touchstart', touchStart(index));
//   slide.addEventListener('touchend', touchEnd);
//   slide.addEventListener('touchmove', touchMove);
//   // mouse events
//   slide.addEventListener('mousedown', touchStart(index));
//   slide.addEventListener('mouseup', touchEnd);
//   slide.addEventListener('mousemove', touchMove);
//   slide.addEventListener('mouseleave', touchEnd);
// });

// // make responsive to viewport changes
// window.addEventListener('resize', setPositionByIndex);

// // prevent menu popup on long press
// window.oncontextmenu = function (event) {
//   event.preventDefault();
//   event.stopPropagation();
//   return false;
// };

// function getPositionX(event) {
//   return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
// }

// function touchStart(index) {
//   return function (event) {
//     currentIndex = index;
//     startPos = getPositionX(event);
//     isDragging = true;
//     animationID = requestAnimationFrame(animation);
//     slider.classList.add('grabbing');
//   };
// }

// function touchMove(event) {
//   if (isDragging) {
//     const currentPosition = getPositionX(event);
//     currentTranslate = prevTranslate + currentPosition - startPos;
//   }
// }

// function touchEnd() {
//   cancelAnimationFrame(animationID);
//   isDragging = false;
//   const movedBy = currentTranslate - prevTranslate;

//   // if moved enough negative then snap to next slide if there is one
//   if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1;

//   // if moved enough positive then snap to previous slide if there is one
//   if (movedBy > 100 && currentIndex > 0) currentIndex -= 1;

//   setPositionByIndex();

//   slider.classList.remove('grabbing');
// }

// function animation() {
//   setSliderPosition();
//   if (isDragging) requestAnimationFrame(animation);
// }

// function setPositionByIndex() {
//   currentTranslate = currentIndex * -window.innerWidth;
//   prevTranslate = currentTranslate;
//   setSliderPosition();
// }

// function setSliderPosition() {
//   slider.style.transform = `translateX(${currentTranslate}px)`;
// }
