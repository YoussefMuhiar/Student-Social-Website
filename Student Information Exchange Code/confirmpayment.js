

  let backButton = document.getElementById("back");
  let homeButton = document.getElementById("home");
  
  homeButton.addEventListener("click", (e) => {
    e.preventDefault();
  
    window.location.href = 'homepage.html';
  });
  
  backButton.addEventListener("click", (e) => {
    e.preventDefault();
  
    window.location.href = 'Market.html';
  });

