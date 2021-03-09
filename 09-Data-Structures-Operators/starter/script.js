'use strict';

// Data needed for first part of the section
const weekdays = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,

  // Creating a method that will take 2 arguments, then use the this keyword to point to the object calling the method (restaurant) and return the value of the elements of starterMenu and mainMenu at the index provided by the arguments.
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Creates a method that will take 4 arguments, then using the this keyword to point to the object calling the method (restaurant) and return the value of the elements of starterMenu and mainMenu at the index provided along with the provided values for the other 2 arguments composed inside of a string.
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = `20:00`, address }) {
    console.log(
      `Order receiver! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

////////////////////////////////////
// String Methods Practice
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// console.log(flights.split(`+`));

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith(`_Delayed`) ? `🔴` : ``}${type.replaceAll(
    `_`,
    ` `
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    `:`,
    `h`
  )})`.padStart(45);

  console.log(output);
}

/*
/////////////////////////////////
// Working With Strings - Part 3
console.log(`a+very+nice+string`.split(`+`));
console.log(`Jonas Scmedtmann`.split(` `));

// Split method splits a string into multiple elements of an array. It takes an argument the is the deciding point on where to split.
const [firstName, lastName] = `Jonas Scmedtmann`.split(` `);

// Join method joins multiple elements in an array into a string. It takes an argument which is inserted in between the element values after joining. If you don't provide any argument, it will separate them by commas. If you provide an empty string, it will join them all together with no spaces.
const newName = [`Mr.`, firstName, lastName.toUpperCase()].join(` `);
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(` `);
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(` `));
};

capitalizeName(`jessica ann smith davis`);
capitalizeName(`jonas schmedtmann`);

// Padding
const message = `Go to gate 23!`;
console.log(message.padStart(20, `+`).padEnd(30, `+`));
console.log(`Jonas`.padStart(20, `+`).padEnd(30, `+`));

// This takes number, converts it to a tring, creates a new variable composed of the last 4 positions of the string we just converted number to, then returns that new string (last) as the same length as the original string (str) using * to fill in the extra space at the beginning.
const maskCreditCard = function (number) {
  const str = number + ``;
  const last = str.slice(-4);
  return last.padStart(str.length, `*`);
};

console.log(maskCreditCard(64637836));
console.log(maskCreditCard(4337846386468875));
console.log(maskCreditCard(`334565484616516843513`));

// Repeat
const message2 = `Bad weather... All Departures Delayed... `;
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${`✈`.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);


/////////////////////////////
// Working With Strings - Part 2
const airline = `Tap Air Portugal`;

console.log(airline.toLowerCase());
console.log(`jonas`.toUpperCase());

// Fix capitalization in name
const passenger = `jOnAS`; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Check email
const email = `hello@jonas.io`;
const loginEmail = `  Hello@Jonas.Io \n`;

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Created a function to check a provided email against a correct email and return true if they are the same after converting to lower case and trimming.
// const fixedEmail = function (correctEmail, givenEmail) {
//   adjustedEmail = givenEmail.toLowerCase().trim();
//   return adjustedEmail === correctEmail;
// };

// console.log(fixedEmail(`soren@avery.com`, `  Soren@AVery.cOm`));

// Replacing
const priceGB = `288,97£`;
const priceUS = priceGB.replace(`£`, `$`).replace(`,`, `.`);
console.log(priceUS);

const announcement = `All passengers come to boarding door 23. Boarding door 23!`;

console.log(announcement.replace(`door`, `gate`));
// console.log(announcement.replaceAll(`door`, `gate`)); // Works now but not when video was made
console.log(announcement.replace(/door/g, `gate`));

// Booleans
const plane = `Airbus A320neo`;
console.log(plane.includes(`A320`));
console.log(plane.includes(`Boeing`));
console.log(plane.startsWith(`Air`));

if (plane.startsWith(`Airbus`) && plane.endsWith(`neo`)) {
  console.log(`Part of the NEW Airbus family`);
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes(`knife`) || baggage.includes(`gun`)) {
    console.log(`You are NOT allowed on board`);
  } else {
    console.log(`Welcome aboard!`);
  }
};
checkBaggage(`I have a laptop, some Food and a pocket Knife`);
checkBaggage(`Socks and camera`);
checkBaggage(`Got some snacks and a gun for protection`);


/////////////////////////////
// Working With Strings Part 1
// Use slice -1 to start from the right
const airline = `TAP Air Portugal`;
const plane = `A320`;

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(`B737`[2]);

console.log(airline.length);
console.log(`B737`.length);

console.log(airline.indexOf(`r`));
console.log(airline.lastIndexOf(`r`));
console.log(airline.lastIndexOf(`portugal`));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(` `)));
console.log(airline.slice(airline.lastIndexOf(` `) + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === `B` || s === `E`) console.log(`You got the middle seat 😬`);
  else console.log(`You got lucky 😎`);
};

checkMiddleSeat(`11B`);
checkMiddleSeat(`23C`);
checkMiddleSeat(`3E`);

console.log(new String(`jonas`));
console.log(typeof new String(`jonas`));

console.log(typeof new String(`jonas`).slice(1));


///////////////////////////////
// Summary: Which Data Structure To Use?
// Arrays or Sets: Simple list of values.
// Objects or Maps: Key/Value pairs.
// Arrays
Use when you need an ordered list of values that might contain duplicates
Use when you need to manipulate data

// Sets
Use when you need to work with unique values
Use when high-performance is really important
Use wto remove duplicates from arrays

// Objects
More traditional key/value store
Easier to write and access values with . and []
Use when you need to include functions(methods)
Use when working with JSON

// Maps
Better Performance
Keys can have any data type
Easy to iterate
Easy to compute size
Use when you simply need to map key to values
Use when you need keys that are not strings

/*
////////////////////////////////////
// Maps: Iteration
const question = new Map([
  [`question`, `What is the best programming lanaguage in the world?`],
  [1, `C`],
  [2, `Java`],
  [3, `JavaScript`],
  [`correct`, 3],
  [true, `Correct`],
  [false, `Try again!`],
]);
console.log(question);

console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);

// Quiz app
console.log(question.get(`question`));
for (const [key, value] of question) {
  if (typeof key === `number`) console.log(`Answer ${key}: ${value}`);
}
const answer = 3;
console.log(answer);

console.log(question.get(question.get(`correct`) === answer));

// Convert map to array
console.log([...question]);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);

/////////////////////////////////////
// Maps
// Maps map values to keys, just like in objects, values are stored in key:value pairs.
// Maps keys can have any type.

const rest = new Map();
rest.set(`name`, `Classico Italiano`);
rest.set(1, `Firenze, Italy`);
console.log(rest.set(2, `Lisbon, Portugal`));

rest
  .set(`categories`, ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set(`open`, 11)
  .set(`close`, 23)
  .set(true, `We are open :D`)
  .set(false, `We are closed :(`);

console.log(rest.get(`name`));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get(open) && rest.get(close)));

console.log(rest.has(`categories`));
rest.delete(2);
// rest.clear();

const arr = [1, 2];
rest.set(arr, `Test`);
rest.set(document.querySelector(`h1`), `Heading`);
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

/////////////////////////////////////
// Sets
// Sets values have to be unique, no duplicates will be stored in the set.
// Sets do not have indexes, so there is no way of getting data out of a set.
// The main use of sets is to remove duplicate values of arrays.
const ordersSet = new Set([
  `Pasta`,
  `Pizza`,
  `Pizza`,
  `Risotto`,
  `Pasta`,
  `Pizza`,
]);
console.log(ordersSet);

console.log(new Set(`Jonas`));

console.log(ordersSet.size);
console.log(ordersSet.has(`Pizza`));
console.log(ordersSet.has(`Bread`));
ordersSet.add(`Garlic Bread`);
ordersSet.add(`Garlic Bread`);
ordersSet.delete(`Risotto`);
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
const staff = [`Waiter`, `Chef`, `Waiter`, `Manager`, `Chef`, `Waiter`];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set([`Waiter`, `Chef`, `Waiter`, `Manager`, `Chef`, `Waiter`]).size
);

console.log(new Set(`jonasschmedtmann`).size);

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Property ENTRIES is both KEYS and VALUES together
// ENTRIES creates an array of arrays containing the keys and values of each element
const entries = Object.entries(openingHours);
console.log(entries);

// Destructure entries into three variables, you use braces because you are destructuring the array of entries, and then curly braces because you are destructuring an array inside of an array to two other variables
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

/*
/////////////////////////////
// Optional Chaining

// Without Optional Chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);

// With Optional Chaining
// If restaurant.openingHours.mon exist, only then will .open be read
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = [`mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `sun`];
for (const day of days) {
  // We can use the NULLISH COALESCING OPERATOR to display the first value since the value will technically be undefined, it will return the value instead of moving on the the next value as if we had use the || OR OPERATOR
  const open = restaurant.openingHours[day]?.open ?? `closed`;
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? `Method does not exist`);
console.log(restaurant.orderRisotto?.(0, 1) ?? `Method does not exist`);

// Arrays
const users = [{ name: `Jonas`, email: `hello@jonas.io` }];

// These two below return the same result. The first one if more effienct and uses the Nullish Coalescing Operator. This checks if the users[0].name exists and if it does returns the value, if it doesn't it returns the right hand side operand or `User array empty`
console.log(users[0]?.name ?? `User array empty`);

if (users.length > 0) console.log(users[0].name);
else console.log(`user array empty`);

//////////////////////////////////////
// Looping Arrays: The for of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// We can call "item" anything we want, it basically represents the current element in each iteration of the loop
// This will loop through the menu variable we just created above and log each element to the console.
for (const item of menu) console.log(item);

// This creates two variables by looping through the arrays that menu.entries() creates and separating the index from the element and storing them in the decalred variables: i and el.
for (const [i, el] of menu.entries()) {
  console.log(`${i}: ${el}`);
}

// The entries() method looks at the index of each element an the element value
// This creates an array for each element in menu that contains 2 elements, the element index and the element value
// console.log([...menu.entries()]);

// restaurant.numGuests = 0;
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

////////////////////////////////////
// Nullish Coalescing Operator returns the right hand side operand if the left hand side is null or undefined. 
// // Nullish: null and undefined (NOT 0 or ``)
// const guestCorrenct = restaurant.numGuests ?? 10;
// console.log(guestCorrenct);


/////////////////////////////////
// Short Circuiting (&& ||)
console.log(`---- OR ----`);
// Or operator can use ANY data type, return ANY data type, short-circuiting
// Or operator will return the first truthy value or the last value if all of them are falsy
// And operator will return the first falsy values, or the last value if all of them are truthy
console.log(3 || `Jonas`);
console.log(`` || `Jonas`);
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || `` || `Hello` || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log(`---- AND ----`);
console.log(0 && `Jonas`);
console.log(7 && `Jonas`);

console.log(`Hello` && 23 && null && `jonas`);

if (restaurant.orderPizza) {
  restaurant.orderPizza(`mushrooms`, `spinach`);
}

restaurant.orderPizza && restaurant.orderPizza(`mushrooms`, `spinach`);

////////////////////////
// Rest Pattern and Parameters

// SPREAD, because on RIGHT side of = (assignment operator)
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// Rest element must be the last element
// Rest pattern can be used where we would write variables names separated by commas, like in the functions arguments.
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  return console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza(`mushrooms`, `onion`, `olives`, `spinach`);
restaurant.orderPizza(`mushrooms`);

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// Declaring a new array (newArr) and then using the spread operator (...) to include all of the values from the array arr
const newArr = [1, 2, ...arr];
console.log(newArr);

// The spread operator targets the individual elements of an array, instead of the whole array as one.
console.log(...newArr);
console.log(1, 2, 7, 8, 9);

// Declare a new array (newMenu) that takes all of the elements from mainMenu and adds a new element (`Gnocci)
const newMenu = [...restaurant.mainMenu, `Gnocci`];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT OBJECTS
const str = `Jonas`;
const letters = [...str, ` `, `S.`];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedtmann`); // Won't work because we are not passing arguments into a function nor building a new array.

// Declaring array (ingredients) that will take three inputs from the prompt screen and store them as elements in the array ingredients
const ingredients = [
  // prompt(`Let's make pasta! Ingredient 1?`),
  // prompt(`Let's make pasta! Ingredient 2?`),
  // prompt(`Let's make pasta! Ingredient 3?`),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: `Guiseppe` };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = `Ristorante Roma`;
console.log(restaurantCopy.name);
console.log(restaurant.name);

// Calling the method declared above and providing all of the values needed for the method.
restaurant.orderDelivery({
  time: `22:30`,
  address: `Via del Sole, 21`,
  mainIndex: 2,
  starterIndex: 2,
});

// Calling the method declared above and providing 2 of the values needed, the other values will be filled in by their default values at the time of the method declaration
restaurant.orderDelivery({
  address: `Via del Sole, 21`,
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// How to declare new variables that will inherit the values of the previously declared variables
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

/////////////////////////////////
// Destructuring Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main]; // Switching values of main and secondary by destructuring. Does not require the empty space in between.
console.log(main, secondary);

// Declaring new variables and the values by using the order function above and passing in the arguments of 2 and 0 to use as the index for starterMenu and mainMenu
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

Destructuring Arrays
 Destructuring - a way of unpacking values from an Array or an object, into separate variables. Break down a data structure into a smaller data structur or variable.


 Destructuring Objects


//////////////////////////////////////////
// Coding Challenge #1

// const printGoals = function (...names) {
//   for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
//   }
//   console.log(names.length);
// };

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldplayers] = players1;
console.log(gk, fieldplayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, `Thiago`, `Coutinho`, `Perisic`];
console.log(players1Final);

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const team1 = game.odds[0];
const draw = game.odds[1];
const team2 = game.odds[2];

team1 < team2 && console.log(`Team 1 is more likely to win`);

printGoals(`Davies`, `Muller`, `Lewandowski`, `Kimmich`);
printGoals(...game.scored);

//////////////////////////////////////////
Coding Challenge #2

const  = game.scored.entries();
console.log(scorers);

#1
for (const [goal, scorer] of game.scored.entries()) {
  console.log(`Goal ${goal + 1}: ${scorer}`);
}

// let totalOdds = 0;

// #2
const oddsValues = Object.values(game.odds);
console.log(oddsValues);
let average = 0;
// console.log(oddsValues);

for (const odd of oddsValues) average += odd;
average /= oddsValues.length;
console.log(average);

// #3
const oddEntries = Object.entries(game.odds);
// console.log(oddEntries);

for (const [team, teamOdds] of oddEntries) {
  const teamStr = team === `x` ? `draw` : `victory ${game[team]}: `;
  console.log(`Odd of ${teamStr} ${teamOdds}`);
}

// Bonus
const scorers = {};

for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

console.log(scorers);

////////////////////
Extra shit I didn't need for part 3 of the coding challenge #2
const [team1, team2] = Object.values(game);
console.log(team1, team2);

for (const [team, teamOdds] of oddEntries) {
  console.log(`Odds of victory ${team}: ${teamOdds}`);
}

const [team, teamOdds] = Object.values(oddEntries);
console.log(teamOdds);

console.log(`Odds of victory ${team1}: ${game.odds.team1}`);
console.log(`Odds of draw: ${game.odds.x}`);
console.log(`Odds of victory ${team2}: ${game.odds.team2}`);

console.log(teamOdds);
console.log(totalOdds);

///////////////////////////////////
// Coding Challenge #3

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
console.log(gameEvents);
gameEvents.delete(64);
console.log(gameEvents);

// 3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// To be more specific
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// 4.
// How I did it on my own.
for (const [key, value] of gameEvents) {
  let display = ``;
  key <= 45
    ? (display = `[FIRST HALF] ${key}: ${value}`)
    : (display = `[SECOND HALF] ${key}: ${value}`);
  console.log(display);
}

// How Jonas did it.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
*/
