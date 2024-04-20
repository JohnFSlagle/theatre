function rollDice() {
  let goldCoins = 0;
  for (let i = 0; i < 10; i++) {
    const roll = Math.floor(Math.random() * 6) + 1;
    alert(`You rolled a ${roll}!`);
    if (roll === 1) {
      alert(`Sorry you rolled a 1. Game over man!`);
      break;
    } else if (roll < 5) {
      alert(`No gold coins`);
      continue;
    } else if (roll === 4) {
      goldCoins -= 1;
      alert(`You lost a gold coin!`);
      continue;
    } else if (roll >= 5) {
      alert(`You won ${roll} gold coins!`);
      goldCoins += roll;
      alert(`You won ${goldCoins} gold coins so far!`);
      continue;
    }
  }
  if (goldCoins > 0) {
    alert(`You won ${goldCoins} gold coins! Great job`);
  }
}
