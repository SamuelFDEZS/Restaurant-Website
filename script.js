let dropdown = document.querySelector(".header__dropdown")
let sibling = dropdown.nextElementSibling;
let menuOptions = Array.from(document.querySelectorAll(".options__option"));
let underline = document.querySelector(".meals__underline");

menuOptions.forEach(option => {
    option.addEventListener("click", () => {
        let optionLeft = option.offsetLeft;
        let optionWidth = option.offsetWidth;
        menuOptions.forEach(option => {
            option.classList.remove('options__option--selected')
        })

        option.classList.add('options__option--selected')

        underline.style.left = `${optionLeft}px`;
        underline.style.width = `${optionWidth}px`;
    })
})


window.addEventListener("resize", () => {
    if(sibling.classList.contains("header__menu--visible")){
        sibling.classList.remove('header__menu--visible')
    }
})

dropdown.addEventListener("click", () => {

    if(sibling.classList.contains("header__menu--visible")){
        sibling.classList.remove('header__menu--visible')
    } else {
        sibling.classList.add('header__menu--visible')
    }
})