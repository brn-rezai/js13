// ? Question-1:select section counter by class name(.cards__card__img__icon) and save in variable "counterEl":
// !Answer:

const counterEl = document.getElementsByClassName( "cards__card__img__icon" );
console.log( counterEl );


// ? Question-2:select item counter by id(#counter) and save in variable "counter":
// !Answer:
const counter = document.getElementById( "counter" );
console.log( counter );


// ? Question-3:select section (.cards) and save in variable "card":
// !Answer:

const card = document.querySelector( ".cards" );
console.log( card );


// ? Question-4:select section (.cards__card) and save in variable "cards":
// !Answer:

const cards = document.querySelector( ".cards__card" );
console.log( cards );


// ? Question-5:select button in class cards_card_footer and save in variable "btnEl":
// !Answer

const btnEl = document.querySelector( ".cards__card__footer__btn button" );
console.log( btnEl );


// ? Question-6:select the img that has attribute "man" and show in console:
// !Answer
const images = document.querySelectorAll( "img" );
const imageMan = [];
for ( let el of images ) {
    if ( el.alt == "man" ) {
        imageMan.push( el );
    }
}
console.log( imageMan );


console.log( 'hello' );


