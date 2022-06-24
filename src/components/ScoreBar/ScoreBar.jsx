import React, { useState, useEffect } from 'react';
import './scorebar.css'
import { calulatePercent } from '../../helper';

const ScoreBar = ({
  score,
  questionCount,
  questionNumber
}) => {
  const [correctAnswersScore, setCorrectAnswersScore] = useState(0)
  const [completedAllScore, setCompletedAllScore] = useState(0)
  const [maximumScore, setMaximumScore] = useState(0)
  const [expectedScore, setExpectedScore] = useState(0)

  useEffect(() => {
    if (score !== undefined ) {
      const correctAnswers = calulatePercent(score, questionCount)
      const completedAnswers = calulatePercent(score, questionNumber)
      const maxAnswers = calulatePercent((questionCount - questionNumber + score), questionCount)
      
      setCorrectAnswersScore(correctAnswers)
      setCompletedAllScore(completedAnswers - correctAnswers)
      setMaximumScore(maxAnswers)
      setExpectedScore(maxAnswers - correctAnswers)
    }
  }, [score, questionCount, questionNumber])
  
  return (
    <div className={['score-bar-container']}>
      <div className={['stats-container']}>
        <div className={['stats']}>Score: {correctAnswersScore}%</div>
        <div className={['stats']}>Max: {maximumScore}%</div>
      </div>
      <div className={['score-bar']}>
        <div className={['correct-score-bar']} style={{ width: `${correctAnswersScore}%` }}/>
        <div className={['completed-score-bar']} style={{ width: `${completedAllScore}%` }} />
        <div className={['expected-score-bar']} style={{ width: `${expectedScore}%` }} />
      </div>
    </div>
  )
}

export default ScoreBar;