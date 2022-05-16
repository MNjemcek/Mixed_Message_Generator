let countries = [
    {name: "Russia", capital: "Moscow", population: 145934462, EuMember: false},
    {name: "Germany", capital: "Berlin", population: 83783942, EuMember: true},
    {name: "United Kingdom", capital: "London", population: 67886011, EuMember: false},
    {name: "France", capital: "Paris", population: 65273511, EuMember: true},
    {name: "Italy", capital: "Rome", population: 60461826, EuMember: true},
    {name: "Spain", capital: "Madrid", population: 46754778, EuMember: true},
    {name: "Ukraine", capital: "Kyiv", population: 43733762, EuMember: false},
    {name: "Poland", capital: "Warsaw", population: 37846611, EuMember: true},
    {name: "Romania", capital: "Bucharest", population: 19237691, EuMember: true},
    {name: "Netherlands", capital: "Amsterdam", population: 17134872, EuMember: true},
    {name: "Belgium", capital: "Brussels", population: 11589623, EuMember: true},
    {name: "Czech Republic", capital: "Prague", population: 10708981, EuMember: false},
    {name: "Greece", capital: "Athens", population: 10423054, EuMember: true},
    {name: "Portugal", capital: "Lisbon", population: 10196709, EuMember: true},
    {name: "Sweden", capital: "Stockholm", population: 10099265, EuMember: true},
    {name: "Hungary", capital: "Budapest", population: 9660351, EuMember: true},
    {name: "Belarus", capital: "Minsk", population: 9449323, EuMember: false},
    {name: "Austria", capital: "Vienna", population: 9006398, EuMember: true},
    {name: "Serbia", capital: "Belgrade", population: 8737371, EuMember: false},
    {name: "Switzerland", capital: "Bern", population: 8654622, EuMember: false},
    {name: "Bulgaria", capital: "Sofia", population: 6948445, EuMember: true},
    {name: "Denmark", capital: "Copenhagen", population: 5792202, EuMember: true},
    {name: "Finland", capital: "Helsinki", population: 5540720, EuMember: true},
    {name: "Slovakia", capital: "Bratislava", population: 5459642, EuMember: true},
    {name: "Norway", capital: "Oslo", population: 5421241, EuMember: false},
    {name: "Ireland", capital: "Dublin", population: 4937786, EuMember: true},
    {name: "Croatia", capital: "Zagreb", population: 4105267, EuMember: true},
    {name: "Moldova", capital: "Chisinau", population: 4033963, EuMember: false},
    {name: "Bosnia and Herzegovina", capital: "Sarajevo", population: 3280819, EuMember: false},
    {name: "Albania", capital: "Tirana", population: 2877797, EuMember: false},
    {name: "Lithuania", capital: "Vilnius", population: 2722289, EuMember: true},
    {name: "North Macedonia", capital: "Skopje", population: 2083374, EuMember: false},
    {name: "Slovenia", capital: "Ljubljana", population: 2078938, EuMember: true},
    {name: "Latvia", capital: "Riga", population: 1886198, EuMember: true},
    {name: "Estonia", capital: "Tallinn", population: 1326535, EuMember: true},
    {name: "Montenegro", capital: "Podgorica", population: 628066, EuMember: false},
    {name: "Luxembourg", capital: "Luxembourg (city)", population: 625978, EuMember: true},
    {name: "Malta", capital: "Valletta", population: 441543, EuMember: true},
    {name: "Iceland", capital: "Reykjavik", population: 341243, EuMember: false},
    {name: "Andorra", capital: "Andorra la Vella", population: 77265, EuMember: false},
    {name: "Monaco", capital: "Monaco", population: 39242, EuMember: false},
    {name: "Liechtenstein", capital: "Vaduz", population: 38128, EuMember: false},
    {name: "San Marino", capital: "San Marino", population: 33931, EuMember: false},
    {name: "Holy See", capital: "Vatican City", population: 801, EuMember: false}
];

//function that generate random Integer between 0 and inputNumber - 1
const randIndex = inputNumber => {
    return Math.floor(Math.random() * inputNumber)
}

let randomCountry = countries[randIndex(countries.length)];

const headerEL = document.querySelector('h1');

const nameText = document.createElement('ul');
nameText.innerHTML = `Let's talk about ${randomCountry.name}: `

headerEL.appendChild(nameText);

const listCapital = document.createElement('li');
listCapital.innerHTML = `Capital: ${randomCountry.capital}`;
nameText.appendChild(listCapital);

const listPopulation = document.createElement('li');
listPopulation.innerHTML = `Population: ${randomCountry.population}`;
nameText.appendChild(listPopulation);

const listEU = document.createElement('li');
if (randomCountry.EuMember){
    listEU.innerHTML = `${randomCountry.name} is part of EU`
} else {
    listEU.innerHTML = `${randomCountry.name} is NOT part of EU`
}
nameText.appendChild(listEU);

//document.getElementById("name").innerHTML = `Let's talk about ${randomCountry.name}:`;
//document.getElementById("capital").innerHTML = `Capital: ${randomCountry.capital}`;
//document.getElementById("population").innerHTML = `Population: ${randomCountry.population}`;
//if (randomCountry.EuMember) {
//    document.getElementById("EuMembership").innerHTML = `${randomCountry.name} is part of EU`;
//} else {
//    document.getElementById("EuMembership").innerHTML = `${randomCountry.name} is NOT part of EU`;
//}