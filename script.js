function isValidDate(date) {
  // Je vérifie que la date a bien le format "dd/mm/yyyy"
  const regex = /^\d{2}\/\d{2}\/\d{4}$/; // expression régulière trouvé sur le internet
  if (regex.test(date) === false) {
    return false; // Si le format est incorrect, retourner false
  }
  //return true;
  const partsOfDates = date.split("/");
  const day = parseInt(partsOfDates[0], 10);
  const month = parseInt(partsOfDates[1], 10);
  const year = parseInt(partsOfDates[2], 10);

  if (month < 1 || month > 12) {
    return false;
  }
  if (year < 1000 || year > 9999) {
    return false;
  }
  //return true;
}
//format date :
//console.log(isValidDate(13568888));
//console.log(isValidDate("12/11/2024"));

//vérification des mois/années
//console.log(isValidDate("05/14/2024"));
//console.log(isValidDate("18/02/1987"));
