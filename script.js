let show = true
const content = document.querySelector('.content')
const toggle = document.querySelector('.toggle')


toggle.addEventListener('click', () => {

    content.classList.toggle ('on', show)
    show = !show
    
})