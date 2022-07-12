import React from 'react';
import Answer from '../Answer';
import MIniPlayer from '../MIniPlayer';
import ProgressBar from '../ProgressBar';

const Quiz = () => {
  return (
    <>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answer></Answer>
      <ProgressBar></ProgressBar>
      <MIniPlayer></MIniPlayer>
    </>
  );
};

export default Quiz;