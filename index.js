// Setting constants & Variables

const generateBtn = document.getElementById("generateBtn");
const topCard = document.getElementById("topCard");
const emptyCard1 = document.getElementById("emptyCard1");
const emptyCard2 = document.getElementById("emptyCard2");
const emptyCard3 = document.getElementById("emptyCard3");
const emptyCard4 = document.getElementById("emptyCard4");
let cardList = [
    "Pokemon Cards/bulbasaur.webp",
    "Pokemon Cards/charizard.png",
    "Pokemon Cards/charmander.png",
    "Pokemon Cards/eevee.png",
    "Pokemon Cards/pikachu VMAX.png",
    "Pokemon Cards/pikachu.png",
    "Pokemon Cards/snorlax.png",
    "Pokemon Cards/squirtle.png"
];


// On click function
generateBtn.onclick = function generate(){
    let randomImage = cardList[Math.floor(Math.random() * cardList.length)];
    console.log(randomImage)
    changeImage(randomImage)
};

function changeImage(randomImage){
   let cards = [emptyCard1, emptyCard2,emptyCard3, emptyCard4]

   for (let i = 0; i < 4; i++){
    if (cards[i].scroll.includes("Pokemon Cards/backofcard.jpg")){
        slots[i] = randomImage;
        return;
    }

   }
   console.log("Your deck is complete!")
};