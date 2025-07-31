# Tic-Tac-Toe


<img width="837" height="826" alt="image" src="https://github.com/user-attachments/assets/ce7de3a7-d143-455f-8929-4d4685176e6c" />


This is a simple Tic-Tac-Toe game implemented using HTML, CSS, and JavaScript. It is designed for two players, `X` and `O`, to play alternately on a 3x3 grid. The first player to match three of their symbols in a row, column, or diagonal wins the game. If all the boxes are filled without a winner, the game ends in a draw.

## Features

- **Two-player mode**: Players `X` and `O` take turns.
- **Winning detection**: The game detects a win based on predefined winning patterns.
- **Draw condition**: The game declares a draw if all boxes are filled and no winner is found.
- **Reset functionality**: Reset the game at any time using the reset button.
- **Replay functionality**: Start a new game with the "New Game" button.

## File Structure

- **HTML**: Contains the structure of the Tic-Tac-Toe grid and buttons.
- **CSS**: Styles the game layout, including the grid, buttons, and message container.
- **JavaScript**: Implements the game logic, including turn management, winner detection, and UI interactions.

## How to Play

1. Open the game in your browser.
2. Player `O` starts the game.
3. Click on any empty box to place your symbol (`O` or `X`).
4. The game alternates between `O` and `X` automatically.
5. The game ends when:
   - A player wins by forming a line of three matching symbols.
   - All boxes are filled without a winner (draw).
6. Use the "New Game" button to start a fresh match or "Reset" to clear the board and continue.

## Winning Patterns

The following patterns are considered winning combinations:

- Horizontal: `[0, 1, 2]`, `[3, 4, 5]`, `[6, 7, 8]`
- Vertical: `[0, 3, 6]`, `[1, 4, 7]`, `[2, 5, 8]`
- Diagonal: `[0, 4, 8]`, `[2, 4, 6]`

## JavaScript Functions

### Game Logic

- **`checkWinner()`**: Checks the grid for a winning pattern.
- **`showWinner(winner)`**: Displays the winner's name and disables further interaction.
- **`draw()`**: Declares a draw when no winner is found and all boxes are filled.

### Box Management

- **`disableBoxes()`**: Disables all boxes after the game ends.
- **`enableBoxes()`**: Resets the boxes for a new game.

### Event Listeners

- **New Game Button**: Calls `resetGame()` to start a new game.
- **Reset Button**: Calls `resetGame()` to clear the board.

### Reset Functionality

- **`resetGame()`**: Resets the game state, enables all boxes, and hides the winner/draw message.

## How to Run

1. Clone this repository:
   ```bash
   git clone https://github.com/YashTushar/Tic-Tac-Toe.git
   ```
2. Open the `index.html` file in your preferred web browser.
3. Start playing!

## Future Improvements

- Add a single-player mode with AI.
- Improve the UI/UX design for a better gaming experience.
- Track scores across multiple games.
- Add animations for winning and draw states.

---

Enjoy playing Tic-Tac-Toe! Feel free to contribute or suggest improvements.

