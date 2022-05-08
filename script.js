const teams = [
  {
    name: "St. Louis Cardinals",
    stadium: "Busch Stadium",
    image_url: "/images/cardinals-header.png",
  },

  {
    name: "New York Yankees",
    stadium: "Yankee Stadium",
    image_url: "/images/yankees-header.png",
  },
  {
    name: "New York Mets",
    stadium: "Citi Field",
    image_url: "/images/mets-header.png",
  },
  {
    name: "Chicago White Sox",
    stadium: "Guaranteed Rate Field",
    image_url: "/images/whitesox-header.png",
  },
  {
    name: "Kansas City Royals",
    stadium: "Kauffman Stadium",
    image_url: "/images/royals-header.png",
  },
  {
    name: "San Francisco Giants",
    stadium: "Oracle Park",
    image_url: "/images/giants-header.png",
  },
  {
    name: "Chicago Cubs",
    stadium: "Wrigley Field",
    image_url: "/images/cubs-header.png",
  },
  {
    name: "Los Angeles Angels",
    stadium: "Angel Stadium",
    image_url: "/images/angels-header.png",
  },
  {
    name: "Arizona Diamondbacks",
    stadium: "Chase Field",
    image_url: "/images/diamondbacks-header.png",
  },
  {
    name: "Seattle Mariners",
    stadium: "T-Mobile Park",
    image_url: "/images/mariners-header.png",
  },
  {
    name: "Atlanta Braves",
    stadium: "Truist Park",
    image_url: "/images/braves-header.png",
  },
  {
    name: "Milwaukee Brewers",
    stadium: "American Family Field",
    image_url: "/images/brewers-header.png",
  },
];

// * ---------- Team Select ---------- *

const teamSelect = document.getElementById("team-select");
const headerImage = document.getElementById("header-image");
const stadium = document.getElementById("location");

function generateTeamOptionsForSelect() {
  console.log(teams);
  let htmlString = "";
  for (let i = 0; i < teams.length; ++i) {
    const team = teams[i];
    const option = `<option value="${team.name}">${team.name}</option>`;
    htmlString += option;
  }
  teamSelect.innerHTML = htmlString;
}

generateTeamOptionsForSelect();

teamSelect.addEventListener("change", handleTeamChange);

function handleTeamChange(event) {
  console.log(event.target.value);
  console.log("team changed");
  // set header image
  const teamObject = teams.filter(
    (team) => team.name === event.target.value
  )[0];
  headerImage.src = "/Cardinals-Ticket" + teamObject.image_url;
  // set stadium name
  stadium.innerHTML = teamObject.stadium;
}

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

// const stadiumInput = document.getElementById("stadium-input");

// stadiumInput.addEventListener("change", handleStadiumChange);

// function handleStadiumChange(event) {
//   const newStadium = event.target.value;
//   stadium.innerHTML = newStadium;
// }

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
