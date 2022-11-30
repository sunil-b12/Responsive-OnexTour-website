/* The above code is adding an event listener to the hamburger.*/
const hamburger = document.querySelector(".hamburger");
const primaryNav = document.querySelector(".primary-navigation")


/* Adding an event listener to the hamburger. When the hamburger is clicked, it will toggle the class
open on the primary navigation. It will also toggle the class toggle on the hamburger. */
hamburger.addEventListener('click', ()=>{
    primaryNav.classList.toggle("open");
    hamburger.classList.toggle("toggle");
})


// Carousel Image

const slider = document.querySelector(".carousel-slider");
const slides = Array.from(slider.children);
const rightBtn = document.querySelector(".right-btn")
const leftBtn = document.querySelector(".left-btn")


/* Getting the width of the first slide. */
const slidewidth = slides[0].getBoundingClientRect().width;

/**
 * For each slide, set the left position to the slide width multiplied by the index.
 * @param slides - the array of slides
 * @param index - the index of the current slide
 */
const setSlidePosition = (slides, index) =>{
    slides.style.left = slidewidth * index + 'px';
}
slides.forEach(setSlidePosition);

/**
 * The function moveToSlide takes three arguments: slider, currentSlide, and targetSlide. It then sets
 * the transform property of the slider to the left property of the targetSlide. It then removes the
 * class current-slide from the currentSlide and adds the class current-slide to the targetSlide.
 * @param slider - the slider element
 * @param currentSlide - The current slide that is being displayed.
 * @param tragetSlide - The slide that you want to move to.
 */

const moveToSlide = (slider, currentSlide, tragetSlide) => {
    slider.style.transform = 'translateX(-'+ tragetSlide.style.left +')'
    currentSlide.classList.remove('current-slide')
    tragetSlide.classList.add("current-slide")
}
/* Adding an event listener to the right button. When the button is clicked, it will get the current
slide and the next slide. It will then move to the next slide. */


rightBtn.addEventListener('click', ()=>{
    const currentSlide = slider.querySelector(".current-slide")
    const nextSlide = currentSlide.nextElementSibling;

    moveToSlide(slider, currentSlide, nextSlide)
})

/* Adding an event listener to the left button. When the button is clicked, it will get the current
slide and the previous slide. It will then move to the previous slide. */

leftBtn.addEventListener('click', ()=>{
    const currentSlide = slider.querySelector(".current-slide")
    const pervSlide = currentSlide.previousElementSibling;

    moveToSlide(slider, currentSlide, pervSlide)
})

