import React, { useState } from 'react';
import Button from './Button';
import Form from './Form';
import TextInput from './TextInput';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const navigate = useNavigate();

  const { login } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();


    try {
      setError('')
      setLoading(true)
      await login(email, password)
      navigate('/')
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError('Failed to login!')
    }

  }
  return (
    <Form style={{ height: "330px" }} onSubmit={handleSubmit}>

      <TextInput
        type='text'
        placeholder='Enter email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></TextInput>

      <TextInput
        type='password'
        placeholder='Enter password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></TextInput>

      <Button type="submit" disabled={loading}>
        <span>Submit Now</span>
      </Button>

      {error && <p className='error'>{error}</p>}

      <div className="info">
        Don't have an account? <Link to='/signup'>Signup</Link> instead.
      </div>
    </Form>
  );
};

export default LoginForm;