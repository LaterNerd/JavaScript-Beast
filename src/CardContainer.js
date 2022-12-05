import { Card } from './Card';
import challenges from './challenges';

export const CardContainer = () => {
	return (
		<div className='card-container'>
			{challenges.map((challenge, index) => {
				const {
					title,
					src,
					challengeDefinition,
					challengeCode,
					challengeAnswer,
				} = challenge;

				return (
					<Card
						key={index}
						title={title}
						src={src}
						challengeDefinition={challengeDefinition}
						challengeCode={challengeCode}
						challengeAnswer={challengeAnswer}
					/>
				);
			})}
		</div>
	);
};
