let openMenuButton = document.querySelector('.header__menu')
let modalMenuWindow = document.querySelector('.modal-menu')

let closeMenuButton = document.querySelector('.close') 

console.log(openMenuButton);
console.log(modalMenuWindow);
console.log(closeMenuButton);


openMenuButton.addEventListener('click', (e) => {
    modalMenuWindow.classList.add('active')
})

closeMenuButton.addEventListener('click', (e) => {
    modalMenuWindow.classList.remove('active')
})