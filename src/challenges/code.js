export const challengeOneCode = `
// input: JIMMY!
//  - output: jimmy!?

// input: ARE YOU MR. BEAST!?
//  - output: are 🤫 you 🤫 mr. 🤫 beast!??


function quietQuestion() {
    // write your code here

}



// function should return 'bruh 🤫 why?'
console.log(quietQuestion('bruh why'));
`;

export const challengeTwoCode = `
/*
output: an array of objects that look like this

{
	title: '100 Kids Vs 100 Adults For $500,000',
	videoLink: 'https://youtu.be/0CTp1a-aCUM',
	posted: 'Sat Dec 03 2022
}

*/


const mrBeastVideos = [
{
	title: '100 Kids Vs 100 Adults For $500,000',
	id: '0CTp1a-aCUM',
	uploadDate: '2022-12-03T08:00:00.000Z',
	views: '44,106,024'
},
{
	title: 'Last To Take Hand Off Jet, Keeps It!',
	id: 'kX3nB4PpJko',
	uploadDate: '2022-11-12T08:00:00.000Z',
	views: '66,828,620'
},
{
	title: '$1 vs $1,000,000 Hotel Room!',
	id: 'iogcY_4xGjo',
	uploadDate: '2022-10-22T07:00:00.000Z',
	views: '97,435,672'
},
{
	title: 'Survive 100 Days In Circle, Win $500,000',
	id: 'gHzuabZUd6c',
	uploadDate: '2022-09-24T07:00:00.000Z',
	views: '81,414,952'
},
{
	title: 'I Hunted 100 People!',
	id: '65fN_OUawjk',
	uploadDate: '2022-09-03T07:00:00.000Z',
	views: '57,160,192'
},
];


function prettyVideoData() {
    // write your code here

}


// function should return an array of 5 objects 
// that look like the example above
console.log(prettyVideoData(mrBeastVideos)[0]);
`;

export const challengeThreeCode = `
/*
output: a string that look like this...

Welcome to Beast Burger!!!

Meals:
Chicken Sandwich Combo - 🍔🐓🍟🥤
Beast Style Burger Combo - 🍔🦁🍟🥤

Burgers:
Chris Style - 🍔🍟
Beast Style - 🍔🦁
Karl's Grilled Cheese - 🥪
Chandler Style - 🍔🧀

Dessert:
Chocolate Chip Cookie - 🍪

*/


// write your code here
const menuItems = {
    meals: {
        0: "",
        1: ""
    },
    burgers: {
        0: "",
        1: "",
        2: "",
        3: "",
    },
    dessert: ""
};


// template literal ?
let mrBeastBurgerMenu;


// template literal returns a string
console.log(mrBeastBurgerMenu);
`;

export const challengeFourCode = `
/*

// input: 'burger'
	- output: FEAST 🍔 LIKE 🍔 A 🍔 BEAST!!!
// input: 'fries'
 	- output: FEAST 🍟 LIKE 🍟 A 🍟 BEAST!!!
// input: 'soda'
 	- output: FEAST 🥤 LIKE 🥤 A 🥤 BEAST!!!
// input: 'cookie'
 	- output: FEAST 🍪 LIKE 🍪 A 🍪 BEAST!!!

*/

function feast() {
	// write your code here

}


// test your code by changing the argument
console.log(feast('cookies'));
`;

export const challengeFiveCode = `
/*

output: an array of objects that look like this...

{
	item: 'Beast Style - 🍔🦁',
	price: 10.3,
}

*/


const menuItems = [
	{
		item: 'Chicken Sandwich Combo - 🍔🐓🍟🥤',
		category: 'combo',
		price: 15.75,
	},
	{
		item: 'Chandler Style - 🍔🧀',
		category: 'burger',
		price: 10.3,
	},
	{
		item: 'Chocolate Chip Cookie - 🍪',
		category: 'dessert',
		price: 3.1,
	},
	{
		item: 'Crinkle Fries - 🍟',
		category: 'side',
		price: 4.65,
	},
	{
		item: 'Chris Style - 🍔🍟',
		category: 'burger',
		price: 11.35,
	},
	{
		item: 'Beast Style Fries - 🍟',
		category: 'side',
		price: 7,
	},
	{
		item: 'Beast Style - 🍔🦁',
		category: 'burger',
		price: 10.3,
	},
	{
		item: 'Beast Style Burger Combo - 🍔🦁🍟🥤',
		category: 'combo',
		price: 16.3,
	},
	{
		item: "Karl's Grilled Cheese - 🥪",
		category: 'burger',
		price: 6,
	},
];


function buyBurgers() {
	// write your code here

}


let burgersToTry;


// returns an array of objects
console.log(burgersToTry);
`;

export const challengeSixCode = `
/*

output: a random array of burgers emojis...

ex: #1
[ '🍔' ]

ex: #2
[
	'🍔', '🍔', '🍔',
	'🍔', '🍔', '🍔',
	'🍔', '🍔', '🍔'
]

ex: #3
[ '🍔', '🍔', '🍔', '🍔' ]

*/


function burgerLotto() {
	// write your code here

}


// returns a random array of burger emojis
console.log(burgerLotto());
`;

export const challengeSevenCode = `
/*

// input: Jimmy
//  - output: JiMmY


// input: Karl
//  - output: KaRl


// input: Nolan
//  - output: NoLaN

*/


function funnyNameTag() {
	// write your code here

}


// returns the string MaRiO
console.log(funnyNameTag('Mario'));
`;

export const challengeEightCode = `
/*

// input: '$6.02'
//  - output: true


// input: '$101.07'
//  - output: false


// input: '$22.309'
//  - output: false

*/


function verifyTotal() {
	// write your code here

}


// returns false
console.log(verifyTotal('$1300.87'));
`;

export const challengeNineCode = `
/*

// input: 'i HuNTed 100 PeOPle!'
//  - output: 'I Hunted 100 People!'


// input: '100 kiDs vs 100 AdUlts fOr $500,000'
//  - output: '100 Kids Vs 100 Adults For $500,000'


// input: 'LAst tO TAKe Hand OFF JeT, KeEps iT!'
//  - output: 'Last To Take Hand Off Jet, Keeps It!'

*/


function titleCaseTitle(text) {
	// write your code here

}


// returns 'I Survived A Plane Crash'
console.log(titleCaseTitle('i surViVed a plAnE CraSH'));
`;

export const challengeTenCode = `
/*
output: an array of names sorted by length

['Kai', 'Lily', 'Naomi', 'Olivia' ]

*/

const names = ['Olivia', 'Naomi', 'Kai', 'Lily'];

function sortNamesByLength(array) {
	// write your code here
}


// function should return an array of names 
// that look like the example above
console.log(sortNamesByLength(names));
`;

export const challengeElevenCode = `
/*

// input: [".gniyas m'I tahw tuo dnif ot em esrever"]
// output:["reverse me to find out what I'm saying."]

*/


const directions = [
	"rood terces a s'erehT",
	".ezam eht fo elddim eht ni",
	"nosrep tsrif ehT",
	"hguorht klaw ot",
	".sniw",
];


function reverseDirections(array) {
	// write your code here

}


// return an array of readable directions 
console.log(reverseDirections(directions));
`;

export const challengeTwelveCode = `
/*

// input:

[
	'Throw an Axe at A Target 🪓',
	'Catch a Chicken Tender 🐓',
	'Rock Wall 🧗‍♀️',
	'Basket In A Basket 🏀',
	'Swim 5 Laps 🏊‍♀️',
	'Score A Soccer Goal ⚽️',
	'Cornhole 🌽',
];

// output:

Challenges:
#1 Throw an Axe at A Target 🪓
#2 Catch a Chicken Tender 🐓
#3 Rock Wall 🧗‍♀️
#4 Basket In A Basket 🏀
#5 Swim 5 Laps 🏊‍♀️
#6 Score A Soccer Goal ⚽️
#7 Cornhole 🌽

*/


const challenges = [
	'Find Waldo 🔎',
	'Buy Flowers For A Stranger 💐',
	'Obstacle Course 🚗',
	'Pick A Lock 🔒',
	'Break 2X4 🥋',
	'Make A Hole In One ⛳️',
	'Kick A Field Goal 🏈',
];


function createAdventureChecklist() {
	// write your code here

}


// return a string with all the challenges listed 
console.log(createAdventureChecklist(challenges));
`;

export const challengeThirteenCode = `
/*

// input: "1 :hamSandwich:"
// output: "1 hamSandwich"

// input: "1 :chickenSandwichCombo:"
// output: "1 🍔🐓🍟🥤 1 🥪"

// input: "I want 2 :burger: 1 :fries:"
// output: "I want 2 🍔 1 🍟"

*/


const menuEmojis = {
	"burger": "🍔",
	"fries": "🍟",
	"cookie": "🍪",
	"chrisStyle": "🍔🍟",
	"beastStyle": "🍔🦁",
	"chandlerStyle": "🍔🧀",
	"karlGrilledCheese": "🥪",
	"chickenSandwichCombo": "🍔🐓🍟🥤",
	"beastStyleBurgerCombo": "🍔🦁🍟🥤",
};


function newOrder() {
	// write your code here
}


// return a string with all the challenges listed 
console.log(newOrder('I want 2 :burger: 1 :fries:'));
`;
