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
You have yet to go to MrBeastBurger.

So you're excited to try everything.

But first, you wanna start by trying all the burgers.

1. Create a new array to hold all your burgers.

2. Remove everything from the menuItems array that isn't a burger.

3. Update each object so it only has the item and price properties.

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
		title: 'Hydraulic Press Vs Lamborghini',
		videoID: 'h5NvTTOlOtI',
		challengeDefinition: challengeFiveDefinition,
		challengeCode: challengeFiveCode,
		challengeAnswer: '',
	},
];

export default challenges;
