let visaEntries = [];
let cashEntries = [];
let tipsHotelEntries = [];
let tipsVisaEntries = [];

function displayAdminInfo() {
  const totalCash = cashEntries.reduce((a, b) => a + b, 0);
  const totalVisa = visaEntries.reduce((a, b) => a + b, 0);
  const totalTipsHotel = tipsHotelEntries.reduce((a, b) => a + b, 0);
  const totalTipsVisa = tipsVisaEntries.reduce((a, b) => a + b, 0);

  let cashToDeclare = totalCash - totalTipsHotel - totalTipsVisa + fianza;
  let visaToDeclare = totalVisa;
  let cashEnvelopeAdmin = totalCash - totalTipsVisa - totalTipsHotel;
  let ticketVisa = totalVisa + totalTipsVisa;
  let deficit = 0;

  if (cashEnvelopeAdmin < 0) {
    deficit = Math.abs(cashEnvelopeAdmin);
    cashEnvelopeAdmin = 0;
  }

  const fianzaEnvelope = fianza - deficit;

  writeToConsole('<hr class="separator">');
  writeToConsole(`CASH to Declare : ${cashToDeclare}`);
  writeToConsole(`VISA to Declare : ${visaToDeclare}`);
  writeToConsole(`CASH Envelope Admin : ${cashEnvelopeAdmin}`);
  writeToConsole(`Tiquet VISA : ${ticketVisa}`);
  writeToConsole(`"FIANZA" Envelope : ${fianzaEnvelope}`);
}

function displayAllTotals() {
  clearConsole(); // Supprime l'affichage actuel avant d'afficher les nouvelles valeurs

  writeToConsole(`CASH Income : ${cashEntries.reduce((a, b) => a + b, 0)}`);
  cashEntries.forEach((entry, index) => writeToConsole(entry.toString(), "cash-" + index));

  writeToConsole(`VISA Income : ${visaEntries.reduce((a, b) => a + b, 0)}`);
  visaEntries.forEach((entry, index) => writeToConsole(entry.toString(), "visa-" + index));

  writeToConsole(`Tips HOTEL : ${tipsHotelEntries.reduce((a, b) => a + b, 0)}`);
  tipsHotelEntries.forEach((entry, index) => writeToConsole(entry.toString(), "tipsh-" + index));

  writeToConsole(`Tips VISA : ${tipsVisaEntries.reduce((a, b) => a + b, 0)}`);
  tipsVisaEntries.forEach((entry, index) => writeToConsole(entry.toString(), "tipsv-" + index));

  displayAdminInfo(); // Met à jour les informations d'administration
}



