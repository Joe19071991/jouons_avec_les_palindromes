function isValidDate(date) {
  // Je vérifie que la date a bien le format "dd/mm/yyyy"
  const regex = /^\d{2}\/\d{2}\/\d{4}$/; // expression régulière trouvé sur le internet
  if (regex.test(date) === false) {
    return false; // Si le format est incorrect, retourner false
  }
  //return true;
}
//format date :
//console.log(isValidDate(13568888));
//console.log(isValidDate("12/11/2024"));
