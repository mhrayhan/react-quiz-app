import React from 'react';
import Button from './Button';
import Form from './Form';
import TextInput from './TextInput';

const LoginForm = () => {
  return (
    <Form style={{ height: "330px" }}>
      <TextInput type='text' placeholder='Enter email'></TextInput>
      <TextInput type='password' placeholder='Enter password'></TextInput>
      <Button type="submit">
        <span>Submit Now</span>
      </Button>
      <div className="info">
        Don't have an account? Signup instead.
      </div>
    </Form>
  );
};

export default LoginForm;