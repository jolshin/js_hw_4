

document.addEventListener('click', (e) => {
    e.preventDefault()

    let tooltips = document.querySelectorAll('div.tooltip_active')
    let target = e.target

    for (let el of tooltips) {
        el.classList.remove('tooltip_active')
    }

    if (target.className === 'has-tooltip') {
        if (target.nextElementSibling){
            let posX = target.getBoundingClientRect().left
            target.nextElementSibling.style.left = posX + 'px'
            target.nextElementSibling.classList.add('tooltip_active')
        }
    }


})