const arrow = document.querySelectorAll('.accordion__question')

arrow.forEach(item => {
    item.addEventListener('click', () => {
        // add rotation to the arrow button
        item.classList.toggle('collapsed')
        // display none if collapse-open
        item.nextElementSibling.classList.toggle('collapse')
    })
})
