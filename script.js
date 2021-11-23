const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navigationExtension = document.getElementsByClassName('navigationExtension')[0]

toggleButton.addEventListener('click', () => {
    navigationExtension.classList.toggle('active')
})