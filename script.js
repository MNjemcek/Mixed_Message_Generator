let countries = [
    {name: "Russia", capital: "Moscow", population: 145934462, EuMember: false, flagURL:"https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/800px-Flag_of_Russia.svg.png"},
    {name: "Germany", capital: "Berlin", population: 83783942, EuMember: true, flagURL:"https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png"},
    {name: "United Kingdom", capital: "London", population: 67886011, EuMember: false, flagURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_the_United_Kingdom_%282-3%29.svg/1200px-Flag_of_the_United_Kingdom_%282-3%29.svg.png"},
    {name: "France", capital: "Paris", population: 65273511, EuMember: true, flagURL: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/640px-Flag_of_France.svg.png"},
    {name: "Italy", capital: "Rome", population: 60461826, EuMember: true, flagURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/1500px-Flag_of_Italy.svg.png"},
    {name: "Spain", capital: "Madrid", population: 46754778, EuMember: true, flagURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/2560px-Flag_of_Spain.svg.png"},
    {name: "Ukraine", capital: "Kyiv", population: 43733762, EuMember: false, flagURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/1280px-Flag_of_Ukraine.svg.png"},
    {name: "Poland", capital: "Warsaw", population: 37846611, EuMember: true, flagURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/2560px-Flag_of_Poland.svg.png"},
    {name: "Romania", capital: "Bucharest", population: 19237691, EuMember: true, flagURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/2560px-Flag_of_Romania.svg.png"},
    {name: "Netherlands", capital: "Amsterdam", population: 17134872, EuMember: true, flagURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1200px-Flag_of_the_Netherlands.svg.png"},
    {name: "Belgium", capital: "Brussels", population: 11589623, EuMember: true, flagURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/1182px-Flag_of_Belgium.svg.png"},
    {name: "Czech Republic", capital: "Prague", population: 10708981, EuMember: false, flagURL:"https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Czechoslovakia_%28bordered%29.svg"},
    {name: "Greece", capital: "Athens", population: 10423054, EuMember: true, flagURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/600px-Flag_of_Greece.svg.png?20160309091801"},
    {name: "Portugal", capital: "Lisbon", population: 10196709, EuMember: true, flagURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/2560px-Flag_of_Portugal.svg.png"},
    {name: "Sweden", capital: "Stockholm", population: 10099265, EuMember: true, flagURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/2560px-Flag_of_Sweden.svg.png"},
    {name: "Hungary", capital: "Budapest", population: 9660351, EuMember: true, flagURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_Hungary.svg/1280px-Flag_of_Hungary.svg.png"},
    {name: "Belarus", capital: "Minsk", population: 9449323, EuMember: false, flagURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/2560px-Flag_of_Belarus.svg.png"},
    {name: "Austria", capital: "Vienna", population: 9006398, EuMember: true, flagURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/1024px-Flag_of_Austria.svg.png"},
    {name: "Serbia", capital: "Belgrade", population: 8737371, EuMember: false, flagURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/2560px-Flag_of_Serbia.svg.png" },
    {name: "Switzerland", capital: "Bern", population: 8654622, EuMember: false, flagURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/512px-Flag_of_Switzerland.svg.png"},
    {name: "Bulgaria", capital: "Sofia", population: 6948445, EuMember: true, flagURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/1024px-Flag_of_Bulgaria.svg.png"},
    {name: "Denmark", capital: "Copenhagen", population: 5792202, EuMember: true, flagURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/1280px-Flag_of_Denmark.svg.png"},
    {name: "Finland", capital: "Helsinki", population: 5540720, EuMember: true, flagURL:"https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg"},
    {name: "Slovakia", capital: "Bratislava", population: 5459642, EuMember: true, flagURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Slovakia.svg/800px-Flag_of_Slovakia.svg.png"},
    {name: "Norway", capital: "Oslo", population: 5421241, EuMember: false, flagURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Flag_of_Norway_%283-2%29.svg/1280px-Flag_of_Norway_%283-2%29.svg.png"},
    {name: "Ireland", capital: "Dublin", population: 4937786, EuMember: true, flagURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/2560px-Flag_of_Ireland.svg.png"},
    {name: "Croatia", capital: "Zagreb", population: 4105267, EuMember: true, flagURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/1024px-Flag_of_Croatia.svg.png"},
    {name: "Moldova", capital: "Chisinau", population: 4033963, EuMember: false, flagURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Moldova.svg/2560px-Flag_of_Moldova.svg.png"},
    {name: "Bosnia and Herzegovina", capital: "Sarajevo", population: 3280819, EuMember: false, flagURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/1200px-Flag_of_Bosnia_and_Herzegovina.svg.png"},
    {name: "Albania", capital: "Tirana", population: 2877797, EuMember: false, flagURL:"https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg"},
    {name: "Lithuania", capital: "Vilnius", population: 2722289, EuMember: true, flagURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Lithuania.svg/2560px-Flag_of_Lithuania.svg.png"},
    {name: "North Macedonia", capital: "Skopje", population: 2083374, EuMember: false, flagURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_proposal_of_Macedonia_-_8.svg/360px-Flag_proposal_of_Macedonia_-_8.svg.png"},
    {name: "Slovenia", capital: "Ljubljana", population: 2078938, EuMember: true, flagURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Slovenia.svg/1200px-Flag_of_Slovenia.svg.png"},
    {name: "Latvia", capital: "Riga", population: 1886198, EuMember: true, flagURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Latvia.svg/800px-Flag_of_Latvia.svg.png?20180325202043"},
    {name: "Estonia", capital: "Tallinn", population: 1326535, EuMember: true, flagURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/2560px-Flag_of_Estonia.svg.png"},
    {name: "Montenegro", capital: "Podgorica", population: 628066, EuMember: false, flagURL:"https://www.worldatlas.com/r/w1200/img/flag/me-flag.jpg"},
    {name: "Luxembourg", capital: "Luxembourg (city)", population: 625978, EuMember: true, flagURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Luxembourg.svg/2560px-Flag_of_Luxembourg.svg.png"},
    {name: "Malta", capital: "Valletta", population: 441543, EuMember: true, flagURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Malta.svg/800px-Flag_of_Malta.svg.png?20220412105346"},
    {name: "Iceland", capital: "Reykjavik", population: 341243, EuMember: false, flagURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/800px-Flag_of_Iceland.svg.png?20200111183240"},
    {name: "Andorra", capital: "Andorra la Vella", population: 77265, EuMember: false, flagURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Andorra.svg/1024px-Flag_of_Andorra.svg.png"},
    {name: "Monaco", capital: "Monaco", population: 39242, EuMember: false, flagURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Flag_of_Monaco.svg/1280px-Flag_of_Monaco.svg.png"},
    {name: "Liechtenstein", capital: "Vaduz", population: 38128, EuMember: false, flagURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Flag_of_Liechtenstein.svg/1280px-Flag_of_Liechtenstein.svg.png"},
    {name: "San Marino", capital: "San Marino", population: 33931, EuMember: false, flagURL:"https://upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_San_Marino.svg"},
    {name: "Holy See", capital: "Vatican City", population: 801, EuMember: false, flagURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_the_Vatican_City.svg/2048px-Flag_of_the_Vatican_City.svg.png"}
];

//function that generate random Integer between 0 and inputNumber - 1
const randIndex = inputNumber => {
    return Math.floor(Math.random() * inputNumber)
}

const generateOutput = () => {

    const randomCountry = countries[randIndex(countries.length)];

    document.querySelector('img').src = randomCountry.flagURL;

    const countryElement = document.getElementById("country");

    countryElement.innerHTML = `Let's talk about ${randomCountry.name}: `

    const listCapital = document.createElement('li');
    listCapital.innerHTML = `Capital: ${randomCountry.capital}`;
    countryElement.appendChild(listCapital);

    const listPopulation = document.createElement('li');
    listPopulation.innerHTML = `Population: ${randomCountry.population.toLocaleString()}`;
    countryElement.appendChild(listPopulation);

    const listEu = document.createElement('li');
    if (randomCountry.EuMember){
        listEu.innerHTML = `${randomCountry.name} is part of EU`
    } else {
        listEu.innerHTML = `${randomCountry.name} is NOT part of EU`
    };
    countryElement.appendChild(listEu);

}

const buttonClick = document.getElementById("generateButton");

buttonClick.addEventListener('click', generateOutput);