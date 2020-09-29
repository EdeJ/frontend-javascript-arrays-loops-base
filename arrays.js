// --------------------------
// Opdracht 1
// --------------------------

let names = ["Henk", "Piet", "Fred", "Joop"];

// Zorg ervoor dat er -"je" achter iedere naam wordt geplakt
// geeft: ["Henkje", "Pietje", "Fredje", "Joopje"]

for (let i = 0; i < names.length; i++) {
    console.log(names[i] + "je");
}


// --------------------------
// Opdracht 2
// --------------------------

const numbers = [2, 4, 5, 29, 38];

// Vermenigvuldig iedere waarde in de array met 3
// geeft: [ 6, 12, 15, 87, 114 ];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] * 3);
}


// --------------------------
// Opdracht 3
// --------------------------

const figures = [4, 6, 12, 34, 1];

// Tel 3 op bij ieder item in de array
// geeft: [ 7, 9, 15, 37, 4 ]

for (let i = 0; i < figures.length; i++) {
    console.log(figures[i] + 3);

}

