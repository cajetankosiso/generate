const cardNumber = document.getElementById("cardNumber");  
const playerName = document.getElementById("playerName");  
const generateBtn = document.getElementById("generateBtn"); 
const clearBtn = document.getElementById("clearBtn");      
const cardContainer = document.getElementById("cardContainer"); 

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function generateCards() {
  const count = Number(cardNumber.value);  
  const name = playerName.value;    

  if (name === "") {
    alert("Please enter a name!");
    return;
  }

  if (isNaN(count) || count < 0) {
    alert("Please enter a valid number!");
    return;
  }

 

  for (let i = 1; i <= count; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.backgroundColor = randomColor();
    card.textContent = `Hello ${name}`;
    cardContainer.appendChild(card);
  }

  

}


generateBtn.addEventListener("click", generateCards);


clearBtn.addEventListener("dblclick", () => {
  cardContainer.innerHTML = "";
});