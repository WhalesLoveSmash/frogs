/*
The range(..) function takes a number as its first argument, representing the first number in a desired range of numbers. 
The second argument is also a number representing the end of the desired range (inclusive). If the second argument is omitted,
then another function should be returned that expects that argument.
Unlike Python there is no built in range method
So This problem is essentally reverse engerning range but overcpmlicating it by
using two functions and closures to let them comunicate
*/



//first we will do the non closure only one function super easy version
function range(start, end) {
    const dateRange = [];
    for (let i = start; i <= end; i++) {
        dateRange.push(i);
    }
    return dateRange;
}

console.log(range(5, 9));
//then we have to do the actual problem of doing this in two problems with closures






















/*
Practicing Closure
Now let's practice with closure (Chapter 4, Pillar 1).

range(3,3);    // [3]
range(3,8);    // [3,4,5,6,7,8]
range(3,0);    // []

var start3 = range(3);
var start4 = range(4);

start3(3);     // [3]
start3(8);     // [3,4,5,6,7,8]
start3(0);     // []
*/