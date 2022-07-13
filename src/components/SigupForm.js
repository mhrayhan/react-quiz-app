import React, { useState } from 'react';
import Button from './Button';
import Checkbox from './Checkbox';
import Form from './Form';
import TextInput from './TextInput';
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';


const SigupForm = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState('');
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const navigate = useNavigate();

  const { signup } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    //validation
    if (password !== confirmPassword) {
      return setError('password do not match!')
    }

    try {
      setError('')
      setLoading(true)
      await signup(email, password, userName)
      navigate('/')
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError('Failed to create a accout!')
    }

  }

  return (
    <Form style={{ height: '500px' }} onSubmit={handleSubmit}>
      <TextInput
        type='text'
        required
        placeholder='Enter name'
        icon='person'
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      ></TextInput>

      <TextInput
        type='text'
        required
        placeholder='Enter email'
        icon='alternate_email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></TextInput>

      <TextInput
        type='password'
        required
        placeholder='Enter password'
        icon='lock'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></TextInput>

      <TextInput
        type='password'
        required
        placeholder='Confirm password'
        icon='lock_clock'
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      ></TextInput>

      <Checkbox
        text='I agree to the terms &amp; Conditions.'
        required
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
      ></Checkbox>

      <Button type='submit' disabled={loading}>
        <span> Submit Now</span>
      </Button>

      {error && <p className='error'>{error}</p>}

      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form >
  );
};

export default SigupForm;