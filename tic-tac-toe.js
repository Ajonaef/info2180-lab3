document.addEventListener("DOMContentLoaded", () => {
  // Select all divs inside the board and add the 'square' class
  const squares = document.querySelectorAll("#board div");
  const statusDiv = document.getElementById("status");
  const newGameButton = document.querySelector(".btn");
  let currentTurn = "X"; // Tracks whether it's X's or O's turn
  let gameState = Array(9).fill(null); // Array to track the state of each square
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  squares.forEach((square, index) => {
    square.classList.add("square"); // Add square class to each div

    // Click event to handle placing X or O
    square.addEventListener("click", () => {
      // Only allow a move if the square is empty and no one has won yet
      if (!gameState[index] && !statusDiv.classList.contains("you-won")) {
        // Update the game state and the display
        gameState[index] = currentTurn;
        square.textContent = currentTurn;
        square.classList.add(currentTurn); // Add the appropriate class ("X" or "O")

        // Check for a winner after the move
        if (checkWinner(currentTurn)) {
          statusDiv.textContent = `Congratulations! ${currentTurn} is the Winner!`;
          statusDiv.classList.add("you-won");
        } else {
          // Alternate the turn
          currentTurn = currentTurn === "X" ? "O" : "X";
        }
      }
    });

    // Mouseover event to add the hover class
    square.addEventListener("mouseover", () => {
      if (!gameState[index] && !statusDiv.classList.contains("you-won")) {
        square.classList.add("hover");
      }
    });

    // Mouseleave event to remove the hover class
    square.addEventListener("mouseleave", () => {
      square.classList.remove("hover");
    });
  });

  // New Game button event listener
  newGameButton.addEventListener("click", () => {
    // Clear each square on the board
    squares.forEach(square => {
      square.textContent = "";
      square.classList.remove("X", "O", "hover");
    });

    // Reset the game state
    gameState = Array(9).fill(null);
    currentTurn = "X"; // Optionally, reset the current turn to "X"
    
    // Reset the status message
    statusDiv.textContent = "Move your mouse over a square and click to play an X or an O.";
    statusDiv.classList.remove("you-won");
  });

  // Function to check if the current player has won
  function checkWinner(player) {
    return winningCombinations.some(combination =>
      combination.every(index => gameState[index] === player)
    );
  }
});
