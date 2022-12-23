const imageOne =document.querySelector("#first-img");
const imageTwo =document.querySelector('#second-img');
const imageThree =document.querySelector('#three-img');
const modal =document.querySelector("#modal");
const body =document.querySelector('body');
const firstImg =document.querySelector('#first-hidden');
const secondImg =document.querySelector('#second-hidden');
const threeImg =document.querySelector('#three-hidden');

imageOne.addEventListener('click',function(evt){
    evt.preventDefault();
    modal.classList.remove('modal-none')
    modal.classList.add("modal");
    body.classList.toggle("body-hidden");
    firstImg.classList.toggle("shop-img-active")
    
})
imageTwo.addEventListener('click',function(evt){
    evt.preventDefault();
    modal.classList.remove('modal-none')
    modal.classList.add("modal");
    body.classList.toggle("body-hidden");
    secondImg.classList.toggle("shop-img-active")
    
})
imageThree.addEventListener('click',function(evt){
    evt.preventDefault();
    modal.classList.remove('modal-none')
    modal.classList.add("modal");
    body.classList.toggle("body-hidden");
    threeImg.classList.toggle("shop-img-active")
    
})
modal.addEventListener('click',function(evt){
    if(evt.target.matches("#modal")){
        firstImg.classList.remove('shop-img-active');
        secondImg.classList.remove('shop-img-active');
        threeImg.classList.remove('shop-img-active');
        body.classList.remove('body-hidden')
        modal.classList.remove('modal');
    }
})
