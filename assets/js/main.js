const sliderEl = document.querySelector('.slider')
const slideEl = document.querySelectorAll('.slide')
const leftBtn = document.querySelector('.left')
const  rightBtn = document.querySelector('.right')
let currentIndex = 0

function showSlide(index){
    const offset = -100 * index
    sliderEl.style.transform = `translateX(${offset}%)`
}

function goleft() {
    currentIndex = (currentIndex + 1) % slideEl.length
    showSlide(currentIndex)
}

function goright(){
    currentIndex = (currentIndex - 1 + slideEl.length) % slideEl.length
    showSlide(currentIndex)
}

leftBtn.addEventListener('click', goleft)
rightBtn.addEventListener('click', goright)

showSlide(currentIndex)