/*
The range(..) function takes a number as its first argument, representing the first number in a desired range of numbers. 
The second argument is also a number representing the end of the desired range (inclusive). If the second argument is omitted,
then another function should be returned that expects that argument.
Unlike Python there is no built in range method
So This problem is essentally reverse engerning range but overcomplicating it by
using two functions and closures to let them comunicate
*/

//then we have to do the actual problem of doing this in two problems with closures
/*
Build the Mental Model
So we need:
A function that behaves differently depending on whether it receives 1 or 2 arguments.
If it gets just one argument, it returns another function.
That inner function has access to start from the outer one — this is the closure part.
*/

function range(start, end) {
    if (arguments.length === 1) {
        return function(end) {
            const dateRange = [];
            for (let i = start; i <= end; i++) {
                dateRange.push(i);
}
return dateRange;

        };
    }

    else {
        const dateRange = []
        for (let i = start; i <= end; i++) {
            dateRange.push(i);
        }
        return dateRange
    }
}

let startAt3 = range(3);

console.log(startAt3(6));  // should print [3, 4, 5, 6]
console.log(range(2, 4));  // should print [2, 3, 4]


//Dom and Event Listener type stuff to make it actually show on site
const frogTitle = document.getElementById("frogTitle"); 
let showingRange = false;

frogTitle.addEventListener("click", function () {
    if (showingRange) {
        frogTitle.textContent = "Frogs";
    } else {
        frogTitle.textContent = range(5, 9).join(",");
    }
    showingRange =! showingRange;
});