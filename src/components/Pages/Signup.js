import React from 'react';
import Form from '../Form';
import Illustration from '../Illustration';
import classes from '../../styles/Signup.module.css'
import TextInput from '../TextInput';
import Checkbox from '../Checkbox';
import Button from '../Button';
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
      <h1>Create a account</h1>
      <div className="column">
        <Illustration></Illustration>
        <Form className={`${classes.signup}`}>
          <TextInput type='text' placeholder='Enter name' icon='person'></TextInput>
          <TextInput type='text' placeholder='Enter email' icon='alternate_email'></TextInput>
          <TextInput type='password' placeholder='Enter password' icon='lock'></TextInput>
          <TextInput type='password' placeholder='Confirm password' icon='lock_clock'></TextInput>
          <Checkbox text='I agree to the terms &amp; Conditions.'></Checkbox>
          <Button> <span> Submit Now</span></Button>
          <div className="info">
            Already have an account? <Link to="/login">Login</Link> instead.
          </div>
        </Form>
      </div>
    </>
  );
};

export default Signup;