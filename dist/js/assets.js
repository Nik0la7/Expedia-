const burger = document.querySelector('.burger')
const container = document.querySelector('.wrapper')
const screens = document.querySelectorAll('.screen')

burger.addEventListener('click', () => {
    container.classList.toggle('active')
})


function replaceBg(id) {
    const bg = document.getElementById(id)
    screens.forEach(screen => {
        screen.style.display = 'none'
    })
    bg.style.display = 'block'
}

function changeBg() {
    const links = document.querySelectorAll('.link')

    links.forEach((link, index) => {
        link.addEventListener('mouseenter', e => {
            e.preventDefault()
            replaceBg(e.target.dataset.link)

        })
        link.addEventListener('click', e => {
            e.preventDefault()
            container.classList.toggle('active')
        })
    })
    screens.forEach( screen => {
        screen.style.display = 'none'
        screens[0].style.display='block'
    })
}
changeBg()
const tabsButton = document.querySelectorAll('.tabLinks');
const tabsDescription = document.querySelectorAll('.tabContent');

tabsButton.forEach((tabElem) => {
    tabElem.addEventListener('click', (event) => {
        tabsButton.forEach((btn) => {
            if(btn === event.target) {
                btn.classList.add('is-active')
            } else {
                btn.classList.remove('is-active')
            }            
        })
        tabsDescription.forEach((elem) => {
            if(elem.dataset.tab === event.target.dataset.tab) {
                elem.classList.add('is-active')
            } else {
                elem.classList.remove('is-active')
            }  
        })
    })
})

