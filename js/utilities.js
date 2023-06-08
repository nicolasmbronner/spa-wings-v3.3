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
    if (item.indexOf('f') !== -1) { 
      // ... existing code here
    } else if (isNaN(item)) {
      // ... existing code here
    } else {
      const number = parseFloat(item);
      if (currentArray !== null) {
        // If it's a valid number, add it to the current array
        currentArray.push(number);
      } else if (item.includes('-')) {
        // If the item includes an ID (signified by '-'), update the corresponding entry
        const [prefix, id, newValue] = item.split('-');
        const arrayToUpdate = getArrayFromPrefix(prefix);
        if (arrayToUpdate && arrayToUpdate[id] !== undefined) {
          if (newValue > 0) {
            // If the new value is above 0, update the entry
            arrayToUpdate[id] = newValue;
            console.log(`Entry ${item} updated to ${newValue}`);
          } else if (newValue === 0) {
            // If the new value is 0, delete the entry
            arrayToUpdate.splice(id, 1);
            console.log(`Entry ${item} deleted`);
          }
        }
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
  consoleInput.value = id + "-";
  // This will move the cursor to the end of the input
  consoleInput.focus();
  consoleInput.setSelectionRange(consoleInput.value.length, consoleInput.value.length);
}

function getArrayFromPrefix(prefix) {
  switch (prefix) {
    case 'visa': return visaEntries;
    case 'cash': return cashEntries;
    case 'tipsh': return tipsHotelEntries;
    case 'tipsv': return tipsVisaEntries;
    default: return null;
  }
}


