document.addEventListener("DOMContentLoaded", () => {
    // Select all divs inside the board and add the 'square' class
    const squares = document.querySelectorAll("#board div");
    
    squares.forEach(square => {
      square.classList.add("square");
    });
  });
  