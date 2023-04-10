// ---------- ELEMENTS DU DOM

const consoleOutput = document.getElementById("consoleOutput");
const consoleInputForm = document.querySelector("#consoleInputForm");
const consoleInput = document.querySelector("#consoleInput");


const contentAddedEvent = new Event("contentadded");



// ---------- GESTION DE L'AFFICHAGE

function writeToConsole(text) {
    if (consoleOutput) {
        consoleOutput.innerHTML += text + "<br>";
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
    if (isNaN(item)) {
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


