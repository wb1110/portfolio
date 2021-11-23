const toggleButton = document.querySelector('#toggle');
const navigationExtension = document.querySelector('.navigationExtension');

toggleButton.addEventListener('click', () => {
    console.log('working');
    navigationExtension.classList.toggle('active')
});