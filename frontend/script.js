const title = document.getElementById('frogTitle');
const button = document.getElementById('changeTitleBtn');


button.addEventListener('click', () => {
    const frogQuotes = [
        "Ribbit revolution 🐸",
        "Frogs before bros",
        "Deploy the amphibians",
        "FrogOps: Activated",
        "Live, Laugh, Leap"
    ];

    const randomQuote = frogQuotes[Math.floor(Math.random() * frogQuotes.length)];
    title.innerText = randomQuote;
});