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
  //string en format numérique
  const day = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10);
  const year = parseInt(dateParts[2], 10);

  //vérification que ce sont bien des nombres
  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    return false;
  }

  if (month < 1 || month > 12 || year < 1000 || year > 9999) {
    return false;
  }
  const maxDays = maxDaysInMonth(month, year); //vérification du nombre de jours dans le mois
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

//étape 2
function isPalindrome(date) {
  // Vérification de l'entrée est bien une chaîne de caractères
  if (typeof date !== "string") {
    return false; // Si ce n'est pas une chaîne, on retourne false
  }

  // Supprimer les caractères "/" dans la date
  let cleanedDate = date.replace(/\//g, ""); // Remplacer tous les "/" par rien

  // Vérification de la date à  8 chiffres
  if (cleanedDate.length !== 8 || isNaN(cleanedDate)) {
    return false; // Si ce n'est pas 8 chiffres, la date est invalide
  }

  // Vérification que la date est un palindrome
  let reversedDate = ""; // Initialiser une chaîne vide pour stocker l'inverse
  for (let i = cleanedDate.length - 1; i >= 0; i--) {
    reversedDate += cleanedDate[i]; // itérer chaque caractère en partant de la fin
  }

  //  Comparation de la date originale avec la date inversée
  if (cleanedDate === reversedDate) {
    return true; // La date est un palindrome
  } else {
    return false; // La date n'est pas un palindrome
  }
}

// vérification si date est un palindrome
console.log(isPalindrome("11/02/2011")); // true
console.log(isPalindrome("03/04/2001")); // false
console.log(isPalindrome("ab/cd/ef")); // false
console.log(isPalindrome("22/02/2022")); // true
