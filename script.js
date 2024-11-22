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

function maxDaysInMonth(month, year) {
  if (month === 2) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      return 29;
    } else {
      return 28;
    }
  }
  if (month === 4 || month === 6 || month === 9 || month === 11) {
    return 30;
  }
  return 31;
}

function isDateValid(day, month, year) {
  const maxDays = maxDaysInMonth(month, year);
  if (day > 0 && day <= maxDays) {
    return true;
  } else {
    return false;
  }
}

//format date :
//console.log(isValidDate(13568888));
//console.log(isValidDate("12/11/2024"));

//vérification des mois/années
//console.log(isValidDate("05/14/2024"));
//console.log(isValidDate("18/02/1987"));

//vérif nbr jour dans le mois est valide
//console.log(isDateValid(29, 2, 2024));
//console.log(isDateValid(31, 11, 2023));
//console.log(isDateValid(18, 2, 1987));
