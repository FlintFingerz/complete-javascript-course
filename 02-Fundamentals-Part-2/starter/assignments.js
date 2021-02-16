// LECTURE: Functions
// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// const finland = describeCountry(`Finland`, 6, `Helsinki`);
// const usa = describeCountry(`USA`, 330, `Washington D.C.`);
// const canada = describeCountry(`Canada`, 30, `Ottawa`);
// console.log(finland, usa, canada);

//LECTURE: Function Declarations vs. Expressions
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percentFinland1 = percentageOfWorld1(6);
const percentUsa1 = percentageOfWorld1(330);
const percentCanada1 = percentageOfWorld1(30);
console.log(percentFinland1, percentUsa1, percentCanada1);

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

const percentFinland2 = percentageOfWorld2(6);
const percentUsa2 = percentageOfWorld2(330);
const percentCanada2 = percentageOfWorld2(30);
console.log(percentFinland2, percentUsa2, percentCanada2);

const percentageOfWorld3 = population => (population / 7900) * 100;
const percentFinland3 = percentageOfWorld3(6);
const percentUsa3 = percentageOfWorld3(330);
const percentCanada3 = percentageOfWorld3(30);
console.log(percentFinland3, percentUsa3, percentCanada3);

function describePopulation(country, population) {
    const percentage = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentage}% of the world.`
}

console.log(describePopulation(`Finland`, 6));
console.log(describePopulation(`USA`, 330));
console.log(describePopulation(`Canada`, 30));

const populations = [6, 330, 30, 1441];
console.log(populations.length === 4);

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages);

const neighbors = [`Mexico`, `Canada`];
console.log(neighbors);

neighbors.push(`Utopia`);
console.log(neighbors);

neighbors.pop(`Utopia`);
console.log(neighbors);

if (!neighbors.includes(`Germany`)) {
    console.log(`Probably not a centeral European country :D`);
}

neighbors[neighbors.indexOf(`Mexico`)] = `Utopia`;
console.log(neighbors);

const myCountry = {
    country: `USA`,
    capital: `Washington D.C.`,
    language: `english`,
    population: 330,
    neighbors: [`Mexico`, `Canada`],
    describe: function () {
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}`
    },
    checkIsland: function () {
        this.isIsland = this.neighbors.length === 0 ? true : false;
        return this.isIsland;
    }

};

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}.`);

myCountry.population += 2
console.log(myCountry.population);

myCountry[`population`] -= 2
console.log(myCountry[`population`]);

console.log(myCountry.describe());
console.log(myCountry.checkIsland());
