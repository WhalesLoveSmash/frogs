const title = document.getElementById('frogTitle');
const button = document.getElementById('changeTitleBtn');
const frogZone = document.getElementById('frogZone');

let lastQuoteIndex = -1;
let lastColorIndex = -1;

button.addEventListener('click', () => {
    const frogQuotes = [
        "Ribbit revolution 🐸",
        "Prepare the swamp",
        "Deploy the amphibians",
        "FrogOps: Activated",
        "Live, Laugh, Leap",
    ];

    //Make frog bounce
    frogZone.classList.add('animate-bounce');

    //Allow bounce to re-trigger by removing class after 1 second
    setTimeout(() => {
        frogZone.classList.remove('animate-bounce');
    }, 1000);

    //Change background color randomly
    const colors = ['#A7F3D0', '#D1FAE5', '#FCD34D', '#FCA5A5', '#C4B5FD'];
    
    // pick a new background color that is NOT the same as last time
    let colorIndex;
    do {
        colorIndex = Math.floor(Math.random() * colors.length);
    } while (colorIndex === lastColorIndex);
    lastColorIndex = colorIndex;
    document.body.style.backgroundColor = colors[colorIndex];

    // pick a new quote that is NOT the same as last time
    let quoteIndex;
    do {
        quoteIndex = Math.floor(Math.random() * frogQuotes.length);
    } while (quoteIndex === lastQuoteIndex);
    
    lastQuoteIndex = quoteIndex;
    title.innerText = frogQuotes[quoteIndex];
});