function maxDaysInMonth(month, year) {
  //les mois de janvier (1) à décembre (12)
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  //années bissextiles
  if (month === 2 && year % 4 === 0 && (year !== 0 || year % 400 === 0)) {
    return 29;
  }

  return daysInMonth[month - 1];
}

function isValidDate(dateString) {
  // Vérification du format (dd/mm/yyyy)
  const dateParts = dateString.split("/");
  if (dateParts.length !== 3) {
    return false;
  }

  const day = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10);
  const year = parseInt(dateParts[2], 10);

  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    return false;
  }

  if (month < 1 || month > 12 || year < 1000 || year > 9999) {
    return false;
  }
  const maxDays = maxDaysInMonth(month, year);
  if (day < 1 || day > maxDays) {
    return false;
  }

  return true;
}

// vérification du format
console.log(isValidDate("01 - 02 - 87")); // false
//vérification si la date est true
console.log(isValidDate("03/04/2001")); // true
//vérification si date est false :
console.log(isValidDate("03/14/2001")); // false
//vérification année bissextile true:
console.log(isValidDate("29/02/2020")); //true
