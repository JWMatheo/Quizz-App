import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Combien de coup une tour level 13 doit mettre à un barbare level 14 pour le défaire ?',
			answerOptions: [
				{ answerText: '5', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
				{ answerText: '8', isCorrect: false },
			],
		},
		{
			questionText: 'Combien de squellettes sont générés par le cimetière ?',
			answerOptions: [
				{ answerText: '13', isCorrect: false },
				{ answerText: '14', isCorrect: true },
				{ answerText: '15', isCorrect: false },
				{ answerText: '16', isCorrect: false },
			],
		},
		{
			questionText: "Combien d'xp pour passer de lvl 9 à 10 ?",
			answerOptions: [
				{ answerText: '10 000', isCorrect: true },
				{ answerText: '12 500', isCorrect: false },
				{ answerText: '15 000', isCorrect: false },
				{ answerText: '17 500', isCorrect: false },
			],
		},
		{
			questionText: "Combien coute un sac d'or au shop ?",
			answerOptions: [
				{ answerText: '30', isCorrect: false },
				{ answerText: '50', isCorrect: false },
				{ answerText: '25', isCorrect: false },
				{ answerText: '60', isCorrect: true },
			],
		},
	];

    const [currentQuestion, setcurrentQuestion] = useState(0);

    const [ showScore, setShowScore] = useState(false);

    const [scored, setScored] = useState(0);

    const handleClickButton = (isCorrect) => {
        if (currentQuestion+1 < questions.length) {
            setcurrentQuestion(currentQuestion+1);
        } else {
            setShowScore(true);
        };
        if (isCorrect) {
            setScored(scored+1);
        }
        
    }
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>You scored {scored} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion+1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
                            <button onClick={() => handleClickButton(answerOption.isCorrect)}>{answerOption.answerText}</button>
                        ))}
					</div>
				</>
			)}
		</div>
	);
}