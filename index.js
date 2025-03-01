// Setting constants & Variables

const generateBtn = document.getElementById("generateBtn");
const topCard = document.getElementById("topCard");
const emptyCard1 = document.getElementById("emptyCard1");
const emptyCard2 = document.getElementById("emptyCard2");
const emptyCard3 = document.getElementById("emptyCard3");
const emptyCard4 = document.getElementById("emptyCard4");
let cards = [emptyCard1, emptyCard2,emptyCard3, emptyCard4]
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

// Change image (deck) function
function changeImage(randomImage){

   for (let i = 0; i < cards.length; i++){
    if (cards[i].src.includes("backofcard.jpg")){
        cards[i].src = randomImage;
        return;
    }
   }
// Check if all slots are filled
   let allFilled = cards.every(card => !card.src.includes("backofcard.jpg"));

   if (allFilled){
    console.log("Your deck is now full!")
   }
};
