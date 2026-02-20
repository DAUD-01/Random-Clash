# Random Clash 🎮

**Console-based battle game between a player and an enemy, where every attack is unpredictable!**

## Game Description

Random Clash is a **turn-based console game** where a player and an enemy fight until one of them wins. Every attack is randomized, and some rounds are **bonus rounds** that deal extra damage. Occasionally, if you hit a **special number**, you can heal yourself!

The game is fully powered by JavaScript and demonstrates:

* **Closures** (private state for player and enemy)
* **Randomness in game logic**
* **Turn-based mechanics**
* **Conditional bonus events**

## How to Play

1. Clone or download the repository.
2. Open `game.js` in your console (Node.js recommended).
3. Create a game instance:

   ```js
   const game = createGame();
   ```
4. Attack the enemy by calling:

   ```js
   game.attack();
   ```
5. Reset the game when needed:

   ```js
   game.reset();
   ```

### Features

* **Player vs Enemy**: Each attack is randomly generated.
* **Bonus Rounds**: Every 3rd round deals higher damage.
* **Special Number Healing**: Randomly heal yourself if a lucky damage number is hit.
* **Dynamic Rounds**: Keeps the gameplay unpredictable and exciting.

## Example Output

```
--- Round 1 ---
Player attacks for 7
Enemy health: 93
Enemy attacks for 10
Player health: 90

--- Round 3 ---
Bonus Round
Player attacks for 15
Enemy health: 60
Enemy attacks for 12
Player health: 78

You hit the special number! +20 HP
```

## License

MIT License

