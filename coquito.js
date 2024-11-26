const funFacts = [
  "Coquito is a traditional Puerto Rican holiday drink.",
  "The word 'Coquito' means 'little coconut' in Spanish.",
  "Every family has its own secret recipe for Coquito.",
  "Coquito is often made with condensed milk and coconut cream.",
  "Coquito is served chilled and often garnished with cinnamon sticks."
];

// If statement to check if the funFacts array is empty
if (funFacts.length === 0) {
  console.log("No fun facts available.");
} else {
  console.log("Fun facts loaded successfully!");
}
// Function to display a random fact
function displayRandomFact() {
  const randomIndex = Math.floor(Math.random() * funFacts.length);
  const randomFact = funFacts[randomIndex];
  document.getElementById("fact-display").textContent = randomFact;
}
document.getElementById("reveal-fact-btn").addEventListener("click", displayRandomFact);


