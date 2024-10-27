document.addEventListener("DOMContentLoaded", () => {
  // Select all divs inside the board and add the 'square' class  
  const squares = document.querySelectorAll("#board div");
  let currentTurn = "X"; // Tracks whether it's X's or O's turn
  const gameState = Array(9).fill(null); // Array to track the state of each square

  squares.forEach((square, index) => {
    square.classList.add("square"); // Add square class to each div

    // Click event to handle placing X or O
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

    // Mouseover event to add the hover class
    square.addEventListener("mouseover", () => {
      if (!gameState[index]) {
        square.classList.add("hover");
      }
    });

    // Mouseleave event to remove the hover class
    square.addEventListener("mouseleave", () => {
      square.classList.remove("hover");
    });
  });
});