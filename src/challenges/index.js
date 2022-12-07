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

const challengeOneCode = `
// input: JIMMY!
//  - output: jimmy!?

// input: ARE YOU MR. BEAST!
//  - output: are 🤫 you 🤫 mr. 🤫 beast?


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
	videoLink: 'https://www.youtube.com/embed/0CTp1a-aCUM',
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
];

export default challenges;
