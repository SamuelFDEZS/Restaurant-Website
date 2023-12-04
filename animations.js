let menuOptions = Array.from(document.querySelectorAll(".options__option"));
let underline = document.querySelector(".meals__underline");
let sliders = Array.from(document.querySelectorAll(".menu__sliders article"));
let optionSelected = document.querySelector(".options__option--selected");

// GSAP

const showMeals = (meal) => {
    const selectedSlider = document.querySelector(`.sliders__${meal}`)

    sliders.forEach(slider => {
        if(slider != selectedSlider) {
            gsap.to(slider, {
                left: '200%',
                duration: 0.5,
                ease: "ease-in-out",
            });
        }
    })
    if (selectedSlider) {
        const tl = gsap.timeline();
        tl.to(selectedSlider, {
            left: '50%',
            top: '50%',
            xPercent: -50,
            yPercent: -50,
            transformOrigin: "center center",
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "ease-in-out",
        });
    }
}


underline.style.left = `${optionSelected.offsetLeft}px`;
underline.style.width = `${optionSelected.offsetWidth}px`;



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

        const mealType = option.getAttribute("data-meal")
        console.log(mealType)
        showMeals(mealType)

    })

})



//Smooth scroll
const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)