numbers = [];
temp = 0;

function chooseCard() {
  let choice = Math.floor(Math.random() * 8 + 1);
  if (numbers.includes(choice) === false) {
    numbers.push(choice);
    return choice;
  } else {
    chooseCard();
  }
}

function randomizeCards() {
  for (let i = 1; i <= 4; i++) {
    while (numbers.includes(i + temp)) temp++;
    numbers.push(i + temp);
    chooseCard();
  }
  console.log(numbers);
  return numbers;
}

function assignCards(numbers) {
  localStorage.setItem(numbers[0], "0");
  localStorage.setItem(numbers[1], "0");
  localStorage.setItem(numbers[2], "1");
  localStorage.setItem(numbers[3], "1");
  localStorage.setItem(numbers[4], "2");
  localStorage.setItem(numbers[5], "2");
  localStorage.setItem(numbers[6], "3");
  localStorage.setItem(numbers[7], "3");
}

document.addEventListener("DOMContentLoaded", () => {
  localStorage.clear();
  const divs = document.querySelectorAll("main div");

  let cardsFlipped = 0;
  let firstCard = null;
  let secondCard = null;
  let cooldown = false;

  numbers = randomizeCards();
  assignCards(numbers);

  divs.forEach((div) => {
    div.addEventListener("click", (e) => {
      console.log(`Div with id "${div.id}" was clicked`);
      if (div.classList.contains("flippable") === true && cooldown === false) {
        div.classList.add("flipped");
        div.textContent = localStorage.getItem(div.id);
        cardsFlipped++;
        if (cardsFlipped === 1) {
          firstCard = div;
        } else if (cardsFlipped === 2) {
          secondCard = div;
          if (firstCard.textContent === secondCard.textContent) {
            console.log("Match!");
            cardsFlipped = 0;
            firstCard.classList.remove("flippable");
            secondCard.classList.remove("flippable");
            firstCard.classList.add("matched");
            secondCard.classList.add("matched");
            firstCard = null;
            secondCard = null;
          } else {
            cooldown = true;
            setTimeout(() => {
              firstCard.classList.remove("flipped");
              secondCard.classList.remove("flipped");
              firstCard.textContent = "";
              secondCard.textContent = "";
              cardsFlipped = 0;
              firstCard = null;
              secondCard = null;
              cooldown = false;
            }, 1000);
          }
        }
      }
    });
  });
});
