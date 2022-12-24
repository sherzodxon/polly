const hambButton = document.querySelector("#hamb-button");
const nav=document.querySelector(".header-nav");
const shops=document.querySelector(".header-button-wrapper");
const headerModal=document.querySelector(".header-modal");
const navModal =document.querySelector(".header-nav-modal");
const hmBody  = document.querySelector("body")

hambButton.addEventListener("click",function(){
    hambButton.classList.toggle("header-hamburger-close-button");
    nav.classList.toggle("header-nav--active");
    shops.classList.toggle("header-button-wrapper--active");
    headerModal.classList.toggle("header-modal--active");
    navModal.classList.toggle("header-nav-modal--active");
    hmBody.classList.remove("body")
    hmBody.classList.toggle("body-hidden");
   
});
headerModal.addEventListener("click",function (evt) {
    if(evt.target.matches(".header-modal--active")){
        headerModal.classList.remove("header-modal--active");
        hambButton.classList.remove("header-hamburger-close-button");
        nav.classList.remove("header-nav--active");
        shops.classList.remove("header-button-wrapper--active");
        navModal.classList.remove("header-nav-modal--active");
        hmBody.classList.remove("body-hidden")
    }
})