// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.
// Lets get coding!

/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com
// Input: de input is een emailadres
// Output: de output is een domeinnaam dus alles na de @
// Werkwijze:
function getEmailDomain(emailaddress) {
// Stap 1: Bepaal waar in het emailadres de @ zich bevind, dus een indexOf methode
    const indexOfAt = emailaddress.indexOf('@');
// Stap 2: Return alle karakters die zich na de @ bevind, dus een substring methode
    const domainName = emailaddress.substring(indexOfAt + 1);
    return domainName;
}

// Stap 3: Maak een log van alle emailadressen en controleer of de uitkomsten kloppen.
const domainNameOne = getEmailDomain("n.eeken@novi-education.nl");
const domainNameTwo = getEmailDomain("t.mellink@novi.nl");
const domainNameThree = getEmailDomain("a.wiersma@outlook.com");

console.log(domainNameOne, domainNameTwo, domainNameThree);

/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

// Input: De input is een emailadres.
// Output: De output is welk soort domein is het? medewerker, student of extern
// Werkwijze:
// Stap 1 : Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht.
function typeOfEmail(emailaddress) {
// Stap 2 : Schrijf een if else statement om de domeinnamen te vergelijken en een waarde terug te geven wanneer de statement waar is.
    if (getEmailDomain(emailaddress) === 'novi-education.nl') {
        return 'Student';
    } else if (getEmailDomain(emailaddress) === 'novi.nl') {
        return 'Medewerker';
    } else {
        return 'Extern';
    }

}

// Stap 3 : Log alle emailadressen en controleer de uitkomsten.
const domainTypeOne = typeOfEmail('n.eeken@novi-education.nl');
const domainTypeTwo = typeOfEmail("t.mellink@novi.nl");
const domainTypeTree = typeOfEmail("novi.nlaapjesk@outlook.com");
const domainTypeFour = typeOfEmail("a.wiersma@outlook.com");

console.log(domainTypeOne, domainTypeTwo, domainTypeTree, domainTypeFour);
/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in
// Input: emailadres
// Output: Boolean
// Werkwijze:
// Stap 1 : Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht.
function checkEmailValidity(emailaddress) {
// Stap 2 : Controleer of er in het emailadres een @ in voorkomt door een includes methode.
    const containsAt = emailaddress.includes('@');
// Stap 3 : Controleer of er in het emailadres een comma (,) in voorkomt door een includes methode.
    const containsComma = emailaddress.includes(',');
// Stap 4 : Controleer of het laatste karakter geen punt (.) is door een lastIndexOf methode.
    const lastIndexOfDot = emailaddress.lastIndexOf('.');
// Stap 5 : Als het laatste karater geen dot (.) is geeft true zodat we een vergelijking kunnen maken in de if else statement.
    const lastIndexOfDotIsNo = lastIndexOfDot !== emailaddress.length - 1;
// Stap 5 : Zet stap 2, 3, en 4 in een if else statement en controleer door middel van vergelijkingsoperatoren of de input waar of niet is.
    if (containsAt && !containsComma && lastIndexOfDotIsNo) {
// Stap 6 : Return een boolean true of false
        return true;
    } else {
        return false;
    }
}
const validateEmailOne = checkEmailValidity("n.eeken@novi.nl");
const validateEmailTwo = checkEmailValidity("tessmellink@novi.nl");
const validateEmailThree = checkEmailValidity("n.eekenanovi.nl");
const validateEmailFour = checkEmailValidity("n.eeken@novinl.");
const validateEmailFive = checkEmailValidity("tessmellink@novi,nl");
// Stap 7 : Log alle emailadressen en controleer de uitkomsten.
console.log(validateEmailOne, validateEmailTwo, validateEmailThree, validateEmailFour, validateEmailFive);