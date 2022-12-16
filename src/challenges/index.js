const challengeOneDefinition = `
Write a function that takes a string.

Then return it in lowercase with a question mark.

And if the string is a sentence, return a string with a 🤫 where the spaces used to be.

Here's an example of the input you're gonna use and what you should get back:
`;

const challengeTwoDefinition = `
Write a function that takes an array of objects.

Then return a new array of objects that looks prettier based on the info you have.

Each new object should have the properties: *title*, *videoLink*, and *posted*.

Here's an example of what each object should look like...
`;

const challengeThreeDefinition = `
Create a template literal that shows the Mr. Beast Burger Menu.

To do it, you'll have to...
1. Define the values on the menuItems object.
2. De-structure the object into three variables.
3. Create a template literal that displays the menu.
4. Use the de-structured variables in the template literal.

Here's an example of what the menu should look like...
`;

const challengeFourDefinition = `
Write a function that takes a string: *'burger,'* *'fries,'* *'soda,'* or *'cookie.'*

And returns the phrase **"FEAST 🦁 LIKE 🦁 A 🦁 BEAST!!!"**

If the string you enter's on the list, replace the lion with the right food emoji.

Otherwise, keep the default emoji as a lion.

Here's an example of what it should look like...
`;

const challengeFiveDefinition = `
You're on your way to MrBeastBurger.

And you're excited to try everything.

But first, you wanna start by trying all the burgers.

1. Create a new array to hold all your burgers.

2. Remove everything from the menuItems array that isn't a burger.

3. Update each object so it only has the item and price properties.

Here's an example of what it should look like...
`;

const challengeSixDefinition = `
You won a whole bunch of free burgers!

But how many?

Push a big red button and find out...

* Create a function that gives you a random number or burger emojis (between 1 -10) inside an array.

Here's an example of what it should look like...
`;

const challengeSevenDefinition = `
We need to make funny name tags for everyone in the video.

Everyone already wrote their name down on a list.

So we need to take each name and capitalize every other letter to make it look goofy.

* Create a function that takes in a string and returns it with EvErY oThEr lEtTeR CaPiTaLiZeD.

Here's an example of what it should look like...
`;

const challengeEightDefinition = `
There are three broken cash registers at MrBeast Burger.

When people pay, they show the wrong total.

Sometimes the cash register shows a weird number like $12.459 or $12395.95.

But we know no one ever orders anything over $100.00.

So figure out a way to tell if someone's total is correct.

* Create a function that takes in a string and returns a boolean that tells us if a total is valid.

Here's an example of what it should look like...
`;

const challengeNineDefinition = `
Mr. Beast is about to launch 100 new videos tomorrow.

He has all the titles picked out for each one. 

But they all have these weird uppercase issues.

So, he needs you to fix them fast!

* Create a function that takes a sentence and only has the first letter of each word in uppercase.

Here's an example of what it should look like...
`;

const challengeTenDefinition = `
Mr. Beast told everyone to get in line based on the length of their name.

The shortest name goes first, and the longest has to go last.

So anyone who's out of order will get eliminated.

* Create a function that takes an array of names and puts them in order from shortest to longest

Here's an example of what it should look like...
`;

const challengeElevenDefinition = `
Mr. Beast dropped you in a maze with 99 other people.

But before he left, he gave everyone a map and directions to get out.

The only problem is that he reversed all the directions.

And you have 30 minutes to get out.

* Create a function that takes in an array and reverses each string so that it's easy to read

Here's an example of what it should look like...
`;

const challengeOneCode = `
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

const challengeTwoCode = `
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

const challengeThreeCode = `
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

const challengeFourCode = `
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

const challengeFiveCode = `
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

const challengeSixCode = `
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

const challengeSevenCode = `
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

const challengeEightCode = `
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

const challengeNineCode = `
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

const challengeTenCode = `
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

const challengeElevenCode = `
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

const challenges = [
	{
		title: '100 Kids Vs 100 Adults For $500,000',
		videoID: '0CTp1a-aCUM',
		challengeDefinition: challengeOneDefinition,
		challengeCode: challengeOneCode,
		challengeAnswer: '',
	},
	{
		title: 'Last To Take Hand Off Jet, Keeps It!',
		videoID: 'kX3nB4PpJko',
		challengeDefinition: challengeTwoDefinition,
		challengeCode: challengeTwoCode,
		challengeAnswer: '',
	},
	{
		title: '$1 vs $1,000,000 Hotel Room!',
		videoID: 'iogcY_4xGjo',
		challengeDefinition: challengeThreeDefinition,
		challengeCode: challengeThreeCode,
		challengeAnswer: '',
	},
	{
		title: 'Survive 100 Days In Circle, Win $500,000',
		videoID: 'gHzuabZUd6c',
		challengeDefinition: challengeFourDefinition,
		challengeCode: challengeFourCode,
		challengeAnswer: '',
	},
	{
		title: 'I Hunted 100 People!',
		videoID: '65fN_OUawjk',
		challengeDefinition: challengeFiveDefinition,
		challengeCode: challengeFiveCode,
		challengeAnswer: '',
	},
	{
		title: 'Hydraulic Press Vs Lamborghini',
		videoID: 'h5NvTTOlOtI',
		challengeDefinition: challengeSixDefinition,
		challengeCode: challengeSixCode,
		challengeAnswer: '',
	},
	{
		title: 'I Survived A Plane Crash',
		videoID: 'jdMNoQE3mIQ',
		challengeDefinition: challengeSevenDefinition,
		challengeCode: challengeSevenCode,
		challengeAnswer: '',
	},
	{
		title: 'I Gave My 100,000,000th Subscriber An Island',
		videoID: '2isYuQZMbdU',
		challengeDefinition: challengeEightDefinition,
		challengeCode: challengeEightCode,
		challengeAnswer: '',
	},
	{
		title: '100 Girls Vs 100 Boys For $500,000',
		videoID: 'tVWWp1PqDus',
		challengeDefinition: challengeNineDefinition,
		challengeCode: challengeNineCode,
		challengeAnswer: '',
	},
	{
		title: 'I Didn’t Eat Food For 30 Days',
		videoID: 'vaIgyRoUkQI',
		challengeDefinition: challengeTenDefinition,
		challengeCode: challengeTenCode,
		challengeAnswer: '',
	},
	{
		title: "I Built Willy Wonka's Chocolate Factory!",
		videoID: 'Hwybp38GnZw',
		challengeDefinition: challengeElevenDefinition,
		challengeCode: challengeElevenCode,
		challengeAnswer: '',
	},
];

export default challenges;
