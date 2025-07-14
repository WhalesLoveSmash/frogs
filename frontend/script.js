const title = document.getElementById('frogTitle');
const button = document.getElementById('changeTitleBtn');
const frogZone = document.getElementById('frogZone');


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
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    const randomQuote = frogQuotes[Math.floor(Math.random() * frogQuotes.length)];
    title.innerText = randomQuote;
});