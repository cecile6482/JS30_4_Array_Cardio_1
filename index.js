'use strict';

// Quelques données 

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
];

const flavours = ['Chocolate Chip', 'Kulfi', 'Caramel Praline', 'Chocolate', 'Burnt Caramel', 'Pistachio', 'Rose', 'Sweet Coconut', 'Lemon Cookie', 'Toffeeness', 'Toasted Almond', 'Black Raspberry Crunch', 'Chocolate Brownies', 'Pistachio Almond', 'Strawberry', 'Lavender Honey', 'Lychee', 'Peach', 'Black Walnut', 'Birthday Cake', 'Mexican Chocolate', 'Mocha Almond Fudge', 'Raspberry'];

const people = ['Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William', 'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton',];

// Array.prototype.filter()
// 1. Filtrer la liste des inventeurs pour ceux qui sont nés dans les années 1500
const inventors_from_1500s = inventors.filter(({year}) => year >= 1500 && year < 1600);

console.table(inventors_from_1500s);

// Array.prototype.map()
// 2. Donner un tableau des noms et prénoms des inventeurs
const inventors_full_name = inventors.map(({first, last}) => first + ' ' + last);

console.log(inventors_full_name);

// Array.prototype.sort()
// 3. Trier les inventeurs par date de naissance, du plus ancien au plus jeune
const inventors_by_date = inventors.sort(({year: a}, {year: b}) => a - b);
    
console.table(inventors_by_date);

// Array.prototype.reduce()
// 4. Combien d'années tous les inventeurs ont-ils vécu ?
const total_years_lived = inventors.reduce(
    (currValue, {passed, year}) => currValue += (passed - year), 0
);
  
console.log(total_years_lived);

// 5. Trier les inventeurs par années vécues
const inventors_by_lifespan = inventors.sort(
    ({passed: aP, year: aY}, {passed: bP, year: bY}) => (aP - aY) - (bP - bY)
);
  
console.table(inventors_by_lifespan);

// 6. créer une liste de boulevards à Paris qui contiennent 'de' n'importe où dans le nom
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
/*
// Ce code sera exécuté directement depuis la console du navigateur
// après avoir clické sur le lien Wikipedia ci-dessus.

const blvd_with_de = Array.from(document.querySelectorAll('.mw-category a'))
    .map(({textContent}) => textContent)
    .filter((blvd) => blvd.includes('de'))
    
*/

// 7. Exercice
// Trier les personnes alphabétiquement par nom de famille
const people_by_last_name = people.sort((a, b) => a.split(', ')[0] < b.split(', ')[0] ? -1 : 1);
    
console.log(people_by_last_name);

// 8. Exercice 2
// Résumer
const data = [
'car',
'car',
'truck',
'truck',
'bike',
'walk',
'car',
'van',
'bike',
'walk',
'car',
'van',
'car',
'truck'
];

const data_instance_count = data.reduce((tallyObject, item) => {
    tallyObject[item] ? tallyObject[item]++ : tallyObject[item] = 1;
    return tallyObject;
    }, {}

);

console.dir(data_instance_count);
