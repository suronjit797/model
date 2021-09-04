const nav = document.getElementById('nav')
const nav_bars = document.getElementById('nav_bars')
const main_nav = document.getElementById('main_nav')
const close = document.getElementById('close')
const body = document.querySelector('body')
const videoTrigger = document.getElementById('video_trigger')
const videoScreen = document.getElementById('video_screen')
const videoClose = document.getElementById('video_close')


nav_bars.addEventListener('click', () => {
    main_nav.classList.add('show')
    body.style = 'overflow: hidden'
})
close.addEventListener('click', () => {
    main_nav.classList.remove('show')
    body.style = 'overflow: visible'
})

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        nav.classList.add('down')
    } else {
        nav.classList.remove('down')
    
    }
    
})

console.log(window)


// video trigger

videoTrigger.addEventListener('click', () => {
    videoScreen.style = "display: block"
    body.style = 'overflow: hidden'
    nav.classList.remove('down')
})
videoClose.addEventListener('click', () => {
    videoScreen.style = "display: none"
    body.style = 'overflow: visible'
    nav.classList.add('down')
})

console.log(videoTrigger)




// owl carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    responsive: {
        0: {
            items: 1
        }
    }
})