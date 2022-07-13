import React from 'react';
import classes from '../styles/Videos.module.css'
import Video from './Video';
import { Link } from 'react-router-dom'

const Videos = () => {
  return (
    <div className={classes.videos}>
      <Link to='/quiz'><Video></Video></Link>
      <Link to='/quiz'><Video></Video></Link>
      <Link to='/quiz'><Video></Video></Link>
      <Link to='/quiz'><Video></Video></Link>
    </div>
  );
};

export default Videos;