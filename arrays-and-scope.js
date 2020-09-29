
const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

// --------------------------
// Opdracht 1: Check hoeveel studenten hun studie cum laude hebben gehaald (8 of hoger) en log dit in de console.
// --------------------------
let count = 0;
for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 8) {
        console.log(grades[i] + " = Cum laude!");
        count++;
    } else {
        console.log(grades[i] + " =  NIET Cum laude!");
    }
}
console.log(count + " Studenten hebben Cum laude");


// --------------------------
// Opdracht 2: Check welke waarde in de array het hoogste is, en log dit in de console
// --------------------------
let highestNumber = 0
for (let i = 0; i < grades.length; i++) {
    if (grades[i] > highestNumber) {
        highestNumber = grades[i]
    }
}
console.log("het hoogste nummer is: " + highestNumber)


// --------------------------
// Opdracht 3: Tel alle waardes van de array bij elkaar op en bereken het gemiddelde. Log dit in de console.
// --------------------------
let total = 0
for (let i = 0; i < grades.length; i++) {
    total += grades[i]
}
console.log("het gemiddelde =" + total / grades.length)



