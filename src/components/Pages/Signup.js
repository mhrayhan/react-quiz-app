import React from 'react';
import Illustration from '../Illustration';
import SigupForm from '../SigupForm';

const Signup = () => {
  return (
    <>
      <h1>Create a account</h1>
      <div className="column">
        <Illustration></Illustration>
        <SigupForm></SigupForm>
      </div>
    </>
  );
};

export default Signup;