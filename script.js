// * ---------- Game Title ---------- *

const gameTitleInput = document.getElementById("game-title-input");
const gameTitle = document.getElementById("game-title");

gameTitleInput.addEventListener("change", handleGameTitleChange);

function handleGameTitleChange(event) {
  const newTitle = event.target.value;
  gameTitle.innerHTML = newTitle;
}

// * ---------- Date ---------- *

const dateInput = document.getElementById("date-input");
const date = document.getElementById("date");

dateInput.addEventListener("change", handleDateChange);

function handleDateChange(event) {
  const newDate = event.target.value;
  date.innerHTML = newDate;
}

// * ---------- Stadium ---------- *

const stadiumInput = document.getElementById("stadium-input");
const stadium = document.getElementById("location");

stadiumInput.addEventListener("change", handleStadiumChange);

function handleStadiumChange(event) {
  const newStadium = event.target.value;
  stadium.innerHTML = newStadium;
}

// * ---------- Section ---------- *

const sectionInput = document.getElementById("section-input");
const section = document.getElementById("section");

sectionInput.addEventListener("change", handleSectionChange);

function handleSectionChange(event) {
  const newSection = event.target.value;
  section.innerHTML = newSection;
}

// * ---------- Row ---------- *

const rowInput = document.getElementById("row-input");
const row = document.getElementById("row");

rowInput.addEventListener("change", handleRowChange);

function handleRowChange(event) {
  const newRow = event.target.value;
  row.innerHTML = newRow;
}

// * ---------- Seat ---------- *

const seatInput = document.getElementById("seat-input");
const seat = document.getElementById("seat");

seatInput.addEventListener("change", handleSeatChange);

function handleSeatChange(event) {
  const newSeat = event.target.value;
  seat.innerHTML = newSeat;
}
