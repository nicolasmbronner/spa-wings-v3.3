// ---------- ELEMENTS DU DOM

const consoleOutput = document.getElementById("consoleOutput");
const consoleInputForm = document.querySelector("#consoleInputForm");
const consoleInput = document.querySelector("#consoleInput");


const contentAddedEvent = new Event("contentadded");

let entryIdCounter = 0;
let fianza = 500; // Initialise fianza à 500



// ---------- GESTION DE L'AFFICHAGE

function writeToConsole(text, id = null) {
  if (consoleOutput) {
    let output = text;
    // Si un ID est fourni, crée un élément div cliquable avec l'ID en attribut de données
    if (id !== null) {
      output = `<div class="entry" data-id="${id}">${text}</div>`;
    }

    consoleOutput.innerHTML += output + "<br>";
    consoleOutput.dispatchEvent(contentAddedEvent);
  } else {
    console.error("consoleOutput element not found");
  }
}

function clearConsole() {
  if (consoleOutput) {
    consoleOutput.textContent = "";
  } else {
    console.error("consoleOutput element not found");
  }
}



// ---------- GESTION DE L'ENTREE UTILISATEUR

function processUserInput(input) {
  const inputArray = input.split(" ");
  let currentArray = null;

  inputArray.forEach(item => {
    if (item.indexOf('f') !== -1) { // Check for 'f' in the input
      const newFianza = parseFloat(item.slice(0, -1));
      if (!isNaN(newFianza)) { // Check if the part before 'f' is a valid number
        fianza = newFianza;
        console.log(`Fianza updated to ${fianza}`);
      }
    } else if (isNaN(item)) {
      const letter = item.slice(-1).toLowerCase();
      const number = parseFloat(item.slice(0, -1));

      switch (letter) {
        case "v":
          if (item.slice(-2).toLowerCase() === "tv") {
            tipsVisaEntries.push(number);
            currentArray = tipsVisaEntries;
          } else {
            visaEntries.push(number);
            currentArray = visaEntries;
          }
          break;
        case "c":
          cashEntries.push(number);
          currentArray = cashEntries;
          break;
        case "h":
          if (item.slice(-2).toLowerCase() === "th") {
            tipsHotelEntries.push(number);
            currentArray = tipsHotelEntries;
          }
          break;
        default:
          console.log(`Unrecognised letter: ${letter}`);
      }
    } else {
      const number = parseFloat(item);
      if (currentArray !== null) {
        currentArray.push(number);
      } else {
        console.log("No array has been defined");
      }
    }
  });

  displayAllTotals();
  displayAdminInfo();
}

// New function to handle clicking on an entry
function entryClicked(id) {
  consoleInput.value = id + " ";
}


