// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async () => {
    try {
      if (!firstName || !lastName || !username || !email || !password || !mobileNumber) {
        setErrorMessage('Please fill out all fields.');
        return;
      }

      const response = await axios.post('http://localhost:5000/api/auth/register', {
        firstName,
        lastName,
        username,
        email,
        password,
        mobileNumber
      });

      console.log(response.data);
      setErrorMessage('');
    } catch (error) {
      console.error('Error registering user:', error);
      setErrorMessage('Registration failed. Please try again.');
    }
  };

  return (
    <div className="registration-container">
      <h1>Sign Up</h1>
      <form>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label>
          Mobile Number:
          <input type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
        </label>
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default App;
