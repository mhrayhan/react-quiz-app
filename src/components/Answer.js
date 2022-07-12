import React from 'react';
import Checkbox from './Checkbox';
import classes from '../styles/Answer.module.css'

const Answer = () => {
  return (
    <div className={classes.answers}>
      <Checkbox className={classes.answer} text='Test answer'></Checkbox>
    </div>
  );
};

export default Answer;