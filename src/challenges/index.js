const challengeOneDefinition = `
Write a function that takes a string.

Then return it in lowercase with a question mark.

And if the string is a sentence, return a string with a 🤫 where the spaces used to be.

Here's an example of the input you're gonna use and what you should get back:
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

const challenges = [
	{
		title: '100 Kids Vs 100 Adults For $500,000',
		src: 'https://i.ytimg.com/vi/0CTp1a-aCUM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCDGwO95PoEV4oKl8xxN8Nul7hGHA',
		challengeDefinition: challengeOneDefinition,
		challengeCode: challengeOneCode,
		challengeAnswer: '',
	},
];

export default challenges;
