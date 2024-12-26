/*
Create a sequence of numbers of length 10.
so that each number is created by the sum of the previous two numbers multiplied by 2.
- - The first two numbers must be a random number between 0 and 15.
for example :
num1 = 2
num2 = 3
2, 3, 10, 26,...
*/

//! Answer:

num1 = parseInt( Math.random() * 16 );
num2 = parseInt( Math.random() * 16 );

const d = [ num1, num2 ];

for ( let i = 2; i < 10; i++ ) {
    d.push( ( d[ i - 2 ] + d[ i - 1 ] ) * 2 );
}

console.log( d.join() );



