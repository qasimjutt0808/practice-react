import React, { useState } from 'react';
import axios from 'axios';
import './signup.css'; // Importing CSS file

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const API = 'http://localhost:8000/api/tasks';

  const addTask = async () => {
    if (!email.trim() || !password.trim()) return;
    try {
      await axios.post(API, { task: `${email} - ${password}` });
      alert('Task submitted!');
      setEmail('');
      setPassword('');
    } catch (err) {
      console.error('Error submitting:', err);
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h1>Sign Up</h1>

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        /><br /><br />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        /><br /><br />

        <button onClick={addTask}>Submit</button>
      </div>
    </div>
  );
}

export default SignUp;
