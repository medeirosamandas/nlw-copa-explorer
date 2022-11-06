function createGame(player1, hour, player2) {
  return `
  <li>
              <img src="./assets/flags/icon=${player1}.svg" alt="Baideira do ${player1}" /><strong
                >${hour}</strong
              ><img src="./assets/flags/icon=${player2}.svg" alt="Bandeira do ${player2}" />
            </li>
         
  `
}

function createCard(date, day, games) {
  return `        <div class="card">
          <h2>${date} <span>${day}</span></h2>
          <ul>
            ${games}
          </ul>
        </div>`
}

document.querySelector("#cards").innerHTML =
  createCard("24/11", "quinta", createGame("brazil", "16:00", "serbia")) +
  createCard(
    "28/11",
    "segunda",
    createGame("brazil", "13:00", "switzerland") +
      createGame("portugal", "16:00", "argentina")
  ) +
  createCard("02/12", "sexta", createGame("brazil", "16:00", "cameroon"))
