const gameTitleInput = document.getElementById("game-title-input");
const gameTitle = document.getElementById("game-title");

gameTitleInput.addEventListener("change", handleGameTitleChange);

function handleGameTitleChange(event) {
  const newTitle = event.target.value;
  gameTitle.innerHTML = newTitle;
}

const dateInput = document.getElementById("date-input");
const date = document.getElementById("date");

dateInput.addEventListener("change", handleDateChange);

function handleDateChange(event) {
  const newDate = event.target.value;
  date.innerHTML = newDate;
}

const sectionInput = document.getElementById("section-input");
const section = document.getElementById("section");

sectionInput.addEventListener("change", handleSectionChange);

function handleSectionChange(event) {
  const newSection = event.target.value;
  section.innerHTML = newSection;
}
const rowAndSeatInput = document.getElementById("row-and-seat-input");
const rowAndSeat = document.getElementById("row-and-seat");

rowAndSeatInput.addEventListener("change", handleRowAndSeatChange);

function handleRowAndSeatChange(event) {
  const newRowAndSeat = event.target.value;
  rowAndSeat.innerHTML = newRowAndSeat;
}
