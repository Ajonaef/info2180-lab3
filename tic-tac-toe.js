document.addEventListener("DOMContentLoaded", () => {
    // Select all divs inside the board and add the 'square' class
    const squares = document.querySelectorAll("#board div");
    
    squares.forEach(square => {
      square.classList.add("square");
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board div");
    let currentTurn = "X"; // Tracks whether it's X's or O's turn
    const gameState = Array(9).fill(null); // Array to track the state of each square
  
    squares.forEach((square, index) => {
      square.classList.add("square"); // Add square class to each div
  
      square.addEventListener("click", () => {
        // Only allow a move if the square is empty
        if (!gameState[index]) {
          // Update the game state and the display
          gameState[index] = currentTurn;
          square.textContent = currentTurn;
          square.classList.add(currentTurn); // Add the appropriate class ("X" or "O")
  
          // Alternate the turn
          currentTurn = currentTurn === "X" ? "O" : "X";
        }
      });
    });
  });
  