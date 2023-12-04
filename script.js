let dropdown = document.querySelector(".header__dropdown")
let sibling = dropdown.nextElementSibling;

window.addEventListener("resize", () => {
    if (sibling.classList.contains("header__menu--visible")) {
        sibling.classList.remove('header__menu--visible')
    }

    let optionSelected = document.querySelector(".options__option--selected");
    
    underline.style.left = `${optionSelected.offsetLeft}px`;
    underline.style.width = `${optionSelected.offsetWidth}px`;


})

dropdown.addEventListener("click", () => {

    if (sibling.classList.contains("header__menu--visible")) {
        sibling.classList.remove('header__menu--visible')
    } else {
        sibling.classList.add('header__menu--visible')
    }
})