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
