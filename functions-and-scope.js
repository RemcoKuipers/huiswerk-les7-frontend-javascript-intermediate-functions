// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// Log het antwoord in de terminal.

// * Hoe zorg ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden? Door eerst een aanpasbare variabele te declareren
let numberOfCumLaudeStudents = 0;
// * Hoe kan ik iedere waarde van de array checken op deze conditie?  Door een for loop te maken.
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat? Door een for loop met een .lenght property te maken.
for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 8) {
        numberOfCumLaudeStudents++;
    }
}
// ---- Verwachte uitkomst: 6
console.log(numberOfCumLaudeStudents);

/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.
// Input : cijfers (grades)
// Output : aantal Cum laude studenten
// Werkwijze :
// Stap 1 : Schrijf een function genaamd cumLaude
function cumLaude(grades) {
// Stap 2 : gebruik het antwoord van opdracht 1
    let count = 0;

    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 8) {
            count++;
        }
    }
    return count;
}

// Stap 3 : Maak niet aanpasbare variabelen om te kijken hoeveel studenten cum laude zijn afgestudeerd.
const howManyCumLaudeOne = cumLaude(grades);
const howManyCumLaudeTwo = cumLaude([6, 4, 5]);
const howManyCumLaudeThree = cumLaude([8, 9, 4, 6, 10]);
// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3
console.log(howManyCumLaudeOne, howManyCumLaudeTwo, howManyCumLaudeThree);

/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
let averageGrades = 0;
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten? Door een for loop te maken die met een .lenght property alle cijfers van de array doorloopt
for (let i = 0; i < grades.length; i++) {
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen? Elke afzonderlijke cijfer.
    averageGrades = averageGrades + grades[i];
}
// * Hoe wordt een gemiddelde berekend? Door alle cijfers (grades) bij elkaar op te tellen en te delen door het aantal cijfers in de array.
// Log het antwoord in de terminal.
console.log(averageGrades / grades.length);
// ---- Verwachte uitkomst: 6.642857142857143


/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Input : Een array van cijfers (grades)
// Output : Gemiddeld cijfer van de array met cijfers
// Werkwijze :
// Stap 1 : Schrijf een functie genaamd averageGrade
function averageGrade(grades) {
// Stap 2 : Gebruik de antwoorden van 2a
    let total = 0;
    for (let i = 0; i < grades.length; i++) {
        total = total + grades[i]
    }
    return (total / grades.length).toFixed(2);
}

// Stap 3 : Maak niet aanpasbare variabelen om te kijken wat het gemiddelde cijfer is om te kunnen loggen.
const averageGradesOne = averageGrade(grades);
const averageGradesTwo = averageGrade([6, 4, 5]);
const averageGradesThree = averageGrade([8, 9, 4, 6, 10]);
// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft 5
// averageGrade([8, 9, 4, 6, 10]) geeft 7.4
// Log het antwoord in de terminal.
console.log(averageGradesOne, averageGradesTwo, averageGradesThree);


/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend! Google zegt dat het de toFixed(2); property is dus dat ga ik gebruiken.


/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan? Door een for loop te schrijven
// * Op welke conditie moet ik checken? Elke cijfer vergelijken met elkaar en kijken welke het hoogste is
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan? Door een aanpasbare variabele te maken waarin ik de hoogste cijfer bewaar.
// Log het antwoord in de terminal.
let highestGrades = 0;
for (let i = 0; i < grades.length; i++) {
    if (grades[i] > highestGrades) {
        highestGrades = grades[i];
    }
}
console.log(highestGrades);
// ---- Verwachte uitkomst: 9


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.
function highestGrade(grades) {
    let highestGrades = 0;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] > highestGrades) {
            highestGrades = grades[i];
        }
    }
    return highestGrades;
}

const highestGradeOne = highestGrade(grades);
const highestGradeTwo = highestGrade([6, 4, 5]);
const highestGradeThree = highestGrade([8, 9, 4, 6, 10]);
// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10
console.log(highestGradeOne, highestGradeTwo, highestGradeThree);
