import React from 'react';
import Rating from '../Rating/Rating';
import { decodeURI } from '../../helper';

import './header.css'
import { DIFFICULTY_LEVELS } from '../../constants';

const createRating = (difficulty) => {
  return (
    <>
      {DIFFICULTY_LEVELS.map((_, idx) => {
        const difficultyIndex = DIFFICULTY_LEVELS.indexOf(difficulty);

        return (
          <Rating isValid={idx <= difficultyIndex} key={idx} />
        )
      })}
    </>
  )
};

const Header = ({
  questionCount,
  questionNumber,
  difficulty,
  category,
}) => {
  return (
    <div className={['header-container']}>
      <h1 className={['header-title']}>
        Question {questionNumber + 1} of {questionCount}
      </h1>
      <h2 className={['header-subtitle']}>
        {decodeURI(category)}
      </h2>
      {createRating(difficulty)}
    </div>
  )
}

export default Header;