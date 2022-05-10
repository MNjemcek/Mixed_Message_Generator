const countries = require("./data.js"); //Imports data from data.js file

//function that generate random Integer between 0 and inputNumber - 1
const randIndex = inputNumber => {
    return Math.floor(Math.random() * inputNumber)
}

let randomCountry = countries[randIndex(countries.length)];

console.log(`\nLet's talk about: ${randomCountry.name}\t
    -Capital: ${randomCountry.capital}\t
    -Population: ${randomCountry.population}\t
    -Member of EU: ${randomCountry.EuMember}\n`);