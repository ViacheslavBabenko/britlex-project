"use strict"

const header = document.querySelector(".header-page");

window.addEventListener("scroll", () => {
  let scrollDistance = window.scrollY;
  if (scrollDistance >= 75) {
    header.classList.add("header-page--fixed");

  } else header.classList.remove("header-page--fixed");
})

// ---------------------------------------------------------------------------------------------------------------------------

const burgerIcon = document.querySelector(".burger-icon");
const bugerIconLines= document.querySelectorAll(".burger-icon__line");
const burgerMenuLinks = document.querySelectorAll("header-page__menu--item");
const menu = document.querySelector(".header-page__menu");
const body = document.querySelector(".body-page");

function changeBurgerIcon () {
    bugerIconLines.forEach((element) => {
        element.classList.toggle("burger-icon__line--active");
    })
}

burgerIcon.addEventListener("click", () =>{
    changeBurgerIcon ();
    menu.classList.toggle("header-page__menu--active");
    body.classList.toggle("body-page__no-scroll")

})

document.addEventListener("click", (event) => {
  let target = event.target;
  let headerMenu = target == menu || menu.contains(target);
  let burger = target == burgerIcon || target.closest(".burger-icon");
  let headerMenuActive = target.classList.contains('header-page__menu--link');

  if (headerMenu && !burger && !headerMenuActive && window.screen.availWidth < 993) {
      menu.classList.toggle("header-page__menu--active");
      changeBurgerIcon ();
      body.classList.toggle("body-page__no-scroll");
  } else if (headerMenuActive && window.screen.availWidth < 993){
      menu.classList.remove("header-page__menu--active");
      changeBurgerIcon ();
      body.classList.remove("body-page__no-scroll");
  }
})

window.addEventListener("resize", (event) => {
  if (event.target.screen.availWidth > 993) {
      menu.classList.remove('header-page__menu--active');
      bugerIconLines.forEach((element) => {
          element.classList.remove("burger-icon__line--active");
      })
  }
  if (!menu.classList.contains("header-page__menu--active")) {
  body.classList.remove("body-page__no-scroll");
}
})
