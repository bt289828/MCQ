import React from 'react'
import classnames from 'classnames'
import './button.css'

const Button = props => {
  const { value, answer, isAnswerButton, isNextButton, onClick, disabled=false } = props;

  const className = classnames(['base-button'], {
    [['answer-button']]: isAnswerButton,
    [['is-answer']]: (value === answer),
    [['next-button']]: isNextButton
  })

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {value}
    </button>
  )
}

export default Button;