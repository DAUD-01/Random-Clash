function createGame() {
  let playerHealth = 100;
  let enemyHealth = 100;
  let currentRound = 0;
  let gameActive = true;
  let specialNumber = getRandomValue(1, 15);

  function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // check the winner, this function will be run after each turn
  function checkWinner() {
    if (enemyHealth <= 0 && playerHealth <= 0) {
      console.log("Draw!");
      gameActive = false;
    } else if (enemyHealth <= 0) {
      console.log("Player Wins!");
      gameActive = false;
    } else if (playerHealth <= 0) {
      console.log("Enemy Wins!");
      gameActive = false;
    }
  }

  function enemyAttack() {
    const damage = getRandomValue(8, 15); // damage of range 8-15
    playerHealth -= damage;
    playerHealth = Math.max(playerHealth, 0) // clamp it to zero, to prevent negative health

    
    console.log(`Enemy attacks for ${damage}`);
    console.log(`Player health: ${playerHealth}`);

    checkWinner();
  }

  function attack() {
    if (!gameActive) {
      console.log("Game is over. Restart to play again.");
      return;
    }

    currentRound++;

    console.log(`\n--- Round ${currentRound} ---`);
    if (currentRound % 3 === 0) { // bonus round
        const damage = getRandomValue(10, 20);
        console.log("Bonus Round")
        enemyHealth -= damage;
        enemyHealth = Math.max(enemyHealth, 0)

        console.log(`Player attacks for ${damage}`);
        console.log(`Enemy health: ${enemyHealth}`);

    checkWinner();
    }
    else {
        const damage = getRandomValue(5, 12); // for normal rounds
        if (damage === specialNumber) { 
            console.log(`You gave the damage of special value ${specialNumber}, you are awarded with 20 healing points!`)
            playerHealth = Math.min(playerHealth + 20, 100)
        } 
        enemyHealth -= damage;
        enemyHealth = Math.max(enemyHealth, 0)
    
        console.log(`Player attacks for ${damage}`);
        console.log(`Enemy health: ${enemyHealth}\n`);
    
        checkWinner();
    }

    if (gameActive) {
      enemyAttack();
    }
  }

  function reset() {
    playerHealth = 100;
    enemyHealth = 100;
    currentRound = 0;
    gameActive = true;
    console.log("\nGame reset!");
  }

  return {
    attack,
    reset
  };
}