let dropdown = document.querySelector(".header__dropdown")

dropdown.addEventListener("click", () => {
    let sibling = dropdown.nextElementSibling
    if(sibling.classList.contains("header__menu--visible")){
        sibling.classList.remove('header__menu--visible')
    } else {
        sibling.classList.add('header__menu--visible')
    }
    console.log(sibling)
})


const dropdownHandler = () => {
    let sibling = dropdown.nextElementSibling
    if(sibling.classList.contains("header__menu--visible")){
        sibling.classList.remove('header__menu--visible')
    } else {
        sibling.classList.add('header__menu--visible')
    }
}

