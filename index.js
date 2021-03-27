const cards = ["Ada", "Brendan", "Ali"];

function writeCards(cards) {
  for (let i = 0; i < cards.length; i++) {
    console.log(`Thank you, ${cards[i]}, for the wonderful birthday gift!`);
  }

  return cards;
}

writeCards(cards); 

let countdown = 10;
while (countdown > 0) {
  console.log(countdown--);
} 