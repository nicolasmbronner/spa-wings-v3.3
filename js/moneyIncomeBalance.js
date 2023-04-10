let visaEntries = [];
let cashEntries = [];
let tipsHotelEntries = [];
let tipsVisaEntries = [];

function displayAdminInfo() {
  const totalCash = cashEntries.reduce((a, b) => a + b, 0);
  const totalVisa = visaEntries.reduce((a, b) => a + b, 0);
  const totalTipsHotel = tipsHotelEntries.reduce((a, b) => a + b, 0);
  const totalTipsVisa = tipsVisaEntries.reduce((a, b) => a + b, 0);
  const fianza = 500;

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
  writeToConsole((cashEntries.length > 0 ? cashEntries.join(" ") : "-") + "<br>");

  writeToConsole(`VISA Income : ${visaEntries.reduce((a, b) => a + b, 0)}`);
  writeToConsole((visaEntries.length > 0 ? visaEntries.join(" ") : "-") + "<br>");

  writeToConsole(`Tips HOTEL : ${tipsHotelEntries.reduce((a, b) => a + b, 0)}`);
  writeToConsole((tipsHotelEntries.length > 0 ? tipsHotelEntries.join(" ") : "-") + "<br>");

  writeToConsole(`Tips VISA : ${tipsVisaEntries.reduce((a, b) => a + b, 0)}`);
  writeToConsole((tipsVisaEntries.length > 0 ? tipsVisaEntries.join(" ") : "-") + "<br>");

  displayAdminInfo(); // Met à jour les informations d'administration
}




