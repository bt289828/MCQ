import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import classnames from 'classnames';
import './rating.css'


const Rating = ({ isValid }) => {
  return (
    <span className={classnames(['rating'], { [['is-valid']]: isValid })}>
      <FontAwesomeIcon icon={faStar} />
    </span>
  )
}

export default Rating;