let burger = document.getElementsByClassName('menu__box')[0];
let cards = document.getElementsByClassName('card');

function getClose() {
    burger.classList.toggle('hide');
    for(let i = 0; i < cards.length; i++) {
        cards[i].classList.toggle('card-hide');
    }
}
let array = [];

 array = JSON.parse(localStorage.getItem("items"));
 console.log(array[0]);
console.log(array[1]);
console.log(array[2]);