import React, { useState, useEffect } from 'react'
import classnames from 'classnames'
import './question.css'
import Button from '../Button/Button';
import { decodeURI, randomizeArray } from '../../helper';

const Question = (props) => {
  const {
    type,
    question,
    incorrectAnswers,
    nextQuestion,
    handleScore,
    questionCount,
    currentNumber
  } = props;

  const [correctAnswer, setCorrectAnswer] = useState()
  const [mixedAnswers, setMixedAnswers] = useState([])
  const [selectedAnswer, setSelectedAnswer] = useState()
  
  const handleAnswer = (answer) => {
    // If an answer is already selected, don't update the selected answer
    if (selectedAnswer) return
    setSelectedAnswer(answer);
  }

  const handleNext = () => {
    if (correctAnswer === selectedAnswer) {
      handleScore()
    }
    nextQuestion()
    setSelectedAnswer(null)
  }

  const displayResult = () => {
    const isCorrectAnswer = correctAnswer === selectedAnswer;
    const buttonText = currentNumber === questionCount ? 'Check Score' : 'Next Question'

    return (selectedAnswer &&
      <div className={['result-container']}>
        <h3 className={classnames(['message' ], { [['correct-answer'] ]: isCorrectAnswer }) }>
          {isCorrectAnswer ? 'Correct' : 'Sorry. Please try again.'}
        </h3>
        <Button isNextButton onClick={handleNext} value={buttonText} />
      </div>
    )
  }

  useEffect(() => {
    if (!props.correctAnswer || !incorrectAnswers) return

    setCorrectAnswer(props.correctAnswer)

    const randomizedAnswers = randomizeArray([...incorrectAnswers, correctAnswer]);

    setMixedAnswers(randomizedAnswers);
}, [correctAnswer, incorrectAnswers, props.correctAnswer])  
  
  return (
    <div className={['container']}>
      <div className={['content']}>
        {decodeURI(question)}
      </div>
      <div className={['answers']}>
        {mixedAnswers.map((answer, idx) => {
          const value = type === 'boolean'
            ? (answer === 'True' ? 'Yes' : 'No')
            : decodeURI(answer);
          
          return (
            <Button
              isAnswerButton
              key={idx}
              value={value}
              answer={selectedAnswer}
              onClick={() => handleAnswer(answer)}
              disabled={selectedAnswer}
              correctAnswer={props.correctAnswer}
            />
          )
        })}
      </div>
      {displayResult()}
    </div>
  );
}

export default Question;