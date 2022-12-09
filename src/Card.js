import ReactMarkdown from 'react-markdown';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useState } from 'react';
import objectInspect from 'object-inspect';
import { atomone } from '@uiw/codemirror-theme-atomone';

const originalConsoleLog = console.log;
const originalConsoleError = console.error;

const youtubeEmbedLink = 'https://www.youtube.com/embed/';

const formatArrayItemsIntoString = (array) => {
	const combineItemsIntoNewArray = (previousArray, arrayElement) => {
		const newArray = [...previousArray, objectInspect(arrayElement)];
		return newArray;
	};

	const newArrayOfItems = array.reduce(combineItemsIntoNewArray, []);

	const arrayItemsIntoString = newArrayOfItems.join(' ');

	return arrayItemsIntoString;
};

export const Card = ({
	title,
	videoID,
	challengeDefinition,
	challengeCode,
}) => {
	const [code, setCode] = useState();
	const [result, setResult] = useState('');
	const [error, setError] = useState('');

	console.log = (...args) => {
		const consoleArgsAsString = formatArrayItemsIntoString(args);
		setResult(consoleArgsAsString);
		originalConsoleLog.call(console, ...args);
	};

	console.error = (...args) => {
		const consoleArgsAsString = formatArrayItemsIntoString(args);
		setError(consoleArgsAsString);
		originalConsoleError.call(console, ...args);
	};

	const runCode = () => {
		if (code === '') {
			return;
		}

		try {
			new Function(code)();
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<div className='card'>
			<h2 className='title text-center'>{title}</h2>
			<div className='iframe-container'>
				<iframe
					width='560'
					height='315'
					src={`${youtubeEmbedLink}${videoID}`}
					title='YouTube video player'
					frameborder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowfullscreen
				/>
			</div>
			<div className='card-content'>
				<h3 className='title challenge-title'>Challenge</h3>

				<ReactMarkdown children={challengeDefinition} />
				<br />
				<div className='editor'>
					<div>
						<CodeMirror
							value={challengeCode}
							extensions={javascript({ jsx: true })}
							theme={atomone}
							onChange={(editor) => {
								if (result !== '') {
									setResult('');
									setError('');
								}
								setCode(editor);
							}}
						/>
					</div>
					{result && result !== undefined ? (
						<div className='text-center result-success'>RESULT: {result}</div>
					) : null}
					{error && !result ? (
						<div className='text-center result-success'>{error}</div>
					) : null}
					<button
						onClick={() => {
							runCode();
						}}
					>
						RUN CODE
					</button>
				</div>
			</div>
		</div>
	);
};
