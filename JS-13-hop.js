/*
Do you remember the game of hop?

Get a  number between 2 and 6 from the user(you can use prompt and alert in this practice), then log from 1 to 200 in the console.
It is just like the game of hop, whatever number the user enters, the numbers will be printed accordingly.

Example: If the user enters the number 3, the numbers will be printed like this:
1, 2, hop, 4, 5, hop, 7, 8, hop, 10 ..., 200 
*/
//! Answer:

alert( "Hello for star hop play please press ok button" );
let x = prompt( "please enter a number between 2 and 6" );

if ( x >= 2 && x <= 6 ) {
    let arr = [];
    for ( let i = 1; i <= 200; i++ ) {

        if ( i % x == 0 ) {
            arr.push( "hop" );
        } else {
            arr.push( i );
        }


    }
    console.log( ...arr );
} else {
    console.log( "please refresh page and try to enter correct number between 2 and 6" );


}





